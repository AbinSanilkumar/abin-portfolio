import { skills } from '../../data/skills'

const iconMap = {
  React: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0l-12 12 12 12 12-12-12-12zm0 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" />
    </svg>
  ),
  TypeScript: (
    <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-sm brutal-border">TS</div>
  ),
  'Node.js': (
    <div className="w-10 h-10 brutal-border flex items-center justify-center font-bold text-sm bg-gray-100">JS</div>
  ),
  'Tailwind CSS': (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  Git: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.546 10.93L13.067.452a1.458 1.458 0 00-2.062 0l-2.316 2.317 2.923 2.922a2.912 2.912 0 014.2 4.2l2.932 2.932a2.912 2.912 0 010 4.114l-2.317 2.317a2.912 2.912 0 01-4.113 0l-2.932-2.933a2.912 2.912 0 01-4.2-4.2L5.184 9.18l-4.73 4.73a1.458 1.458 0 000 2.063l10.479 10.479a1.458 1.458 0 002.062 0l10.551-10.551a1.458 1.458 0 000-2.062z" />
    </svg>
  ),
}

export default function SkillsSection() {
  return (
    <section className="brutal-border border-x-0 flex flex-col lg:flex-row divide-y-3 lg:divide-y-0 lg:divide-x-3 divide-black overflow-hidden min-h-0 shrink-0">
      <div className="bg-brutal-purple text-white px-6 py-4 font-bold flex flex-row lg:flex-col justify-between items-center lg:items-start min-w-0 lg:min-w-[150px]">
        <div className="uppercase tracking-tighter text-2xl">Skills</div>
        <div className="text-3xl">→</div>
      </div>
      <div className="flex-grow skills-grid items-center justify-around px-6 py-4 gap-4 lg:gap-6 overflow-x-auto bg-white">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
              {iconMap[skill.name]}
            </div>
            <span className="text-[10px] font-bold uppercase text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
