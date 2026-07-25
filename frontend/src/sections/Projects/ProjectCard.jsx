import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'

export default function ProjectCard({ project }) {
  return (
    <div className="brutal-border bg-white shadow-brutal-lg flex flex-col max-w-full">
      <div className={`${project.gradient || 'bg-brutal-pink'} p-3 md:p-5 brutal-border border-t-0 border-x-0 flex relative`}>
        <div className="brutal-border bg-white flex flex-col p-4 relative w-full">
          <div className="absolute top-4 left-4 w-6 h-6 bg-brutal-yellow rounded-full brutal-border" />
          <div className="flex items-center justify-center">
            <svg className="w-3/5 md:w-4/5 max-w-full preview-responsive text-brutal-blue" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 80C40 60 60 50 80 50C85 30 110 20 130 30C150 40 160 60 155 80H40Z" fill="#4D9FFF" stroke="black" strokeWidth="3" />
              <path d="M100 70C110 70 120 80 120 90" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 font-black text-5xl md:text-6xl italic tracking-tighter">24°C</div>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="card-heading font-black uppercase mb-2">{project.title}</h3>
        <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed">{project.description}</p>
        <div className="flex gap-2 mb-6 flex-wrap">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Button variant="white" className="text-[10px] uppercase">
          View Details →
        </Button>
      </div>
    </div>
  )
}
