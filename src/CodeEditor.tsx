import { useState, useRef } from 'react';
import { Terminal, Play, Sparkles } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  language: string;
  onExecute: (code: string) => void;
  isInitializing?: boolean;
  aiThinking?: boolean;
  onChange?: (code: string) => void;
  executionOutput?: string[];
}

export default function CodeEditor({ 
  initialCode = '', 
  language,
  onExecute, 
  isInitializing = false, 
  aiThinking = false, 
  onChange,
  executionOutput = []
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSetCode = (newCode: string) => {
    setCode(newCode);
    if (onChange) onChange(newCode);
  };

  const insertChar = (char: string) => {
    if (!textareaRef.current) return;
    const { selectionStart, selectionEnd } = textareaRef.current;
    const newCode = code.substring(0, selectionStart) + char + code.substring(selectionEnd);
    handleSetCode(newCode);
    
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const newPos = selectionStart + char.length;
        textareaRef.current.setSelectionRange(newPos, newPos);
      }
    }, 0);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md flex flex-col h-full">
      {/* Header */}
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-muted-foreground" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Editor — {language}</span>
        </div>
        <div className="flex gap-4">
          <button 
            disabled={isInitializing || aiThinking}
            onClick={() => onExecute(code)}
            style={{
              padding: '6px 16px',
              borderRadius: 8,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: (isInitializing || aiThinking) ? 0.5 : 1,
              cursor: (isInitializing || aiThinking) ? 'not-allowed' : 'pointer'
            }}
          >
            {aiThinking ? <Sparkles size={14} className="animate-spin" /> : <Play size={14} />}
            {aiThinking ? 'Analisando...' : 'Testar Código'}
          </button>
        </div>
      </div>
      
      {/* Editor Area */}
      <div className="flex-1 relative bg-black/20">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={e => handleSetCode(e.target.value)}
          className="w-full h-full p-4 font-mono text-sm focus:outline-none resize-none bg-transparent"
          style={{ color: '#4ade80', caretColor: '#4ade80', minHeight: '270px' }}
          placeholder="// Digite sua solução aqui..."
          spellCheck={false}
        />
        
        {/* Floating Toolbar (Mobile) */}
        <div className="absolute bottom-4 left-4 right-4 md:hidden flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {['( )', '{ }', '[ ]', ':', '=', '"', "'", 'print', 'input'].map((char) => (
            <button
              key={char}
              onClick={() => insertChar(char.split(' ')[0])}
              className="px-3 py-1.5 rounded bg-white/10 text-[10px] font-mono hover:bg-white/20 border border-white/5 whitespace-nowrap text-white"
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Area */}
      {(executionOutput.length > 0) && (
        <div style={{
          margin: '0 16px 16px',
          background: '#0a0a0a',
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '230px',
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
             <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1, marginLeft: 4 }}>
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
                  color: line.includes('❌') || line.includes('⚠️') ? '#fca5a5' : '#e2e8f0',
                  borderLeft: line.includes('❌') || line.includes('⚠️') ? '2px solid #ef4444' : 'none',
                  paddingLeft: line.includes('❌') || line.includes('⚠️') ? 8 : 0
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
