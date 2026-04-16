import { useState, useRef, useEffect } from 'react';
import { Search, Zap, Settings, Trophy, LayoutDashboard, CodeXml, LogOut, User, Flame, BookOpen } from 'lucide-react';
import type { UserStats } from '../hooks/useGamification';
import type { Language } from '../App';

interface HeaderProps {
  stats: UserStats;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  view: 'practice' | 'theory';
  onViewChange: (view: 'practice' | 'theory') => void;
}

export default function Header({ stats, language, onLanguageChange, view, onViewChange }: HeaderProps) {
  const levelProgress = (stats.xp / (stats.level * 100)) * 100;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; right: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleGearClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setDropdownOpen(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 w-full z-[100] border-b border-white/10 glass"
        style={{ height: '54px' }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between gap-4" style={{ height: '100%' }}>

          {/* Left: Logo + Mobile XP */}
          <div className="flex items-center gap-4">
            <h1 style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', margin: 0, whiteSpace: 'nowrap' }}>&lt;/&gt;CodeQuest</h1>

            {/* Mobile XP mini bar — bigger and separated */}
            <div className="sm:hidden" style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 80, marginLeft: 12, paddingLeft: 12, borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(263.4 70% 65%)' }}>LVL {stats.level}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: 'hsl(263.4 70% 65%)' }}>
                  <Zap size={10} fill="currentColor" />
                  <span style={{ fontSize: 10, fontWeight: 900 }}>{stats.xp} XP</span>
                </div>
              </div>
              <div style={{ height: 5, width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${levelProgress}%`, background: 'hsl(263.4 70% 55%)', borderRadius: 99, transition: 'width 0.5s ease' }} />
              </div>
            </div>
          </div>

          {/* Center: Mode Switcher + Language switcher */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-none"
            style={{ height: '96px' }}
          >
            {/* Mode Switcher - Centered exactly on the page */}
            <div className="pointer-events-auto" style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px', borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => onViewChange('practice')}
                style={{
                  padding: '6px 12px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6,
                  background: view === 'practice' ? 'rgba(139,92,246,0.35)' : 'transparent',
                  color: view === 'practice' ? '#a78bfa' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, transition: 'all 0.2s',
                  boxShadow: view === 'practice' ? '0 0 0 1px rgba(139,92,246,0.3)' : 'none'
                }}
              >
                <CodeXml size={14} /> Missões
              </button>
              <button
                onClick={() => onViewChange('theory')}
                style={{
                  padding: '6px 12px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6,
                  background: view === 'theory' ? 'rgba(251,191,36,0.25)' : 'transparent',
                  color: view === 'theory' ? '#fbbf24' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, transition: 'all 0.2s',
                  boxShadow: view === 'theory' ? '0 0 0 1px rgba(251,191,36,0.3)' : 'none'
                }}
              >
                <BookOpen size={14} /> Aula Teórica
              </button>
            </div>

            {/* Language switcher — anchored to the right of the center, won't push the position */}
            {view === 'practice' && (
              <div
                className="pointer-events-auto animate-in fade-in slide-in-from-left-4 duration-300"
                style={{
                  position: 'absolute',
                  left: 'calc(100% + 48px)', // Large gap (48px) as requested
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '4px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <LangBtn active={language === 'python'} label="🐍 Python" onClick={() => onLanguageChange('python')} />
                <LangBtn active={language === 'c'} label="⚙️ C" onClick={() => onLanguageChange('c')} />
                <LangBtn active={language === 'logic'} label="🧠 Lógica" onClick={() => onLanguageChange('logic')} />
              </div>
            )}
          </div>

          {/* Right side: Search + Settings */}
          <div className="flex items-center gap-3">
            <div className="relative group hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={15} />
              <input
                type="text"
                placeholder="Buscar missão..."
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all w-40 md:w-56"
              />
            </div>

            <button
              ref={buttonRef}
              onClick={handleGearClick}
              title="Opções"
              className={`p-2 rounded-full transition-all duration-300 ${dropdownOpen
                ? 'text-primary bg-primary/10 rotate-45'
                : 'text-muted-foreground hover:text-primary hover:bg-white/5'
                }`}
              style={{ transform: dropdownOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              <Settings size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown rendered at root level to avoid overflow/stacking context issues */}
      {dropdownOpen && dropdownPos && (
        <div
          ref={dropdownRef}
          className="fixed w-80 rounded-2xl shadow-2xl z-[200] overflow-hidden animate-in slide-in-from-top-2 duration-200"
          style={{
            top: dropdownPos.top,
            right: dropdownPos.right,
            background: 'rgba(10, 10, 20, 0.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Profile section */}
          <div className="p-5 border-b border-white/10">
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: '12px' }}>
              {/* Avatar */}
              <div
                style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', flexShrink: 0 }}
              >
                <User size={20} className="text-primary" />
              </div>

              {/* Name + streak */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                <p style={{ margin: 0, color: 'white', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>Explorador</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Flame size={12} fill="#f97316" className="text-orange-500" />
                  <span style={{ fontSize: 11, color: '#fb923c', fontWeight: 600, lineHeight: 1.2 }}>{stats.streak} dias de ofensiva</span>
                </div>
              </div>

              {/* Level + XP */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, flexShrink: 0 }}>
                <p style={{ margin: 0, color: 'hsl(263.4 70% 65%)', fontWeight: 900, fontSize: 13, lineHeight: 1.2 }}>LVL {stats.level}</p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: 11, lineHeight: 1.2 }}>{stats.xp} XP</p>
              </div>
            </div>

            {/* XP Progress bar */}
            <div className="mt-4">
              <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${levelProgress}%` }}
                />
              </div>
              <p className="text-[10px] text-white/40 mt-1.5 text-center">
                {stats.xp} / {stats.level * 100} XP para o próximo nível
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="p-3 space-y-0.5">
            <DropItem icon={<LayoutDashboard size={17} />} label="Dashboard" active />
            <DropItem icon={<CodeXml size={17} />} label="Exercícios" />
            <DropItem icon={<Trophy size={17} />} label="Leaderboard" />
          </div>

          {/* Footer */}
          <div className="p-3 pt-0">
            <div className="h-px w-full mb-3" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-white/50 hover:text-red-400 hover:bg-red-500/10">
              <LogOut size={17} />
              Sair da Conta
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DropItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? 'text-white' : 'text-white/60 hover:text-white'
        }`}
      style={active ? { background: 'rgba(139,92,246,0.35)', boxShadow: '0 0 0 1px rgba(139,92,246,0.25)' } : undefined}
      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = ''; }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function LangBtn({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '5px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
        fontWeight: 700, fontSize: 12, transition: 'all 0.2s',
        background: active ? 'rgba(139,92,246,0.35)' : 'transparent',
        color: active ? '#a78bfa' : 'rgba(255,255,255,0.4)',
        boxShadow: active ? '0 0 0 1px rgba(139,92,246,0.3)' : 'none',
      }}
    >
      {label}
    </button>
  );
}
