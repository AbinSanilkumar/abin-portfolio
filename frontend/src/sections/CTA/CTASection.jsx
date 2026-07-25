export default function CTASection() {
  return (
    <div className="lg:col-span-3 bg-brutal-purple p-5 md:p-8 grid-bg text-white brutal-border border-y-0 lg:border-r-0 flex flex-col justify-between relative overflow-hidden min-h-0 flex-1">
      <h2 className="hero-copy font-black uppercase italic leading-none mb-6">
        Let's build something amazing together.
      </h2>
      <button className="brutal-border bg-white text-black font-bold py-3 px-6 shadow-brutal w-fit text-xs uppercase hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        GET IN TOUCH →
      </button>
      <div className="absolute -bottom-10 -right-10 w-20 md:w-24 h-20 md:h-24 bg-brutal-pink brutal-border rotate-45" />
    </div>
  )
}
