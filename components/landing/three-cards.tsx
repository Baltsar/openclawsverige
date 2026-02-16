export function ThreeCards() {
  return (
    <section className="section">
      <h2>Vad vi gör</h2>
      <div className="grid-3">
        <div className="card">
          <div className="card-icon">⚙️</div>
          <div className="card-title">Skills</div>
          <div className="card-desc">Agenter, MCP, multi-agent. Öppen kod.</div>
        </div>
        <div className="card">
          <div className="card-icon">🤝</div>
          <div className="card-title">Meetups</div>
          <div className="card-desc">Fika, bygg, visa. Tre pers räcker.</div>
        </div>
        <div className="card">
          <div className="card-icon">📝</div>
          <div className="card-title">Guider</div>
          <div className="card-desc">OpenClaw, CrewAI, lokalt. Steg för steg.</div>
        </div>
      </div>
    </section>
  );
}
