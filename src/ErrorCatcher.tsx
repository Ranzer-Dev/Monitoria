import { useEffect, useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export default function ErrorCatcher() {
  const [errors, setErrors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setErrors(errs => [...errs, `[window.onerror] ${event.message}`]);
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = typeof event.reason === 'object' ? JSON.stringify(event.reason) : String(event.reason);
      setErrors(errs => [...errs, `[unhandledrejection] ${reason}`]);
    };
    const origConsoleError = console.error;
    console.error = (...args) => {
      const formatted = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');
      setErrors(errs => [...errs, `[console.error] ${formatted}`]);
      origConsoleError(...args);
    };
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
      console.error = origConsoleError;
    };
  }, []);

  if (errors.length === 0 || !isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 16,
      right: 16,
      maxWidth: 520,
      width: 'calc(100% - 32px)',
      background: '#7f1d1d',
      color: '#fef2f2',
      zIndex: 9999,
      padding: 16,
      borderRadius: 16,
      fontFamily: 'monospace',
      fontSize: 13,
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      border: '1px solid rgba(248,113,113,0.3)',
      maxHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13, color: '#fca5a5' }}>
          <AlertTriangle size={16} />
          <span>Monitor de Execução — Registros</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            borderRadius: 8,
            width: 24,
            height: 24,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={14} />
        </button>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {errors.map((err, i) => (
          <li key={i} style={{ wordBreak: 'break-word', opacity: 0.9 }}>
            {err}
          </li>
        ))}
      </ul>
    </div>
  );
}
