import { useState, useCallback, useRef } from 'react';

// URL para o compilador TCC portado para WebAssembly
const TCC_JS_URL = "https://cdn.jsdelivr.net/gh/eliot-akira/tcc-wasm@master/tcc.js";

export function useCInterpreter() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const tccInstanceRef = useRef<any>(null);

  const initTCC = useCallback(async () => {
    // Mantido por compatibilidade
    return true; 
  }, []);

  const runC = useCallback(async (code: string) => {
    setIsLoading(true);
    setOutput([]);
    
    const logs: string[] = [];

    try {
      // Usando Wandbox API: suporta GCC real, sem restrições de whitelisting como o Piston
      const res = await fetch("https://wandbox.org/api/compile.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compiler: "gcc-head",
          code: code,
          save: false
        })
      });

      if (!res.ok) throw new Error("Erro na rede ao enviar para compilação.");

      const data = await res.json();
      
      // Wandbox preenche 'compiler_error' para problemas de compilação
      if (data.compiler_error && data.compiler_error.trim().length > 0) {
        logs.push(`⚠️ Erro do Compilador:\n${data.compiler_error}`);
      }
      
      // 'program_error' captura saída da stderr (como um Segmentation Fault)
      if (data.program_error && data.program_error.trim().length > 0) {
        logs.push(`❌ Erro de Execução:\n${data.program_error}`);
      }
      
      // 'program_output' contém a saída padrão do código (stdout)
      if (data.program_output && data.program_output.trim().length > 0) {
        logs.push(data.program_output);
      }

      // Se não houver output mas houver erro silencioso de status (diferente de "0")
      if (data.status !== "0" && logs.length === 0) {
        logs.push(`❌ O programa encerrou de forma anormal (Status: ${data.status})`);
      }

    } catch (err: any) {
      logs.push(`❌ Falha de Conexão com o Servidor de Compilação: ${err.message}`);
    } finally {
       setOutput([...logs]);
       setIsLoading(false);
    }
    
    return logs;
  }, []);

  return {
    runC,
    output,
    isLoading,
    isInitializing
  };
}
