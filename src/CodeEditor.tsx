import { useState, useRef, useEffect } from 'react';
import { Terminal, Play, Sparkles, RotateCcw, FileCode, Copy, Check } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  language: string;
  onExecute: (code: string) => void;
  isInitializing?: boolean;
  aiThinking?: boolean;
  onChange?: (code: string) => void;
  executionOutput?: string[];
  onInsertBoilerplate?: () => void;
}

export default function CodeEditor({ 
  initialCode = '', 
  language,
  onExecute, 
  isInitializing = false, 
  aiThinking = false, 
  onChange,
  executionOutput = [],
  onInsertBoilerplate
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleSetCode = (newCode: string) => {
    setCode(newCode);
    if (onChange) onChange(newCode);
  };

  const insertSnippet = (snippet: string) => {
    if (!textareaRef.current) return;
    const { selectionStart, selectionEnd } = textareaRef.current;
    const newCode = code.substring(0, selectionStart) + snippet + code.substring(selectionEnd);
    handleSetCode(newCode);
    
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const newPos = selectionStart + snippet.length;
        textareaRef.current.setSelectionRange(newPos, newPos);
      }
    }, 0);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cSnippets = [
    { label: 'printf', code: 'printf("%d\\n", );' },
    { label: 'scanf', code: 'scanf("%d", &);' },
    { label: ';', code: ';' },
    { label: '{ }', code: '{\n    \n}' },
    { label: '( )', code: '()' },
    { label: '" "', code: '""' },
    { label: 'int', code: 'int ' },
    { label: 'float', code: 'float ' },
    { label: 'return 0;', code: 'return 0;' }
  ];

  const pySnippets = [
    { label: 'print', code: 'print()' },
    { label: 'input', code: 'input()' },
    { label: 'int()', code: 'int(input())' },
    { label: 'float()', code: 'float(input())' },
    { label: 'if', code: 'if :\n    ' },
    { label: 'else', code: 'else:\n    ' },
    { label: 'for', code: 'for i in range():\n    ' },
    { label: '( )', code: '()' },
    { label: '" "', code: '""' }
  ];

  const activeSnippets = language === 'c' ? cSnippets : pySnippets;

  return (
    <div className="rounded-xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md flex flex-col h-full">
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-muted-foreground" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Editor — {language}</span>
          </div>
          {onInsertBoilerplate && (
            <button
              onClick={onInsertBoilerplate}
              className="text-[11px] px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              title="Inserir modelo inicial de código"
            >
              <FileCode size={12} />
              <span>Esqueleto Base</span>
            </button>
          )}
          <button
            onClick={() => handleSetCode('')}
            className="text-[11px] px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/80 border border-white/10 flex items-center gap-1 transition-all"
            title="Limpar editor"
          >
            <RotateCcw size={11} />
            <span>Limpar</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-all"
            title="Copiar código"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
          <button 
            disabled={isInitializing || aiThinking}
            onClick={() => onExecute(code)}
            style={{
              padding: '6px 18px',
              borderRadius: 8,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: (isInitializing || aiThinking) ? 0.5 : 1,
              cursor: (isInitializing || aiThinking) ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(16,185,129,0.2)'
            }}
          >
            {aiThinking ? <Sparkles size={14} className="animate-spin" /> : <Play size={14} />}
            {aiThinking ? 'Analisando...' : 'Testar Código'}
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative bg-black/20 flex flex-col">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={e => handleSetCode(e.target.value)}
          className="w-full flex-1 p-4 font-mono text-sm focus:outline-none resize-none bg-transparent"
          style={{ color: '#4ade80', caretColor: '#4ade80', minHeight: '260px' }}
          placeholder={language === 'c' ? '// Digite seu programa em C aqui...' : '# Digite seu programa em Python aqui...'}
          spellCheck={false}
        />
        
        <div className="px-3 py-2 bg-white/[0.02] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto">
          <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mr-1 select-none">Atalhos:</span>
          {activeSnippets.map((item) => (
            <button
              key={item.label}
              onClick={() => insertSnippet(item.code)}
              className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono hover:bg-white/15 border border-white/10 whitespace-nowrap text-white/80 hover:text-white transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {(executionOutput.length > 0) && (
        <div style={{
          margin: '12px 16px 16px',
          background: '#0a0a0a',
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '220px',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{
            padding: '6px 12px',
            background: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
             <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginLeft: 4 }}>
                Console de Saída
             </span>
          </div>
          <div style={{ 
            padding: '12px', 
            overflowY: 'auto', 
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            lineHeight: 1.6,
            color: '#e2e8f0'
          }}>
             {executionOutput.map((line, i) => (
                <div key={i} style={{ 
                  marginBottom: 4,
                  color: line.includes('❌') || line.includes('⚠️') || line.includes('error:') || line.includes('Erro') ? '#fca5a5' : '#e2e8f0',
                  borderLeft: line.includes('❌') || line.includes('⚠️') || line.includes('error:') || line.includes('Erro') ? '2px solid #ef4444' : 'none',
                  paddingLeft: line.includes('❌') || line.includes('⚠️') || line.includes('error:') || line.includes('Erro') ? 8 : 0
                }}>
                   {line}
                </div>
             ))}
          </div>
        </div>
      )}
    </div>
  );
}
