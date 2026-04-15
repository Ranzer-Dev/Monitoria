import { LayoutDashboard, CodeXml, User, Trophy } from 'lucide-react';

interface MobileNavProps {
  onProfileClick: () => void;
  completedCount: number;
}

export default function MobileNav({ onProfileClick, completedCount }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 glass border-t border-white/5 flex items-center justify-around px-6 md:hidden z-50">
      <NavItem icon={<LayoutDashboard size={20} />} label="Início" active />
      <div className="relative">
        <NavItem icon={<CodeXml size={20} />} label="Missões" />
        {completedCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-background">
            {completedCount}
          </span>
        )}
      </div>
      <NavItem icon={<Trophy size={20} />} label="Rank" />
      <button 
        onClick={onProfileClick}
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-all group"
      >
        <div className="p-1 rounded-lg group-hover:bg-primary/10 transition-colors text-primary">
          <User size={20} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">Perfil</span>
      </button>
    </nav>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1 transition-all ${
      active ? 'text-primary' : 'text-muted-foreground hover:text-white'
    }`}>
      <div className={`p-1 rounded-lg ${active ? 'bg-primary/10' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}
