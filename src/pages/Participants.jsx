export default function Participants(){
  const PARTICIPANTS_IMG = "/images/participants/participants-hero.jpg";
  return (
    <section className="container">
      <h2>Participants</h2>

      <div className="card hero-card">
        <img src={"/images/Participants.png"} alt="Participants" className="hero-img" loading="lazy" />
      </div>

      {/* existing participants grid/list */}
      <div className="card">
        <p>Add your participants grid here…</p>
      </div>
    </section>
  );
}
