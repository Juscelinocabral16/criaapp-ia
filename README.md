:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 500;
  color: #f3f6ff;
  background: #050816;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --bg: #050816;
  --bg-soft: #0d1224;
  --panel: rgba(17, 24, 39, 0.9);
  --panel-2: rgba(19, 28, 48, 0.95);
  --stroke: rgba(148, 163, 184, 0.18);
  --text: #edf3ff;
  --muted: #8a93b2;
  --purple: #7c3aed;
  --purple-soft: rgba(124, 58, 237, 0.2);
  --cyan: #22d3ee;
  --cyan-soft: rgba(34, 211, 238, 0.2);
  --green: #34d399;
  --yellow: #fbbf24;
  --red: #f87171;
  --shadow: 0 20px 60px rgba(15, 23, 42, 0.5);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  background: radial-gradient(circle at top, rgba(124, 58, 237, 0.24), transparent 18%),
    radial-gradient(circle at right, rgba(34, 211, 238, 0.22), transparent 26%),
    var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.sidebar {
  width: 280px;
  border-right: 1px solid var(--stroke);
  background: rgba(8, 12, 24, 0.78);
  backdrop-filter: blur(10px);
  padding: 28px 18px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 8px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.38);
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.brand h1 {
  margin: 0;
  font-size: 1.1rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid transparent;
  border-radius: 14px;
  background: transparent;
  color: var(--text);
  text-align: left;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.18), rgba(34, 211, 238, 0.08));
  border-color: rgba(124, 58, 237, 0.34);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.sidebar-card {
  margin-top: auto;
  background: linear-gradient(180deg, rgba(124, 58, 237, 0.12), rgba(34, 211, 238, 0.08));
  border: 1px solid var(--stroke);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidebar-card strong {
  font-size: 1rem;
}

.sidebar-card span {
  color: var(--muted);
  font-size: 0.83rem;
}

.main-panel {
  flex: 1;
  padding: 28px 32px 36px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 26px;
}

.search-wrap {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--stroke);
  border-radius: 14px;
  min-width: 320px;
  width: min(100%, 620px);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  height: 50px;
}

.search-wrap input {
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  width: 100%;
}

.search-wrap input::placeholder {
  color: var(--muted);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ghost-btn,
.primary-btn,
.icon-btn {
  border-radius: 12px;
  border: 1px solid var(--stroke);
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  padding: 10px 14px;
  transition: 0.2s ease;
}

.ghost-btn:hover,
.primary-btn:hover,
.icon-btn:hover {
  transform: translateY(-1px);
}

.icon-btn {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  padding: 0;
}

.primary-btn {
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  border-color: transparent;
  box-shadow: 0 15px 35px rgba(124, 58, 237, 0.35);
  font-weight: 700;
}

.ghost-btn.small {
  padding: 8px 12px;
  font-size: 0.8rem;
}

.user-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--stroke);
  background: rgba(15, 23, 42, 0.75);
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  font-weight: 800;
  font-size: 0.85rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 18px;
  margin-bottom: 20px;
}

.panel {
  background: rgba(9, 15, 29, 0.9);
  border: 1px solid var(--stroke);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.prompt-panel,
.preview-panel,
.projects-panel,
.library-panel,
.stat-card {
  padding: 18px 18px 16px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 14px;
  margin-bottom: 14px;
}

.panel-head h2,
.panel-head h3,
.section-header h3 {
  margin: 0;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.status-badge {
  border-radius: 999px;
  padding: 7px 10px;
  background: rgba(52, 211, 153, 0.12);
  color: #a7f3d0;
  border: 1px solid rgba(52, 211, 153, 0.25);
  font-size: 0.75rem;
}

textarea {
  width: 100%;
  min-height: 150px;
  resize: vertical;
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.15);
  background: rgba(15, 23, 42, 0.75);
  color: var(--text);
  padding: 16px;
  font-size: 0.98rem;
  outline: none;
}

.prompt-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.12);
  color: #ddd6fe;
  border: 1px solid rgba(124, 58, 237, 0.2);
  padding: 7px 10px;
  font-size: 0.76rem;
}

