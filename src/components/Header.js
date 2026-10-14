import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGpt } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const showGpt = useSelector((store)=> store.gpt.showGptSearch);

    const handleSignout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoUrl: photoURL}));
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });
        return () => unsubscribe();
    },[])

    const handleToggleGpt = () => {
        dispatch(toggleGpt());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className=" flex justify-between absolute w-full px-2 md:px-8 py-2 md:py-4 bg-gradient-to-b from-black z-10">
            <img 
                className="w-20 md:w-40"
                src={netflixLogo}
                alt='netflix logo'
            />
            { user &&
                <div className="flex text-sm">
                    {showGpt && 
                        <select className="mr-2 md:p-2 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange} >
                            {SUPPORTED_LANGUAGES.map((lang)=>(
                                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                            ))}
                        </select>
                    }
                    <button className="bg-purple-500 px-1 md:p-2 text-white mr-2 rounded-lg" onClick={handleToggleGpt}>{showGpt ? 'Homepage' : 'GPT Search'}</button>
                    <img
                        className="w-6 md:w-12 rounded-3xl"
                        alt="signout-logo"
                        src={user?.photoUrl}
                    />
                    <button className="text-white font-bold p-1 md:p-2 text-[11px] md:text-lg" onClick={handleSignout}>Sign out</button>
                </div>
            }
        </div>
    )
}
export default Header;