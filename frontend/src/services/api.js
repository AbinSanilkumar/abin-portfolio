import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getHero = async () => {
  const response = await api.get('/hero/')
  return response.data
}

export default api
