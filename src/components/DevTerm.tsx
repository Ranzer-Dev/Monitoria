import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getTerm } from '../data/glossary';
import { HelpCircle, ExternalLink } from 'lucide-react';

interface DevTermProps {
  id: string;
  children?: React.ReactNode;
}

const DevTerm: React.FC<DevTermProps> = ({ id, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const termRef = useRef<HTMLSpanElement>(null);
  const closeTimeoutRef = useRef<any>(null);
  const term = getTerm(id);

  if (!term) return <>{children || id}</>;

  const updatePosition = () => {
    if (termRef.current) {
      const rect = termRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      let left = rect.left + rect.width / 2;
      const tooltipWidth = 300;
      
      if (left + tooltipWidth / 2 > window.innerWidth - 20) {
        left = window.innerWidth - tooltipWidth / 2 - 20;
      } else if (left - tooltipWidth / 2 < 20) {
        left = tooltipWidth / 2 + 20;
      }

      setPosition({
        top: rect.top + scrollY - 10,
        left: left
      });
    }
  };

  const handleOpen = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    updatePosition();
    setIsOpen(true);
  };

  const handleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms de "carência" para o usuário mover o mouse até o balão
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, { passive: true });
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, [isOpen]);

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("🚀 DevTerm: Disparando Navegação Direta!");
    setIsOpen(false);
    
    // Tenta Navegação Global (Source of Truth)
    if ((window as any).monitoriaNavigate) {
      (window as any).monitoriaNavigate('glossary');
    } else {
      // Fallback para evento customizado
      window.dispatchEvent(new CustomEvent('monitoria-change-view', { 
        detail: { view: 'glossary', termId: id } 
      }));
    }
  };

  const tooltipContent = isOpen && createPortal(
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -100%)',
        width: 300,
        zIndex: 100000,
        pointerEvents: 'auto',
        animation: 'slideUpFade 0.2s ease-out forwards'
      }}
    >
      <div style={{
        background: 'rgba(26, 26, 36, 0.98)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(167,139,250,0.4)',
        borderRadius: 20,
        padding: 20,
        boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
        marginBottom: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <HelpCircle size={14} color="#a78bfa" />
          <span style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1 }}>Glossário Dev</span>
        </div>
        
        <h4 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 800, color: '#fff' }}>{term.term}</h4>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#a78bfa', marginBottom: 12 }}>
          {term.translation}
        </div>
        
        <p style={{ margin: '0 0 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
          {term.explanation}
        </p>

        <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div style={{ display: 'flex', gap: 4 }}>
              {term.tags.slice(0, 2).map(tag => (
                <span key={tag} style={{ fontSize: 9, background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 6, color: 'rgba(255,255,255,0.4)' }}>#{tag}</span>
              ))}
           </div>
           
           <button 
             onClick={handleNavigate}
             style={{ 
               background: 'rgba(167,139,250,0.15)',
               border: '1px solid rgba(167,139,250,0.3)',
               color: '#a78bfa',
               fontSize: 11,
               fontWeight: 700,
               padding: '6px 12px',
               borderRadius: 10,
               display: 'flex',
               alignItems: 'center',
               gap: 6,
               cursor: 'pointer',
               transition: '0.2s',
               outline: 'none'
             }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(167,139,250,0.25)'}
             onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(167,139,250,0.15)'}
           >
              Saber mais <ExternalLink size={12} />
           </button>
        </div>
      </div>
      
      <div style={{
        width: 0, height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '10px solid rgba(167,139,250,0.4)',
        margin: '0 auto'
      }} />
    </div>,
    document.body
  );

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span
        ref={termRef}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'help',
          color: '#a78bfa',
          fontWeight: 700,
          borderBottom: '2px dashed rgba(167,139,250,0.4)',
          transition: 'all 0.2s',
          padding: '0 2px',
          borderRadius: '4px'
        }}
        className="hover:bg-violet-500/10 hover:border-violet-500/80"
      >
        {children || term.term}
      </span>

      {tooltipContent}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUpFade {
          from { opacity: 0; transform: translate(-50%, -90%); }
          to { opacity: 1; transform: translate(-50%, -100%); }
        }
      `}} />
    </span>
  );
};

export default DevTerm;
