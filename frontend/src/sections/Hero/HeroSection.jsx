import SocialLinks from '../../components/common/SocialLinks'
import Button from '../../components/common/Button'
import CodePanel from './CodePanel'

export default function HeroSection() {
  return (
    <main className="page-fill grid grid-cols-1 lg:grid-cols-12 border-b-3 border-black min-h-0">
      <section className="lg:col-span-7 p-5 md:p-7 grid-bg flex flex-col justify-center border-b-3 lg:border-b-0 lg:border-r-3 border-black min-h-0 order-1">
        <div className="inline-block bg-brutal-purple text-white font-bold text-xs px-3 py-1 mb-2 md:mb-3 brutal-border shadow-brutal w-fit">
          HEY, I'M ABIN 👋
        </div>
        <h1 className="hero-title font-black leading-[0.9] mb-2 md:mb-3 uppercase italic">
          Software<br />Developer
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium max-w-md mb-4 md:mb-5 leading-relaxed">
          I build scalable web applications and turn ideas into impactful products with clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-3 md:mb-4">
          <Button variant="lime" className="w-full sm:w-auto justify-center sm:justify-start">
            VIEW MY WORK ↗
          </Button>
          <Button variant="white" className="w-full sm:w-auto justify-center sm:justify-start">
            DOWNLOAD RESUME ↓
          </Button>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 items-center sm:items-start">
          <span className="text-[10px] font-bold uppercase tracking-widest">Connect with me</span>
          <SocialLinks className="justify-center sm:justify-start" />
        </div>
      </section>
      <section className="lg:col-span-5 bg-brutal-pink p-5 md:p-7 flex items-center justify-center relative overflow-hidden min-h-0 order-2">
        <div className="absolute w-4/5 h-4/5 bg-brutal-lime brutal-border translate-x-4 -translate-y-4" />
        <div className="relative brutal-border fluid-profile-frame overflow-hidden bg-gray-200">
          <img
            alt="Software Developer"
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF-yemVT9_FgeKOKfnl-bmFoPRfl-Tep5yiFyP_ZBtXauGsy97d8_cBkqIs3_e_rLD5HGMbK1DaEqApWvpH-V-8TMlwPoxrZSAVxvLqe6xRlSehc-A_66j648pFnlNi98Rw1Yyl5q4FEaA9ADerT_KDrmFhKWCReePPJzxWrb3GoGlXnnIN0lJH1RUcXX9AvyQU9nJ3eKrooRyAUsIbxQ6AkX5yNpmqJZQ62kMAed7Nn2Aesx3UwQCSARlMJxrpE8kI132M43HWto"
          />
        </div>
        <CodePanel />
      </section>
    </main>
  )
}
