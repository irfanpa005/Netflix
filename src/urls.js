export const baseUrl = import.meta.env.VITE_BASE_URL
export const API_KEY = import.meta.env.VITE_API_KEY
export const imageUrl = "https://image.tmdb.org/t/p/original"
export const imageUrl500 = "https://image.tmdb.org/t/p/w500"

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions = `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`