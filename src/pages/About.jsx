// src/pages/About.jsx
export default function About() {
  return (
    <section className="container">
      <div className="hero" role="region" aria-labelledby="about-title">
        <h2 id="about-title">About — Monopoly 4.0</h2>
        <p>
          Monopoly 4.0 is an HCLTech leadership-driven program that brings people from
          different projects together into cross-functional teams. Each team blends
          technologies and perspectives, and every participant builds a use case rooted
          in their own project to deliver clear, value-centric outcomes with GenAI.
        </p>
        <p>
          The initiative accelerates adoption of cutting-edge GenAI, machine learning,
          and automation—giving individuals hands-on experience while raising their
          visibility with clients and leaders.
        </p>
      </div>

      <article className="card" aria-labelledby="why-matters">
        <h3 id="why-matters">Why it matters</h3>
        <ul>
          <li>
            <strong>For Clients:</strong> efficiency gains and measurable cost reductions.
          </li>
          <li>
            <strong>For HCLTech:</strong> a platform to showcase engineering excellence and innovation.
          </li>
          <li>
            <strong>For Participants:</strong> modern skills, real project impact, and stronger visibility with
            hands-on experience in GenAI, ML, and automation.
          </li>
        </ul>
      </article>
    </section>
  );
}
