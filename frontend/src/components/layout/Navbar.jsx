import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { useSiteSettings } from '../../hooks/useSiteSettings'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { settings } = useSiteSettings()
  const brand = settings?.site_name || 'ABIN DEV'

  return (
    <header className="brutal-border border-t-0 border-x-0 flex flex-col lg:flex-row items-stretch overflow-hidden sticky top-0 z-50 bg-white shrink-0">
      <div className="flex items-stretch justify-between lg:hidden">
        <div className="bg-brutal-lime brutal-border border-y-0 border-l-0 px-6 py-4 font-bold text-lg flex items-center shrink-0 gap-2">
          {settings?.logo ? (
            <img src={settings.logo} alt={brand} className="h-6" />
          ) : null}
          &lt;/&gt; {brand}
        </div>
        <button
          className="lg:hidden px-4 py-4 brutal-border border-y-0 border-r-0 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 w-full bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>
      <nav className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row flex-grow border-t-3 lg:border-t-0 border-black`}>
        <div className="hidden lg:flex bg-brutal-lime brutal-border border-y-0 border-l-0 px-6 py-4 font-bold text-lg items-center shrink-0 gap-2">
          {settings?.logo ? (
            <img src={settings.logo} alt={brand} className="h-6" />
          ) : null}
          &lt;/&gt; {brand}
        </div>
        <ul className="flex flex-col lg:flex-row text-xs font-bold uppercase tracking-wider overflow-x-auto whitespace-nowrap items-stretch flex-grow lg:justify-center">
          {navLinks.map((link) => (
            <li key={link.label} className="border-b-3 lg:border-b-0 border-black last:border-b-0 shrink-0">
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="px-4 py-4 hover:bg-gray-100 cursor-pointer block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="px-4 py-4 hover:bg-gray-100 cursor-pointer block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-brutal-purple text-white px-6 py-4 font-bold flex items-center justify-center lg:justify-between gap-4 brutal-border border-y-0 lg:border-r-0 hover:bg-opacity-90 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          CONTACT ME <span className="text-xl">→</span>
        </a>
      </nav>
    </header>
  )
}
