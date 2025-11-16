import AboutCarousel from "../components/AboutCarousel";

export default function About(){
  // put your image paths/URLs here (order = carousel order)
  const aboutImages = [
    "/images/Monopoly-Intro.png",
    "/images/Monopoly-Intro2.png",
    "/images/Monopoly-Intro4.png",
  ];

  return (
    <section className="container">
      <h2>About</h2>

      <AboutCarousel images={aboutImages} />

      {/* keep your existing About text/content below if you have it */}
      <div className="card" style={{ marginTop: 18 }}>
        <p>
          {/* replace this with your real About content */}
          Welcome to the event! Add your about text here…
        </p>
      </div>
    </section>
  );
}
