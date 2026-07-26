import { useEffect, useState } from 'react'

import { getSiteSettings } from '../services/api'
import { SiteSettingsContext } from './SiteSettingsContext'

export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getSiteSettings()
      .then((data) => {
        if (mounted) setSettings(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    if (!settings) return
    document.title = settings.seo_title || settings.site_name || 'Abin Dev'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && settings.seo_description) metaDesc.content = settings.seo_description
    if (settings.favicon) {
      const link = document.querySelector('link[rel="icon"]')
      if (link) link.href = settings.favicon
    }
  }, [settings])

  return (
    <SiteSettingsContext.Provider value={{ settings, loading, error }}>
      {children}
    </SiteSettingsContext.Provider>
  )
}
