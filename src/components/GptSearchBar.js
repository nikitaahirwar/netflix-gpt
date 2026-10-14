import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store)=> store.config.lang)
    const searchText = useRef(null);

    const searchMovieInTMDB = async(movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log('searched movie', json)
        return json.results;
    }

    const handleGptSearchClick = async() => {
        console.log(searchText.current.value)
        let choices;
        try {
            const gptQuery = "Act as a movie recommendation system and support some movies for the query" + searchText.current.value + ". Only give me names of five movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
            const gptResults = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'developer', content: gptQuery },
                    { role: 'user', content: 'Are semicolons optional in JavaScript?' },
                ],
            });
            console.log(gptResults.choices)
            choices = gptResults.choices?.[0]?.message?.content;
        } catch (error) {
            console.error("GPT API request failed:", error);
            choices = "Andaz Apna apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"
        }
        console.log('choices', choices);
        const gptMovies = choices.split(',');
        const promiseArray = gptMovies.map((movie) => searchMovieInTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black p-4 grid grid-cols-12 w-1/2" onSubmit={(e)=> e.preventDefault()}>
                <input className='p-2 m-2 col-span-9 text-black' type="text" placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText}  />
                <button className="bg-red-700 text-white p-2 m-2 col-span-3 rounded-lg" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;