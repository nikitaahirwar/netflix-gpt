import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className="p-1 md:p-2">
            <h1 className="text-lg md:text-3xl py-1">{title && movies && title}</h1>
            <div className="flex overflow-x-scroll [scrollbar-width:none]">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>    
            </div>
        </div>
    )
}

export default MovieList;