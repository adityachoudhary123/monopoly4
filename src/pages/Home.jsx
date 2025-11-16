// src/pages/Home.jsx
import Marquee from "../components/Marquee.jsx";
import ShowcaseSlider from "../components/ShowcaseSlider.jsx";
import AgentsCarousel from "../components/AgentsCarousel.jsx";

export default function Home() {
  return (
    <section className="container">
      <div className="hero">
        <h1>Welcome to MONOPOLY 4.0</h1>
        <p>Explore teams, scores, and use cases in our GEN AI challenge.</p>
      </div>
      <Marquee />
      <AgentsCarousel />
    </section>
  );
}
