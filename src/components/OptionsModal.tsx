import { Trophy, LayoutDashboard, CodeXml, Settings, LogOut, User, Flame, X } from 'lucide-react';
import type { UserStats } from '../hooks/useGamification';

interface OptionsModalProps {
  stats: UserStats;
  onClose: () => void;
}

export default function OptionsModal({ stats, onClose }: OptionsModalProps) {
  const levelProgress = (stats.xp / (stats.level * 100)) * 100;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="bg-card border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center border-2 border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <User className="text-white" size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Explorador</h2>
            <div className="flex items-center gap-1.5 text-orange-500 mt-1">
              <Flame size={16} fill="currentColor" />
              <span className="text-sm font-bold">{stats.streak} dias de ofensiva</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 mb-8 border border-white/5">
          <div className="flex justify-between text-sm font-bold mb-3">
            <span className="text-muted-foreground uppercase tracking-wider">Nível {stats.level}</span>
            <span className="text-primary">{stats.xp} / {stats.level * 100} XP</span>
          </div>
          <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>

        <div className="space-y-2 mb-8">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<CodeXml size={20} />} label="Exercícios" />
          <NavItem icon={<Trophy size={20} />} label="Leaderboard" />
          <NavItem icon={<Settings size={20} />} label="Configurações" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-red-400 bg-white/5 hover:bg-red-500/10 transition-all py-3 rounded-xl font-medium border border-transparent hover:border-red-500/20">
          <LogOut size={18} />
          Sair da Conta
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:bg-white/5 hover:text-white border border-transparent'
    }`}>
      {icon}
      <span className="font-semibold">{label}</span>
    </button>
  );
}
