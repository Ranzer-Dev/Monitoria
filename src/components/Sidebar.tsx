import { Trophy, Flame, LayoutDashboard, CodeXml, Settings, LogOut, User } from 'lucide-react';
import type { UserStats } from '../hooks/useGamification';


interface SidebarProps {
  stats: UserStats;
}

export default function Sidebar({ stats }: SidebarProps) {
  const levelProgress = (stats.xp / (stats.level * 100)) * 100;

  return (
    <div className="w-64 md:w-72 h-full border-r border-white/5 glass flex flex-col p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center neon-glow">
          <CodeXml className="text-white" size={24} />
        </div>
        <h1 className="text-lg font-bold tracking-tight">CodeQuest</h1>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
        <NavItem icon={<CodeXml size={20} />} label="Exercícios" />
        <NavItem icon={<Trophy size={20} />} label="Leaderboard" />
        <NavItem icon={<Settings size={20} />} label="Configurações" />
      </div>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-white/10">
            <User className="text-muted-foreground" size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold">Explorador</p>
            <div className="flex items-center gap-1.5 text-orange-500">
              <Flame size={14} fill="currentColor" />
              <span className="text-xs font-bold">{stats.streak} dias</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-muted-foreground uppercase tracking-wider">Lvl {stats.level}</span>
            <span className="text-primary">{stats.xp} / {stats.level * 100} XP</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>

        <button className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mt-6 text-sm">
          <LogOut size={16} />
          Sair
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
