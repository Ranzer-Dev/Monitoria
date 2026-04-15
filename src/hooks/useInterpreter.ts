import { useState, useCallback, useRef } from 'react';
import { loadPyodide, type PyodideInterface } from 'pyodide';

export function useInterpreter() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const pyodideRef = useRef<PyodideInterface | null>(null);

  const initPyodide = useCallback(async () => {
    if (pyodideRef.current) return pyodideRef.current;
    
    setIsInitializing(true);
    try {
      const pyodide = await loadPyodide({
        // Using CDN for simplicity and smaller local bundle
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/"
      });
      pyodideRef.current = pyodide;
      return pyodide;
    } catch (err) {
      console.error("Pyodide failed to load", err);
      return null;
    } finally {
      setIsInitializing(false);
    }
  }, []);

  const runPython = useCallback(async (code: string) => {
    setIsLoading(true);
    setOutput([]); // Clear previous output
    
    const pyodide = await initPyodide();
    if (!pyodide) {
      setOutput(["❌ Erro: Não foi possível carregar o interpretador Python."]);
      setIsLoading(false);
      return;
    }

    const logs: string[] = [];
    
    // Redirect stdout to our local array
    pyodide.setStdout({
      write: (buffer) => {
        const text = new TextDecoder().decode(buffer);
        logs.push(text.trim());
        setOutput([...logs]);
        return buffer.length;
      }
    });

    try {
      // Small hack to handle input() - Pyodide doesn't support blocking input() by default
      if (code.includes('input(')) {
        logs.push("⚠️ Aviso: input() simulado retornando vazio.");
        await pyodide.runPythonAsync(`
def input(msg=""):
    print(msg)
    return "0"
        `);
      }

      await pyodide.runPythonAsync(code);
    } catch (err: any) {
      logs.push(`❌ Erro de Execução: ${err.message}`);
      setOutput(prev => [...prev, `❌ Erro de Execução: ${err.message}`]);
    } finally {
      setIsLoading(false);
    }
    return logs;
  }, [initPyodide]);

  return {
    runPython,
    output,
    isLoading,
    isInitializing
  };
}
