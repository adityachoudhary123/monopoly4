export default function Rules(){
  const RULES_IMG = "/images/rules/rules-hero.jpg";
  return (
    <section className="container">
      <h2>Rules</h2>

      <div className="card hero-card">
        <img src={"/images/Rules.png"} alt="Rules" className="hero-img" loading="lazy" />
      </div>

      {/* existing rules content */}
      <div className="card">
        <p>Add your rules list here…</p>
      </div>
    </section>
  );
}
