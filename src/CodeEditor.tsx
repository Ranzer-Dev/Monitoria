import { useState, useRef } from 'react';
import { Terminal, Play, Sparkles } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  language: string;
  onExecute: (code: string) => void;
  isInitializing?: boolean;
  aiThinking?: boolean;
  feedback?: { msg: string; ok: boolean; score?: number } | null;
  onChange?: (code: string) => void;
}

export default function CodeEditor({ 
  initialCode = '', 
  language,
  onExecute, 
  isInitializing = false, 
  aiThinking = false, 
  feedback = null,
  onChange 
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
          style={{ color: '#4ade80', caretColor: '#4ade80', minHeight: '300px' }}
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

      {/* AI Feedback Panel */}
      {feedback && (
        <div style={{ 
          margin: 16, 
          padding: 16, 
          borderRadius: 16, 
          background: feedback.ok ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
          border: `1px solid ${feedback.ok ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
          animation: 'slideUp 0.3s ease-out'
        }}>
          <div className="flex items-start gap-3">
             <div style={{ fontSize: 20 }}>{feedback.ok ? '✅' : '❌'}</div>
             <div className="flex-1">
                <p style={{ margin: 0, color: '#fff', fontSize: 13, lineHeight: 1.5 }}>
                  {feedback.msg}
                </p>
                {feedback.score !== undefined && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="text-[10px] uppercase font-bold text-white/40">Sincronia:</div>
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${feedback.score}%` }} />
                    </div>
                    <div className="text-xs font-mono text-blue-400">{feedback.score}/100</div>
                  </div>
                )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
