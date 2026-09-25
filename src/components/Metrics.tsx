type Metric = { n: string; l: string };

export default function Metrics({ items }: { items?: Metric[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="metrics">
      {items.map((m) => (
        <div className="metric" key={m.l}>
          <span className="metric__n">{m.n}</span>
          <span className="metric__l">{m.l}</span>
        </div>
      ))}
    </div>
  );
}
