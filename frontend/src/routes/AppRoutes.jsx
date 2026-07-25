import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import ProjectDetails from '../pages/ProjectDetails'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
