export default function About() {
  const tools = [
    { name: 'Tableau Public', desc: 'Interactive dashboard visualizations' },
    {  name: 'React 18',      desc: 'Frontend web application framework' },
    {   name: 'React Router',  desc: 'Client-side page routing' },
    { name: 'Vite',          desc: 'Fast build tool & dev server' },
  ]

  const dataSources = [
    { file: 'xyz_Sales.xlsx',   desc: 'Monthly outlet-level sales transactions, revenue, and product category data across 48 Bangalore outlets.' },
    { file: 'xyz_Quality.xlsx', desc: 'Audit scores, issue logs, compliance metrics, and quality dimension ratings per outlet and period.' },
  ]

  const assumptions = [
    'Monthly records are complete and aligned by outlet and period.',
    'Outlet IDs are consistent across both data sources.',
    'Quality scores are on a 0-100 scale, measured monthly.',
    'Revenue figures are in Indian Rupees (₹), recorded monthly.',
    'Bangalore zones (South, East, North, West) are pre-assigned to each outlet.',
    'Missing values in source data are treated as zero for aggregation.',
  ]

  const palette = [
    { name: 'Teal',        hex: '#18837E', usage: 'Primary UI · Main charts · Active states' },
    { name: 'Yale Blue',   hex: '#004975', usage: 'Sidebar · Secondary highlights · Headers' },
    { name: 'White Smoke', hex: '#F2F2F2', usage: 'Page background · Card backgrounds' },
  ]

  return (
    <div>
      {/* Hero */}
      <div className="about-hero">
        <h1>Project Overview</h1>
        <p>
          A unified retail analytics platform for monitoring outlet sales performance
          and operational quality across Bangalore. Built with Tableau Public and React.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>
        {/* Purpose */}
        <div className="card card-xl about-section">
          <h2>Project Purpose</h2>
          <p style={{ fontSize: 14, color: '#5a6a7a', lineHeight: 1.8, marginBottom: 16 }}>
            This portal was built to provide XYZ retail management with a single, unified
            view of outlet performance across two key dimensions: <strong>Sales</strong> and <strong>Quality</strong>.
          </p>
          <p style={{ fontSize: 14, color: '#5a6a7a', lineHeight: 1.8, marginBottom: 16 }}>
            The goal is to enable faster decision-making by surfacing revenue trends,
            compliance gaps, and issue hotspots across all 48 Bangalore outlets in one place.
          </p>
        </div>

        {/* Data Sources */}
        <div className="card card-xl about-section">
          <h2>Data Sources</h2>
          {dataSources.map(d => (
            <div key={d.file} style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  padding: '5px 12px', background: 'rgba(24,131,126,0.1)',
                  borderRadius: 8, fontSize: 12, fontWeight: 700,
                  color: '#18837E', fontFamily: 'monospace'
                }}>{d.file}</div>
              </div>
              <p style={{ fontSize: 13, color: '#5a6a7a', lineHeight: 1.7 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Used */}
      <div className="card card-xl" style={{ marginBottom: 28 }}>
        <div className="about-section">
          <h2>Tools Used</h2>
          <div className="grid-3" style={{ marginTop: 16 }}>
            {tools.map(t => (
              <div key={t.name} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px', background: 'var(--light-gray)',
                borderRadius: 12
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#1a2332', marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#8a9bab' }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: 28 }}>
        {/* Assumptions */}
        <div className="card card-xl about-section">
          <h2>Assumptions</h2>
          {assumptions.map((a, i) => (
            <div key={i} className="assumption-item">
              <div className="assumption-check">✓</div>
              <p style={{ fontSize: 13, color: '#5a6a7a', lineHeight: 1.6 }}>{a}</p>
            </div>
          ))}
        </div>

        {/* Brand Palette */}
        <div className="card card-xl about-section">
          <h2>Brand Palette</h2>
          <p style={{ fontSize: 13, color: '#8a9bab', marginBottom: 20 }}>
            Colours used consistently across all dashboards and portal UI.
          </p>
          {palette.map(p => (
            <div key={p.name} className="color-swatch">
              <div className="swatch-dot" style={{ background: p.hex }} />
              <div className="swatch-info">
                <strong>{p.name}</strong>
                <span>{p.hex} · {p.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
