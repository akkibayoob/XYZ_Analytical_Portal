import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero Banner */}
      <div className="home-hero">
        <h1>Welcome to<br />XYZ Analytics Portal</h1>
        <p>
          A unified retail analytics experience for monitoring outlet sales
          performance and operational quality across Bangalore.
        </p>

        <div className="hero-cta-row">
          <button className="btn-hero-primary" onClick={() => navigate('/sales')}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Open Dashboards
          </button>
          <button className="btn-hero-outline" onClick={() => navigate('/about')}>
            Learn More
          </button>
        </div>
      </div>

      {/* Dashboard Quick Access */}
      <div style={{ marginBottom: 32 }}>
        <h2 className="section-title">Dashboards</h2>
        <p className="section-sub">Jump straight to your analytics workspace</p>

        <div className="grid-2">
          {/* Sales Card */}
          <div className="dash-card" onClick={() => navigate('/sales')} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate('/sales')}>
            <div className="dash-card-icon" style={{ background: 'rgba(24,131,126,0.1)' }}>
              <svg width="24" height="24" fill="none" stroke="#18837E" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3>Sales Analytics</h3>
              <p>Track outlet revenue, regional performance, monthly trends and top performers across Bangalore.</p>
            </div>
            <div className="dash-card-arrow" style={{ color: '#18837E' }}>
              Open Sales Dashboard
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Quality Card */}
          <div className="dash-card" onClick={() => navigate('/quality')} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate('/quality')}>
            <div className="dash-card-icon" style={{ background: 'rgba(0,73,117,0.08)' }}>
              <svg width="24" height="24" fill="none" stroke="#004975" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3>Quality Analytics</h3>
              <p>Monitor compliance scores, issue tracking, audit results and quality trends per outlet and period.</p>
            </div>
            <div className="dash-card-arrow" style={{ color: '#004975' }}>
              Open Quality Dashboard
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
