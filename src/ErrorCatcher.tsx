import { useEffect, useState } from 'react';

export default function ErrorCatcher() {
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setErrors(errs => [...errs, `[window.onerror] ${event.message}`]);
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      setErrors(errs => [...errs, `[unhandledrejection] ${event.reason}`]);
    };
    const origConsoleError = console.error;
    console.error = (...args) => {
      setErrors(errs => [...errs, `[console.error] ${args.join(' ')}`]);
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

  if (errors.length === 0) return null;
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#b91c1c',
      color: 'white',
      zIndex: 9999,
      padding: 12,
      fontFamily: 'monospace',
      fontSize: 14,
      maxHeight: 200,
      overflowY: 'auto',
    }}>
      <b>Erros capturados:</b>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {errors.map((err, i) => <li key={i}>{err}</li>)}
      </ul>
    </div>
  );
}
