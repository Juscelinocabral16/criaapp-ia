const stats = [
  { label: 'Projetos ativos', value: '28', trend: '+12%' },
  { label: 'App gerados', value: '184', trend: '+31%' },
  { label: 'Mídia na biblioteca', value: '1.2k', trend: '+8%' },
  { label: 'Tempo médio', value: '4m', trend: '-19%' }
]

const projects = [
  {
    name: 'Marketplace Aurora',
    type: 'E-commerce',
    progress: 84,
    owner: 'Equipe Growth',
    status: 'Publicando'
  },
  {
    name: 'Dashboard Nexa',
    type: 'SaaS',
    progress: 64,
    owner: 'Operações',
    status: 'Em revisão'
  },
  {
    name: 'Landing Loja Z',
    type: 'Marketing',
    progress: 92,
    owner: 'Vendas',
    status: 'Pronto'
  }
]

const library = [
  { name: 'banner-principal.png', type: 'Imagem', color: 'cyan' },
  { name: 'video-intro.mp4', type: 'Vídeo', color: 'purple' },
  { name: 'relatorio.pdf', type: 'Arquivo', color: 'green' },
  { name: 'catalogo.zip', type: 'Arquivo', color: 'orange' }
]

const quickActions = ['E-commerce', 'Landing page', 'SaaS', 'App mobile', 'Dashboard']

const sidebarItems = [
  { label: 'Dashboard', active: true, icon: '▣' },
  { label: 'Projetos', icon: '◫' },
  { label: 'Gerador IA', icon: '✦' },
  { label: 'Biblioteca', icon: '▤' },
  { label: 'Compartilhamento', icon: '◎' },
  { label: 'Hospedagem', icon: '▣' }
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">C</div>
          <div>
            <p className="eyebrow">Plataforma</p>
            <h1>CRIAAPP IA</h1>
          </div>
        </div>

        <nav className="nav">
          {sidebarItems.map((item) => (
            <button key={item.label} className={`nav-item ${item.active ? 'active' : ''}`}>
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow">Disponibilidade</p>
          <strong>Hospedagem no ar</strong>
          <span>2 projetos publicos ativos</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="search-wrap">
            <span>⌕</span>
            <input type="text" placeholder="Buscar projetos, mídias e apps" />
          </div>

          <div className="top-actions">
            <button className="ghost-btn">+ Novo projeto</button>
            <button className="icon-btn">🔔</button>
            <div className="user-pill">
              <div className="avatar">J</div>
              <span>Juscelino</span>
            </div>
          </div>
        </header>

        <section className="hero-grid">
          <div className="panel prompt-panel">
            <div className="panel-head">
              <div>
                <p className="eyebrow">Gerador com IA</p>
                <h2>Crie seu app ou site em segundos</h2>
              </div>
              <span className="status-badge">Sem créditos</span>
            </div>

            <textarea
              defaultValue="Crie um app de delivery premium com dashboard do restaurante, área de clientes, pagamentos, catálogo de produtos e design moderno dark mode."
            />

            <div className="prompt-footer">
              <div className="chips">
                {quickActions.map((action) => (
                  <span key={action} className="chip">{action}</span>
                ))}
              </div>

              <button className="primary-btn">Gerar projeto</button>
            </div>
          </div>

          <div className="panel preview-panel">
            <div className="panel-head narrow">
              <div>
                <p className="eyebrow">Preview</p>
                <h3>App gerado</h3>
              </div>
              <span className="tiny-dot" />
            </div>

            <div className="phone-window">
              <div className="phone-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="phone-content">
                <div className="hero-card">
                  <span className="small-label">Nexa</span>
                  <h4>Entrega inteligente</h4>
                  <p>Pedidos em tempo real e gestão total.</p>
                </div>

                <div className="mini-tiles">
                  <div className="mini-tile">
                    <strong>84%</strong>
                    <span>Engajamento</span>
                  </div>
                  <div className="mini-tile accent">
                    <strong>1.2k</strong>
                    <span>Clientes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((item) => (
            <div className="stat-card panel" key={item.label}>
              <p>{item.label}</p>
              <div className="stat-row">
                <strong>{item.value}</strong>
                <span>{item.trend}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel projects-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Projetos recentes</p>
                <h3>Seus apps e sites</h3>
              </div>
              <button className="ghost-btn small">Ver tudo</button>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <div key={project.name} className="project-item">
                  <div className="project-thumb" />
                  <div className="project-copy">
                    <div className="project-topline">
                      <strong>{project.name}</strong>
                      <span className="project-tag">{project.status}</span>
                    </div>
                    <p>{project.type}</p>
                    <div className="project-meta">
                      <span>{project.owner}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <span style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel library-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Biblioteca de mídia</p>
                <h3>Imagens, vídeos e arquivos</h3>
              </div>
              <button className="ghost-btn small">Upload</button>
            </div>

            <div className="upload-box">
              <span className="upload-icon">⇪</span>
              <strong>Adicionar arquivos</strong>
              <p>PNG, JPG, MP4, PDF, ZIP, CSV e muito mais</p>
            </div>

            <div className="media-grid">
              {library.map((item) => (
                <div key={item.name} className={`media-card ${item.color}`}>
                  <div className="media-icon">◧</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
