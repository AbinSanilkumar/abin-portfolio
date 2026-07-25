import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="page-fill flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase italic mb-4">Project Not Found</h1>
          <p className="text-lg font-medium text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Button variant="lime" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-fill p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className={`${project.gradient || 'bg-brutal-pink'} brutal-border p-6 mb-8`}>
          <div className="brutal-border bg-white aspect-video flex items-center justify-center">
            <span className="text-6xl font-black italic">{project.title}</span>
          </div>
        </div>
        <h1 className="text-4xl font-black uppercase mb-4">{project.title}</h1>
        <p className="text-lg font-medium text-gray-700 mb-6 leading-relaxed">{project.details}</p>
        <div className="flex gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Button variant="lime">Visit Project ↗</Button>
      </div>
    </div>
  )
}
