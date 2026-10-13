import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config.lang)
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black text-white p-4 grid grid-cols-12 w-1/2">
                <input className='p-2 m-2 col-span-9' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className="bg-red-700 p-2 m-2 col-span-3 rounded-lg">{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;