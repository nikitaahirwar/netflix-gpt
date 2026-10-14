import { IMG_CDN } from "../utils/constant";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-40 p-2">
            <img 
                className="h-[200px]"
                alt="poster"
                src={IMG_CDN + posterPath}
            />
        </div>
    )
}

export default MovieCard;