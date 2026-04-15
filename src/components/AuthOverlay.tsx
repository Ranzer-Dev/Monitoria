import { Lock, LogIn, User } from 'lucide-react';

interface AuthOverlayProps {
  onClose: () => void;
}

export default function AuthOverlay({ onClose }: AuthOverlayProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6">
      <div className="bg-card border border-white/5 rounded-3xl p-8 max-w-md w-full shadow-2xl neon-glow animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
          <Lock className="text-primary" size={32} />
        </div>
        
        <h2 className="text-2xl font-black text-center mb-2">Supabase Auth</h2>
        <p className="text-muted-foreground text-center text-sm mb-8 leading-relaxed">
          Esta é uma demonstração da integração futura com o Supabase. Em breve você poderá salvar suas missões na nuvem.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
            <LogIn size={18} />
            Entrar com E-mail
          </button>
          
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-white/5 flex-1" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Ou continue com</span>
            <div className="h-px bg-white/5 flex-1" />
          </div>

          <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <User size={18} />
            GitHub
          </button>
        </div>

        <button 
          className="w-full mt-6 text-xs text-muted-foreground hover:text-primary transition-colors font-medium py-2"
          onClick={onClose}
        >
          Pular por enquanto (Demo Mode)
        </button>
      </div>
    </div>
  );
}
