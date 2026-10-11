import Header from "./Header";
import {useState} from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f0b42cac-9ced-425f-8677-777eadbdbe2f/web/IN-en-20261005-TRIFECTA-perspective_14c6dcd8-c058-4841-a0e5-1d0d70b35836_large.jpg"
                    alt="netflix background"
                />
            </div>
            
            <form className="bg-black absolute w-3/12 mx-auto my-36 right-0 left-0 p-12 rounded-lg opacity-80 text-white">
                <h1 className="font-bold py-4 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
                )}
                <input type="text" placeholder="Enter Email Address" className="p-4 my-4 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                <button className="bg-red-700 my-6 p-4 w-full rounded-lg cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? Sign Up Now" : "Already registered! Sign In Now"}</p>
            </form>
        </>
    )
}
export default Login;