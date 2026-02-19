export function BlogEmptyState() {
  return (
    <div className="blog-empty">
      <div className="blog-empty-hand" aria-hidden>
        <span className="blog-empty-hand-emoji">🖐️</span>
      </div>
      <p className="blog-empty-title">Handen är tom (för tillfället)</p>
      <p className="blog-empty-desc">
        När vi skriver guider och tankar om AI-agenter dyker de upp här.
        <br />
        Häng med i <a href="https://discord.gg/CSphbTk8En" target="_blank" rel="noopener noreferrer" className="blog-empty-link">Discord</a> så ser du till att det blir av.
      </p>
    </div>
  );
}
