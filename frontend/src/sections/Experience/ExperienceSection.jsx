import { useEffect, useState } from 'react'

import Button from '../../components/common/Button'
import { getExperiences } from '../../services/api'

function formatPeriod(startDate, endDate, currentlyWorking) {
  const startYear = new Date(startDate).getFullYear()
  if (currentlyWorking) return `${startYear} - Present`
  const endYear = endDate ? new Date(endDate).getFullYear() : ''
  return `${startYear} - ${endYear}`
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getExperiences()
      .then((data) => {
        if (mounted) setExperiences(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  return (
    <div className="lg:col-span-6 p-5 md:p-8 bg-white relative min-h-0 flex flex-col flex-1">
      <div className="absolute left-5 md:left-8 top-10 bottom-10 w-0.5 bg-black" />

      {loading && (
        <div className="flex flex-col flex-1 justify-between gap-4 animate-pulse">
          {[1, 2, 3].map((n) => (
            <div key={n} className="relative pl-8 md:pl-10">
              <div className="w-3 h-3 bg-gray-300 rounded-full absolute left-[-5px] top-1.5" />
              <div className="w-3/4 h-4 bg-gray-200 brutal-border mb-2" />
              <div className="w-full h-8 bg-gray-200 brutal-border" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-sm font-bold text-red-600 bg-red-100 brutal-border px-4 py-3">
            Failed to load experience
          </div>
        </div>
      )}

      {!loading && !error && experiences.length === 0 && (
        <div className="flex-1 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-400">No experience listed yet</span>
        </div>
      )}

      {!loading && !error && experiences.length > 0 && (
        <div className="flex flex-col flex-1 justify-between gap-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-10">
              <div className="absolute left-[-5px] top-1.5 w-3 h-3 bg-black rounded-full" />
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 flex-wrap gap-2">
                <h3 className="font-black uppercase text-sm sm:text-base md:text-lg">
                  {exp.position} &bull; {exp.company}
                </h3>
                <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 brutal-border shrink-0 whitespace-nowrap">
                  {formatPeriod(exp.start_date, exp.end_date, exp.currently_working)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <Button variant="white" className="text-[10px] uppercase mt-4 w-full sm:w-auto justify-center sm:justify-start shrink-0">
        View Full Resume →
      </Button>
    </div>
  )
}
