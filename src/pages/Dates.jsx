export default function Dates(){
  const DATES_IMG = "/images/dates/dates-hero.jpg";
  return (
    <section className="container">
      <h2>Important Dates</h2>

      <div className="card hero-card">
        <img src={"/images/Timeline.png"} alt="Important dates" className="hero-img" loading="lazy" />
      </div>

      {/* existing timeline/list */}
      <div className="card">
        <p>Add your dates/timeline here…</p>
      </div>
    </section>
  );
}
