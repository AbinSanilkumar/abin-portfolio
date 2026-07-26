import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getHero = async () => {
  const response = await api.get('/hero/')
  return response.data
}

export const getSkills = async () => {
  const response = await api.get('/skills/')
  return response.data
}

export const getProjects = async () => {
  const response = await api.get('/projects/')
  return response.data
}

export const getCertifications = async () => {
  const response = await api.get('/certifications/')
  return response.data
}

export const getExperiences = async () => {
  const response = await api.get('/experience/')
  return response.data
}

export const getSiteSettings = async () => {
  const response = await api.get('/site-settings/')
  return response.data
}

export default api
