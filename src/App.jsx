import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import Sales from './pages/Sales'
import Quality from './pages/Quality'
import About from './pages/About'

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-body">
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/sales"   element={<Sales />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/about"   element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
