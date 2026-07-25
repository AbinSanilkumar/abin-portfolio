import Navbar from '../components/layout/Navbar'
import HeroSection from '../sections/Hero/HeroSection'
import SkillsSection from '../sections/Skills/SkillsSection'
import ProjectsSection from '../sections/Projects/ProjectsSection'
import CertificationsSection from '../sections/Certifications/CertificationsSection'
import ExperienceSection from '../sections/Experience/ExperienceSection'
import CTASection from '../sections/CTA/CTASection'
import FooterSection from '../sections/Footer/FooterSection'

export default function Home() {
  return (
    <>
      <section className="snap-page page-shell border-b-3 border-black">
        <Navbar />
        <HeroSection />
        <SkillsSection />
      </section>

      <section className="snap-page page-shell border-b-3 border-black">
        <div className="page-fill grid grid-cols-1 lg:grid-cols-3 min-h-0">
          <ProjectsSection />
          <CertificationsSection />
        </div>
      </section>

      <section className="snap-page page-shell">
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
