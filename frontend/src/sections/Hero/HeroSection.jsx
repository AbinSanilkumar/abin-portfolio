import { useEffect, useState } from 'react'

import SocialLinks from '../../components/common/SocialLinks'
import Button from '../../components/common/Button'
import { getHero } from '../../services/api'
import { useSiteSettings } from '../../hooks/useSiteSettings'
import CodePanel from './CodePanel'

export default function HeroSection() {
  const { settings } = useSiteSettings()
  const [hero, setHero] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getHero()
      .then((data) => {
        if (mounted) setHero(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  if (loading) {
    return (
      <main className="page-fill grid grid-cols-1 lg:grid-cols-12 border-b-3 border-black min-h-0">
        <section className="lg:col-span-7 p-5 md:p-7 grid-bg flex flex-col justify-center border-b-3 lg:border-b-0 lg:border-r-3 border-black min-h-0 order-1">
          <div className="w-48 h-6 bg-gray-200 brutal-border mb-2 md:mb-3 animate-pulse" />
          <div className="w-72 h-16 bg-gray-200 brutal-border mb-2 md:mb-3 animate-pulse" />
          <div className="w-full max-w-md h-12 bg-gray-200 brutal-border mb-4 md:mb-5 animate-pulse" />
          <div className="flex gap-3 mb-3 md:mb-4">
            <div className="w-36 h-10 bg-gray-200 brutal-border animate-pulse" />
            <div className="w-36 h-10 bg-gray-200 brutal-border animate-pulse" />
          </div>
          <div className="w-40 h-4 bg-gray-200 brutal-border animate-pulse" />
        </section>
        <section className="lg:col-span-5 bg-brutal-pink p-5 md:p-7 flex items-center justify-center min-h-0 order-2">
          <div className="w-full max-w-[22rem] aspect-[4/5] bg-gray-200 brutal-border animate-pulse" />
        </section>
      </main>
    )
  }

  if (error) {
    return (
      <main className="page-fill grid grid-cols-1 lg:grid-cols-12 border-b-3 border-black min-h-0">
        <section className="lg:col-span-12 p-5 md:p-7 grid-bg flex flex-col items-center justify-center min-h-0">
          <div className="text-sm font-bold text-red-600 bg-red-100 brutal-border px-4 py-3">
            Failed to load hero data: {error}
          </div>
        </section>
      </main>
    )
  }

  if (!hero) return null

  return (
    <main className="page-fill grid grid-cols-1 lg:grid-cols-12 border-b-3 border-black min-h-0">
      <section className="lg:col-span-7 p-5 md:p-7 grid-bg flex flex-col justify-center border-b-3 lg:border-b-0 lg:border-r-3 border-black min-h-0 order-1">
        <div className="inline-block bg-brutal-purple text-white font-bold text-xs px-3 py-1 mb-2 md:mb-3 brutal-border shadow-brutal w-fit">
          {hero.greeting}
        </div>
        <h1 className="hero-title font-black leading-[0.9] mb-2 md:mb-3 uppercase italic">
          {hero.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium max-w-md mb-4 md:mb-5 leading-relaxed">
          {hero.bio}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-3 md:mb-4">
          <Button variant="lime" className="w-full sm:w-auto justify-center sm:justify-start">
            VIEW MY WORK ↗
          </Button>
          <a
            href={settings?.resume || hero.resume}
            download
            className="brutal-btn bg-white shadow-brutal w-full sm:w-auto justify-center sm:justify-start"
          >
            DOWNLOAD RESUME ↓
          </a>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 items-center sm:items-start">
          <span className="text-[10px] font-bold uppercase tracking-widest">Connect with me</span>
          <SocialLinks className="justify-center sm:justify-start" hero={hero} settings={settings} />
        </div>
      </section>
      <section className="lg:col-span-5 bg-brutal-pink p-5 md:p-7 flex items-center justify-center relative overflow-hidden min-h-0 order-2">
        <div className="absolute w-4/5 h-4/5 bg-brutal-lime brutal-border translate-x-4 -translate-y-4" />
        <div className="relative brutal-border fluid-profile-frame overflow-hidden bg-gray-200">
          <img
            alt={hero.name}
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
            src={hero.profile_image}
          />
        </div>
        <CodePanel />
      </section>
    </main>
  )
}
