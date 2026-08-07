import Badge from '../../components/common/Badge'

const gradients = ['bg-brutal-pink', 'bg-brutal-blue', 'bg-brutal-yellow']

export default function ProjectCard({ project, index = 0 }) {
  const gradient = gradients[index % gradients.length]

  return (
    <div className="brutal-border bg-white shadow-brutal-lg flex flex-col max-w-full">
      <div className={`${gradient} p-3 md:p-5 brutal-border border-t-0 border-x-0 flex relative`}>
        <div className="brutal-border bg-white flex flex-col p-4 relative w-full">
          <div className="flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-3/5 md:w-4/5 max-w-full h-auto object-contain preview-responsive"
              />
            ) : (
              <svg className="w-3/5 md:w-4/5 max-w-full preview-responsive text-brutal-blue" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 80C40 60 60 50 80 50C85 30 110 20 130 30C150 40 160 60 155 80H40Z" fill="#4D9FFF" stroke="black" strokeWidth="3" />
                <path d="M100 70C110 70 120 80 120 90" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="card-heading font-black uppercase mb-2">{project.title}</h3>
        <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed">{project.short_description}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn bg-white shadow-brutal text-[10px] uppercase"
            >
              GitHub →
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn bg-white shadow-brutal text-[10px] uppercase"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
