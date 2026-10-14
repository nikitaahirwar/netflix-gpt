import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovie(json.results))
    }

    useEffect(()=>{
        if(!nowPlayingMovies){
            getNowPlayingMovies()
        }
    },[])
}
export default useNowPlayingMovies;