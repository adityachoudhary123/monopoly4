import { useEffect, useState } from "react";
import { fetchCsv } from "../utils/csv";
import CardGrid from "../components/CardGrid";

export default function UseCases() {
  const [usecases, setUsecases] = useState([]);
  const [agents, setAgents] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const [uc, ag] = await Promise.all([
          fetchCsv("/data/usecases.csv"),
          fetchCsv("/data/agents.csv"),
        ]);
        setUsecases(uc.map((u, idx) => ({ id: `uc-${idx}`, ...u })));
        setAgents(ag.map((a, idx) => ({ id: `ag-${idx}`, ...a })));
      } catch (e) {
        console.error(e);
        setErr("Could not load data. Ensure CSVs exist at /public/data.");
      }
    })();
  }, []);

  return (
    <section className="container">
      <h2>Use Cases</h2>
      {err ? <p style={{ color: "crimson" }}>{err}</p> : null}

      <div className="card" style={{ marginBottom: 18 }}>
        <h3 style={{ marginTop: 0 }}>Use Cases</h3>
        {/* Use Cases (from Excel ➜ CSV) */}
        <CardGrid
          items={usecases}
          emptyText="No use cases yet"
          render={(u) => (
            <>
              <h4>{u.title || "Untitled Use Case"}</h4>
              <div className="meta">
                <strong>Team:</strong> {u.team || "-"} &nbsp;•&nbsp;
                <strong>Owner:</strong> {u.owner || "-"}
              </div>
              {u.description ? (
                <div className="meta" style={{ marginTop: 6 }}>
                  {u.description}
                </div>
              ) : null}
            </>
          )}
        />
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>AI Agents </h3>
        {/* Agents (from Excel ➜ CSV) */}
        <CardGrid
          items={agents}
          emptyText="No agents yet"
          render={(a) => (
            <>
              <h4>{a.title || "Agent"}</h4>
              <div className="meta">
                <strong>Agent Name:</strong> {a.agent_name || "-"} &nbsp;•&nbsp;
                <strong>Team:</strong> {a.team || "-"}
              </div>
              {a.agent_description ? (
                <div className="meta" style={{ marginTop: 6 }}>
                  {a.agent_description}
                </div>
              ) : null}
            </>
          )}
        />
      </div>
    </section>
  );
}
