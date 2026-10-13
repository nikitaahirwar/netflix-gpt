import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className="p-2">
            <h1 className="text-3xl py-1">{title}</h1>
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