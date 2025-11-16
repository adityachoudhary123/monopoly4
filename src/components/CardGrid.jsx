export default function CardGrid({ items, render, emptyText = "No items" }) {
  if (!items?.length) {
    return <p style={{ color: "var(--muted)" }}>{emptyText}</p>;
  }
  return (
    <div className="grid">
      {items.map((it, i) => (
        <div className="grid-card" key={it.id ?? i}>
          {render(it, i)}
        </div>
      ))}
    </div>
  );
}
