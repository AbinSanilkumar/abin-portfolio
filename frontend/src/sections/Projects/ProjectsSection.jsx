import { useEffect, useState } from 'react'

import { getProjects } from '../../services/api'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let mounted = true
    getProjects()
      .then((data) => {
        if (mounted) setProjects(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  const prev = () => setCurrent((i) => (i > 0 ? i - 1 : projects.length - 1))
  const next = () => setCurrent((i) => (i < projects.length - 1 ? i + 1 : 0))

  return (
    <div className="lg:col-span-2 brutal-border border-t-0 border-x-0 lg:border-r-3 border-black p-5 md:p-7 flex flex-col section-responsive">
      <div className="flex justify-between items-center shrink-0">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-8 h-8 brutal-border bg-brutal-pink flex items-center justify-center hover:bg-opacity-80"
            aria-label="Previous project"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="w-8 h-8 brutal-border bg-brutal-pink flex items-center justify-center hover:bg-opacity-80"
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>
      </div>
      <Button variant="white" className="my-3 md:my-4 text-[10px] uppercase w-full sm:w-auto justify-center sm:justify-start shrink-0">
        View All Projects →
      </Button>

      {loading && (
        <div className="brutal-border bg-white shadow-brutal-lg flex flex-col max-w-full">
          <div className="bg-brutal-pink p-3 md:p-5 brutal-border border-t-0 border-x-0">
            <div className="brutal-border bg-white p-4 w-full">
              <div className="w-full aspect-[5/3] bg-gray-200 animate-pulse" />
            </div>
          </div>
          <div className="p-4 md:p-5 space-y-3">
            <div className="w-3/4 h-5 bg-gray-200 brutal-border animate-pulse" />
            <div className="w-full h-8 bg-gray-200 brutal-border animate-pulse" />
            <div className="flex gap-2">
              <div className="w-16 h-5 bg-gray-200 brutal-border animate-pulse" />
              <div className="w-16 h-5 bg-gray-200 brutal-border animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-sm font-bold text-red-600 bg-red-100 brutal-border px-4 py-3 text-center">
          Failed to load projects
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="text-sm font-bold text-gray-400 text-center py-8">
          No featured projects yet
        </div>
      )}

      {!loading && !error && projects.length > 0 && (
        <ProjectCard project={projects[current]} index={current} />
      )}

      {!loading && !error && projects.length > 1 && (
        <div className="flex justify-center gap-2 mt-3 md:mt-4 shrink-0">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 brutal-border rounded-full transition-colors ${
                i === current ? 'bg-black' : 'bg-white'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
