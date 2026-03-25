import { useLocation } from 'react-router-dom'

const PAGE_META = {
  '/':        { title: 'Home',              breadcrumb: 'XYZ Analytics Portal' },
  '/sales':   { title: 'Sales Dashboard',   breadcrumb: 'Dashboards / Sales' },
  '/quality': { title: 'Quality Dashboard', breadcrumb: 'Dashboards / Quality' },
  '/about':   { title: 'About',             breadcrumb: 'XYZ Analytics Portal / About' },
}

export default function Header() {
  const { pathname } = useLocation()
  const meta = PAGE_META[pathname] || PAGE_META['/']

  const now = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-title">{meta.title}</span>
        <span className="header-breadcrumb">{meta.breadcrumb}</span>
      </div>
      <div className="header-right">
        <div className="header-avatar" title="Analyst">AN</div>
      </div>
    </header>
  )
}
