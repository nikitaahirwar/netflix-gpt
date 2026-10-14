import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies)
    return (
        <div className="bg-black text-white md:pl-12">
            <div className="md:-mt-52 relative index-1">
                <MovieList title={'Now playing'} movies={movies.nowPlayingMovies} />
                <MovieList title={'Upcomings'} movies={movies.upcomingMovies} />
                <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
                <MovieList title={'Popular'} movies={movies.popularMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;