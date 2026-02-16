const DISCORD_URL = "https://discord.gg/CSphbTk8En";
const FACEBOOK_URL = "https://www.facebook.com/groups/2097332881024571/";
const LINKEDIN_URL = "https://www.linkedin.com/groups/9544657/";

export function Cta() {
  return (
    <section className="section" style={{ background: "var(--umber)", padding: "var(--sp-20) var(--sp-10)", textAlign: "center" }}>
      <h2>Bygg med oss.</h2>
      <p>Gå med. Visa vad du bygger.</p>
      <div className="button-row" style={{ justifyContent: "center" }}>
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Discord →
        </a>
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Facebook
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          LinkedIn
        </a>
      </div>
      <p style={{ marginTop: "var(--sp-6)", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold)" }}>
        Gratis. Inga krav. Bara bygga.
      </p>
    </section>
  );
}
