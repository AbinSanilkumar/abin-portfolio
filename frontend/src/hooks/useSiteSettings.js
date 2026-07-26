import { useContext } from 'react'

import { SiteSettingsContext } from '../context/SiteSettingsContext'


export function useSiteSettings() {
  return useContext(SiteSettingsContext)
}
