import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store)=> store.movies.trailerVideo);

    const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filteredMovies = json.results.filter((movie)=> movie.type === 'Trailer')
        const trailer = filteredMovies.length ? filteredMovies[0] : json.results[0]
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        if(!movieTrailer){
            getMovieVideos()
        }       
    },[])

}

export default useMovieTrailer;

