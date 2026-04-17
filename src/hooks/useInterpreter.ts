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
      write: (buffer: Uint8Array) => {
        const text = new TextDecoder().decode(buffer);
        const parts = text.split('\n');
        parts.forEach((part, index) => {
          if (part.trim() || index < parts.length - 1) {
            logs.push(part.trim());
          }
        });
        setOutput([...logs]);
        return buffer.length;
      }
    });

    // 2. Real input() bridge using window.prompt
    pyodide.setStdin({
      read: (buffer: Uint8Array) => {
        const input = window.prompt("O programa está esperando um dado (input):") || "";
        const encoded = new TextEncoder().encode(input + "\n");
        // We must copy the data into the buffer provided by Pyodide
        buffer.set(encoded);
        return encoded.length;
      }
    });

    try {
      await pyodide.runPythonAsync(code);
    } catch (err: any) {
      const cleanError = (msg: string) => {
        return msg
          .split('\n')
          .filter(line => !line.includes('_pyodide') && !line.includes('/lib/python'))
          .join('\n')
          .trim();
      };
      const finalMsg = cleanError(err.message);
      logs.push(finalMsg);
      setOutput(prev => [...prev, finalMsg]);
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