.preview-panel {
  display: flex;
  flex-direction: column;
}

.narrow {
  margin-bottom: 18px;
}

.tiny-dot {
  width: 10px;
  height: 10px;
  background: var(--green);
  border-radius: 999px;
  box-shadow: 0 0 14px rgba(52, 211, 153, 0.8);
  margin-top: 6px;
}

.phone-window {
  margin-top: auto;
  background: linear-gradient(180deg, rgba(15, 20, 38, 0.95), rgba(9, 13, 28, 0.98));
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 30px;
  padding: 12px 12px 18px;
  width: min(100%, 320px);
  margin-left: auto;
  margin-right: auto;
}

.phone-header {
  display: flex;
  gap: 7px;
  padding: 6px 8px 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.red { background: var(--red); }
.dot.yellow { background: var(--yellow); }
.dot.green { background: var(--green); }

.phone-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px;
}

.hero-card {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.38), rgba(34, 211, 238, 0.18));
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 18px;
  padding: 18px 14px;
}

.small-label {
  color: #dfe7ff;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero-card h4 {
  margin: 8px 0 8px;
  font-size: 1.5rem;
}

.hero-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.85rem;
}

.mini-tiles {
  display: flex;
  gap: 12px;
}

.mini-tile {
  flex: 1;
  background: rgba(15, 23, 42, 0.86);
  border: 1px solid var(--stroke);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mini-tile.accent {
  background: rgba(34, 211, 238, 0.06);
  border-color: rgba(34, 211, 238, 0.2);
}

.mini-tile strong {
  font-size: 1.2rem;
}

.mini-tile span {
  color: var(--muted);
  font-size: 0.77rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 20px;
}

.stat-card p {
  margin: 0 0 14px;
  color: var(--muted);
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 12px;
}

.stat-row strong {
  font-size: clamp(1.8rem, 2vw, 2.3rem);
}

.stat-row span {
  color: #a7f3d0;
  font-size: 0.8rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 18px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.section-header h3 {
  font-size: 1.35rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--stroke);
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.7);
}

.project-thumb {
  width: 88px;
  height: 72px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.35), rgba(34, 211, 238, 0.18));
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.project-copy {
  flex: 1;
}

.project-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.project-copy p {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.82rem;
}

.project-tag {
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  background: rgba(34, 211, 238, 0.12);
  border: 1px solid rgba(34, 211, 238, 0.2);
  color: #a5f3fc;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 8px;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(148, 163, 184, 0.15);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar span {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--purple), var(--cyan));
}

.upload-box {
  border-radius: 18px;
  border: 1px dashed rgba(124, 58, 237, 0.3);
  background: rgba(124, 58, 237, 0.04);
  padding: 26px 16px;
  display: grid;
  place-items: center;
  text-align: center;
  margin-bottom: 16px;
}

.upload-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.upload-box strong {
  font-size: 1.05rem;
}

.upload-box p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 10px;
}

.media-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid var(--stroke);
  background: rgba(15, 23, 42, 0.75);
}

.media-card strong {
  display: block;
  font-size: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

.media-card span {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.72rem;
}

.media-icon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.04);
}

.media-card.cyan .media-icon {
  background: rgba(34, 211, 238, 0.12);
  color: #a5f3fc;
}

.media-card.purple .media-icon {
  background: rgba(124, 58, 237, 0.12);
  color: #ddd6fe;
}

.media-card.green .media-icon {
  background: rgba(52, 211, 153, 0.12);
  color: #bbf7d0;
}

.media-card.orange .media-icon {
  background: rgba(251, 146, 60, 0.12);
  color: #fed7aa;
}

@media (max-width: 1100px) {
  .hero-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 760px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--stroke);
  }

  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-wrap {
    min-width: 0;
    width: 100%;
  }

  .top-actions {
    justify-content: space-between;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .prompt-footer {
    flex-direction: column;
    align-items: stretch;
  }
}
