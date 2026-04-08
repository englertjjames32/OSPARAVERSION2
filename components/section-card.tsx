export function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card stack">
      <h2 style={{ margin: 0 }}>{title}</h2>
      {children}
    </section>
  );
}
