import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo } from "../utils/constant";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(store => store.user)

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

    return (
        <div className=" flex justify-between absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10">
            <img 
                className="w-40"
                src={netflixLogo}
                alt='netflix logo'
            />
            { user &&
                <div className="flex">
                    <img
                        className="w-12 rounded-3xl"
                        alt="signout-logo"
                        src={user?.photoUrl}
                    />
                    <button className="text-white font-bold p-2" onClick={handleSignout}>Sign out</button>
                </div>
            }
        </div>
    )
}
export default Header;