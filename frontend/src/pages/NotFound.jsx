import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="page-fill flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-8xl font-black italic mb-4">404</div>
        <h1 className="text-3xl font-black uppercase mb-4">Page Not Found</h1>
        <p className="text-lg font-medium text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="lime">
            Back to Home ←
          </Button>
        </Link>
      </div>
    </div>
  )
}
