import { tmdbGateways } from "../../apiGateways";
import { API_KEY } from "../../urls";


export const getTopMovies = (setTopMovies) => {
    tmdbGateways.get(`movie/top_rated?api_key=${API_KEY}`).then((response) => {
        setTopMovies(response.data.results);
    })
    .catch(error => {
    console.log(error)
    });
}