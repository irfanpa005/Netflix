import { API_KEY } from "../../urls";
import { tmdbGateways } from "../../apiGateways";


export const getMovies = (setMovies,url) => {
    tmdbGateways.get(url).then((response) => {
        setMovies(response.data.results)
    })
    .catch ((error) => {
        console.log(error)
    })
}

export const getTrailer = (movieId, setTrailerId) => {
    tmdbGateways.get(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        if (response.data.results.length!==0){
        setTrailerId(response.data.results)
        } else {
            console.log('No trailers')
        }
    })
    .catch ((error) => {
        console.log(error)
    })
}



