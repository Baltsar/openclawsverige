/* Section 11 from brandguide — Cocktailbar × Terminal, copied as-is */

export function TechDemo() {
  return (
    <section className="section">
      <div className="label">11 — i praktiken</div>
      <h2>Cocktailbar × Terminal</h2>
      <p>Alla tre fonterna i action.</p>
      <div className="tech-card">
        <div className="tech-card-header">
          <span className="tech-dot red" />
          <span className="tech-dot gold" />
          <span className="tech-dot blue" />
          <span className="tech-card-title">opensverige — skill dashboard</span>
        </div>
        <div className="tech-card-body">
          <div className="tech-hero-text">Fortnox Integration</div>
          <div className="tech-desc">Automatisera fakturor, bokföring och rapporter.</div>
          <div className="tech-stats-row">
            <div className="tech-stat">
              <div className="tech-stat-value">247</div>
              <div className="tech-stat-label">installationer</div>
            </div>
            <div className="tech-stat">
              <div className="tech-stat-value">v1.2.0</div>
              <div className="tech-stat-label">version</div>
            </div>
            <div className="tech-stat">
              <div className="tech-stat-value">98.4%</div>
              <div className="tech-stat-label">uptime</div>
            </div>
          </div>
          <div className="tech-code">
            <span className="tech-prompt">$</span> openclaw install fortnox-agent<br />
            <span className="tech-success">✓</span> <span className="tech-dim">installed in 2.3s</span>
          </div>
        </div>
      </div>
    </section>
  );
}
