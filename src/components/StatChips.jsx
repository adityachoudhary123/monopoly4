const CHIPS = [
  { k: "teams", label: "Teams", value: 5 },
  { k: "participants", label: "Participants", value: 43 },
  { k: "usecases", label: "Use Cases", value: 43 },
  { k: "tag1", label: "GenAI Excellence", value: null },
  { k: "tag2", label: "Competing for Victory", value: null },
];

export default function StatChips() {
  return (
    <div className="chips" role="list" aria-label="Event stats">
      {CHIPS.map((c) => (
        <div className="chip" role="listitem" key={c.k}>
          {c.value !== null ? <strong>{c.value}</strong> : null}
          <span>{c.label}</span>
        </div>
      ))}
    </div>
  );
}
