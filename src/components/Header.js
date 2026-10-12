import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className=" flex justify-between absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10">
            <img 
                className="w-40"
                src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg"
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