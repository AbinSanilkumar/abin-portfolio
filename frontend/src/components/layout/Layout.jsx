import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="w-full min-h-screen border-x-3 border-black bg-white overflow-x-hidden">
      {!isHome && <Navbar />}
      <Outlet />
    </div>
  )
}
