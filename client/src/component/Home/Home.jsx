import User from "../User/User"
import { Link,useNavigate } from "react-router-dom"
import useLogout from "../Hooks/Logout"
import Navbar from "../navbar/Navbar"
import ForgotPassword from "../ForgotPass/ForgotPass"
const Home =  ()=>{
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async ()=>{
                await logout();
                navigate("/")
    }
    return (
        <>

      <div>
      {/* Heading */}
    
      <Navbar/>
       {/* Image */}
       {/* <img
        src="https://st2.depositphotos.com/2605379/6754/i/450/depositphotos_67540187-stock-photo-laptop-cup-and-diary.jpg" // Replace with your image URL
        alt="BlogMini"
        className="w-full min-h-2.5 "
      />
       */}
      {/* Optional: Add more content below the image */}
       </div>
        <Link to = "user">
            <User />
        </Link>
        <div>
            home from home
            {/* <ForgotPassword /> */}
        </div>
        <button className="bg-gray-500 w-20 h-20 "  onClick={signOut}>Signout</button>
        </>
    )
}


export default Home;