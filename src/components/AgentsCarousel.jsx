import { useEffect, useMemo, useState } from "react";
import { fetchCsv } from "../utils/csv";

const PAGE_SIZE = 6; // agents per slide

export default function AgentsCarousel() {
  const [agents, setAgents] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const rows = await fetchCsv("/data/agents.csv");
        const arr = rows.map((a, i) => ({ id: `ag-${i}`, ...a }));
        setAgents(arr);
      } catch (e) {
        console.error(e);
        setAgents([]);
      }
    })();
  }, []);

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < agents.length; i += PAGE_SIZE) {
      out.push(agents.slice(i, i + PAGE_SIZE));
    }
    return out.length ? out : [[]];
  }, [agents]);

  const len = pages.length;
  const go = (d) => setIdx((i) => (i + d + len) % len);

  return (
    <section className="container" style={{ marginTop: "2rem" }}>
      {/* ---- Header ---- */}
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem" }}>
        Featured Agents
      </h2>
      <p style={{ marginTop: "-0.6rem", color: "var(--muted)" }}>
        Browse the agent roster in pages. <strong>{agents.length}</strong> total
      </p>

      {/* ---- Carousel ---- */}
      <section
        className="slider agents-carousel"   // ⬅ add agents-carousel
        aria-label="Agents showcase"
        aria-roledescription="carousel"
        style={{ marginTop: "1rem" }}
      >
        <div
          className="slider__viewport"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(-1);
            if (e.key === "ArrowRight") go(+1);
          }}
        >
          <div
            className="slider__track"
            style={{ transform: `translateX(${-idx * 100}%)` }}
          >
            {pages.map((page, i) => (
              <article
                className="slide"
                key={`p-${i}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${len}`}
              >
                <div
                  className="slide__media"
                  style={{ maxWidth: "100%", margin: "0 auto" }}
                >
                  <div
                    className="grid"
                    style={{ gridTemplateColumns: "repeat(3,1fr)" }}
                  >
                    {page.map((a) => (
                      <div className="grid-card" key={a.id}>
                        <h4 style={{ marginBottom: "0.5rem" }}>{a.title || "Agent"}</h4>
                        <div className="meta">
                          <strong>Agent Name:</strong> {a.agent_name || "-"}
                        </div>
                        <div className="meta">
                          <strong>Team:</strong> {a.team || "-"}
                        </div>
                        {a.agent_description ? (
                          <div
                            className="meta"
                            style={{ marginTop: 6, lineHeight: "1.4" }}
                          >
                            {a.agent_description.length > 160
                              ? a.agent_description.slice(0, 160) + "…"
                              : a.agent_description}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {len > 1 && (
            <>
              <button
                className="slider__btn prev"
                onClick={() => go(-1)}
                aria-label="Previous page"
              >
                ‹
              </button>
              <button
                className="slider__btn next"
                onClick={() => go(+1)}
                aria-label="Next page"
              >
                ›
              </button>
            </>
          )}
        </div>

        {len > 1 && (
          <div
            className="slider__dots"
            role="tablist"
            aria-label="Page selector"
            style={{ marginTop: "1rem" }}
          >
            {pages.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === idx}
                className={`dot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
