import React, { useState, useMemo } from 'react';
import { glossaryData, type GlossaryCategory } from '../data/glossary';
import { Search, Hash, Layout, Server, Cpu, Layers, Book } from 'lucide-react';

const categoryIcons: Record<GlossaryCategory, React.ReactNode> = {
  frontend: <Layout size={18} />,
  backend: <Server size={18} />,
  processos: <Cpu size={18} />,
  conceitos: <Layers size={18} />,
  design: <Book size={18} />
};

const TermosDev: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | 'all'>('all');

  const filteredTerms = useMemo(() => {
    return glossaryData.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(search.toLowerCase()) || 
                           term.translation.toLowerCase().includes(search.toLowerCase()) ||
                           term.explanation.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || term.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categories: (GlossaryCategory | 'all')[] = ['all', 'frontend', 'backend', 'design', 'processos', 'conceitos'];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 32, 
      animation: 'fadeIn 0.4s ease-out'
    }}>

      {/* Busca e Filtros */}
      <div style={{ 
        display: 'flex', flexDirection: 'column', gap: 20, 
        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', 
        padding: 24, borderRadius: 24, backdropFilter: 'blur(10px)' 
      }}>
        <div style={{ position: 'relative' }}>
          <Search style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} size={20} />
          <input 
            type="text"
            placeholder="O que você quer traduzir hoje? (Ex: Deploy, CI/CD, Frontend...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ 
              width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: 16, padding: '16px 16px 16px 48px', color: '#fff', fontSize: 16, outline: 'none',
              transition: 'border-color 0.2s'
            }}
            className="focus:border-violet-500/50"
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 12, border: 'none',
                background: activeCategory === cat ? '#8b5cf6' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer', transition: '0.2s', fontSize: 13, fontWeight: 700, textTransform: 'capitalize'
              }}
            >
              {cat === 'all' ? <Hash size={16} /> : categoryIcons[cat as GlossaryCategory]}
              {cat === 'all' ? 'Tudo' : cat}
            </button>
          ))}
          
          <div style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1 }}>
            {filteredTerms.length} {filteredTerms.length === 1 ? 'termo encontrado' : 'termos encontrados'}
          </div>
        </div>
      </div>

      {/* Grid de Termos */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
        gap: 20 
      }}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map(term => (
            <div 
              key={term.id}
              style={{
                background: 'rgba(251,191,36,0.01)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 20, padding: 24, transition: 'all 0.3s',
                display: 'flex', flexDirection: 'column', gap: 16
              }}
              className="hover:border-violet-500/30 hover:bg-violet-500/5 group"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: '#fff' }}>{term.term}</h3>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#a78bfa', marginTop: 2 }}>{term.translation}</div>
                </div>
                <div style={{ 
                  width: 40, height: 40, borderRadius: 10, background: 'rgba(139,92,246,0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' 
                }}>
                  {categoryIcons[term.category]}
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                {term.explanation}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {term.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 11, background: 'rgba(255,255,255,0.03)', padding: '4px 10px', borderRadius: 8, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>#{tag}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 0', opacity: 0.5 }}>
            <p style={{ fontSize: 20, fontWeight: 700 }}>Nenhum termo encontrado...</p>
            <p>Tente buscar por algo diferente ou mude a categoria.</p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default TermosDev;
