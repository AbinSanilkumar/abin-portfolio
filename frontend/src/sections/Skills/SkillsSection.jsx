import { useEffect, useState } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as RiIcons from 'react-icons/ri'
import * as TbIcons from 'react-icons/tb'
import * as IoIcons from 'react-icons/io5'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'

import { getSkills } from '../../services/api'

const Icons = {
  ...FaIcons,
  ...SiIcons,
  ...RiIcons,
  ...TbIcons,
  ...IoIcons,
  ...BiIcons,
  ...AiIcons,
  ...MdIcons,
  ...FiIcons,
}

export default function SkillsSection() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)

  useEffect(() => {
    let mounted = true
    getSkills()
      .then((data) => {
        if (mounted) setSkills(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  const totalPages = Math.max(1, Math.ceil(skills.length / 5))

  const nextPage = () => setPage((p) => (p + 1) % totalPages)

  const inPage = (i) => i >= page * 5 && i < page * 5 + 5

  return (
    <section className="brutal-border border-x-0 flex flex-col lg:flex-row divide-y-3 lg:divide-y-0 lg:divide-x-3 divide-black overflow-hidden min-h-0 shrink-0">
      <div className="bg-brutal-purple text-white px-6 py-4 font-bold flex flex-row lg:flex-col justify-between items-center lg:items-start min-w-0 lg:min-w-[150px]">
        <div className="uppercase tracking-tighter text-2xl">Skills</div>
        <button
          onClick={nextPage}
          className="text-3xl hover:scale-110 transition-transform cursor-pointer"
          aria-label="Next skills"
        >
          →
        </button>
      </div>
      <div className="flex-grow skills-grid items-center justify-around px-6 py-4 gap-4 lg:gap-6 overflow-x-auto bg-white">
        {loading && (
          <div className="flex gap-4 lg:gap-6 items-center animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 brutal-border" />
                <div className="w-14 h-3 bg-gray-200 brutal-border" />
              </div>
            ))}
          </div>
        )}
        {error && (
          <div className="text-[10px] font-bold text-red-600 bg-red-100 brutal-border px-3 py-2">
            Failed to load skills
          </div>
        )}
        {!loading && !error && skills.length === 0 && (
          <span className="text-[10px] font-bold text-gray-400 uppercase">No skills listed yet</span>
        )}
        {!loading && !error && skills.map((skill, i) => {
          const Icon = Icons[skill.icon_name]
          return (
            <div
              key={`${skill.id}-${page}`}
              className={`flex flex-col items-center gap-2 group skills-fade-item ${inPage(i) ? '' : 'lg:hidden'}`}
            >
              <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                {Icon ? (
                  <Icon size={36} className="transition-all duration-300 group-hover:scale-110" />
                ) : (
                  <FiIcons.FiCode size={36} />
                )}
              </div>
              <span className="text-[10px] font-bold uppercase text-center">{skill.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
