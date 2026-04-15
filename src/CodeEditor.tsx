import { useState, useRef } from 'react';
import { Terminal, Send } from 'lucide-react';

export default function CodeEditor({ initialCode = '', onSubmit, onChange }: { initialCode?: string, onSubmit: (code: string) => void, onChange?: (code: string) => void }) {
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
    
    // Focus back and move cursor
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const newPos = selectionStart + char.length;
        textareaRef.current.setSelectionRange(newPos, newPos);
      }
    }, 0);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md">
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-muted-foreground" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Editor de Script</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
      </div>
      
      <div className="p-1 relative">
        {/* Mobile Smart Toolbar */}
        <div className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5 overflow-x-auto no-scrollbar scroll-smooth">
          {['{', '}', '(', ')', '[', ']', ';', '"', "'", '`', 'const', '=>', 'console.log'].map((char) => (
            <button
              key={char}
              onClick={() => insertChar(char)}
              className="px-3 py-1.5 rounded bg-white/10 text-[10px] font-mono hover:bg-white/20 active:bg-primary/20 transition-colors border border-white/5 whitespace-nowrap active:scale-95 touch-manipulation font-bold"
              style={{ color: '#000000' }}
            >
              {char}
            </button>
          ))}
        </div>

        <textarea
          ref={textareaRef}
          value={code}
          onChange={e => handleSetCode(e.target.value)}
          className="w-full min-h-[160px] bg-transparent p-4 font-mono text-sm focus:outline-none resize-none"
          style={{ color: '#4ade80', caretColor: '#4ade80' }}
          placeholder="// Digite sua solução aqui..."
          spellCheck={false}
        />
      </div>

    </div>
  );
}
