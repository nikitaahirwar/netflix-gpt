import { netflixBackground } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src= {netflixBackground}
                    alt="netflix background"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;