import { experiences } from '../../data/experience'
import Button from '../../components/common/Button'

export default function ExperienceSection() {
  return (
    <div className="lg:col-span-6 p-5 md:p-8 bg-white relative min-h-0 flex flex-col flex-1">
      <div className="absolute left-5 md:left-8 top-10 bottom-10 w-0.5 bg-black" />
      <div className="flex flex-col flex-1 justify-between gap-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-10">
            <div className="absolute left-[-5px] top-1.5 w-3 h-3 bg-black rounded-full" />
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 flex-wrap gap-2">
              <h3 className="font-black uppercase text-sm sm:text-base md:text-lg">
                {exp.role} &bull; {exp.company}
              </h3>
              <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 brutal-border shrink-0 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
      <Button variant="white" className="text-[10px] uppercase mt-4 w-full sm:w-auto justify-center sm:justify-start shrink-0">
        View Full Resume →
      </Button>
    </div>
  )
}
