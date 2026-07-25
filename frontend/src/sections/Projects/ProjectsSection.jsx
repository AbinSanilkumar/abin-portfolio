import { projects } from '../../data/projects'
import SectionTitle from '../../components/common/SectionTitle'
import Button from '../../components/common/Button'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <div className="lg:col-span-2 brutal-border border-t-0 border-x-0 lg:border-r-3 border-black p-5 md:p-7 flex flex-col section-responsive">
      <div className="flex justify-between items-center shrink-0">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="flex gap-2">
          <button className="w-8 h-8 brutal-border bg-brutal-pink flex items-center justify-center hover:bg-opacity-80">
            &lt;
          </button>
          <button className="w-8 h-8 brutal-border bg-brutal-pink flex items-center justify-center hover:bg-opacity-80">
            &gt;
          </button>
        </div>
      </div>
      <Button variant="white" className="my-3 md:my-4 text-[10px] uppercase w-full sm:w-auto justify-center sm:justify-start shrink-0">
        View All Projects →
      </Button>
      <ProjectCard project={projects[0]} />
      <div className="flex justify-center gap-2 mt-3 md:mt-4 shrink-0">
        <div className="w-2 h-2 brutal-border rounded-full bg-white" />
        <div className="w-2 h-2 brutal-border rounded-full bg-black" />
        <div className="w-2 h-2 brutal-border rounded-full bg-white" />
      </div>
    </div>
  )
}
