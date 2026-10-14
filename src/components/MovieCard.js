import { IMG_CDN } from "../utils/constant";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-20 md:w-40 h-[100px] md:h-[200px] p-1 md:p-2">
            <img 
                alt="poster"
                src={IMG_CDN + posterPath}
            />
        </div>
    )
}

export default MovieCard;