import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import HeroSection from '../sections/Hero/HeroSection'
import SkillsSection from '../sections/Skills/SkillsSection'
import ProjectsSection from '../sections/Projects/ProjectsSection'
import CertificationsSection from '../sections/Certifications/CertificationsSection'
import ExperienceSection from '../sections/Experience/ExperienceSection'
import CTASection from '../sections/CTA/CTASection'
import FooterSection from '../sections/Footer/FooterSection'

export default function Home() {
  const page1Ref = useRef(null)
  const page2Ref = useRef(null)
  const page3Ref = useRef(null)
  const pageRefs = { 1: page1Ref, 2: page2Ref, 3: page3Ref }

  const scrollToPage = (page) => {
    const pageRef = pageRefs[page]
    if (!pageRef?.current) return
    const top = pageRef.current.offsetTop
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const location = useLocation()

  useEffect(() => {
    const targetPage = location.state?.scrollTo
    if (targetPage) {
      window.scrollTo(0, 0)
      scrollToPage(targetPage)
    }
  }, [location.state])

  return (
    <>
      <section ref={page1Ref} className="snap-page page-shell border-b-3 border-black">
        <Navbar onNavigate={scrollToPage} />
        <HeroSection />
        <SkillsSection />
      </section>

      <section ref={page2Ref} className="snap-page page-shell border-b-3 border-black">
        <div className="page-fill grid grid-cols-1 lg:grid-cols-3 min-h-0">
          <ProjectsSection />
          <CertificationsSection />
        </div>
      </section>

      <section ref={page3Ref} className="snap-page page-shell">
        <div className="page-fill grid grid-cols-1 lg:grid-cols-12 brutal-border border-x-0 min-h-0">
          <div className="lg:col-span-3 bg-brutal-pink p-6 md:p-8 brutal-border border-y-0 lg:border-l-0 flex flex-col justify-between">
            <div className="text-3xl sm:text-4xl font-black uppercase italic leading-none">Experience</div>
            <div className="text-4xl sm:text-5xl">→</div>
          </div>
          <ExperienceSection />
          <CTASection />
        </div>
        <FooterSection />
      </section>
    </>
  )
}
