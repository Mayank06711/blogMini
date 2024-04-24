import {FiMenu} from "react-icons/fi"
import { IoIosNotifications } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import  { useState, useEffect, useRef, useCallback } from "react";
import Login from "../login/Login.jsx"
import ProfileMenu from "./profile/profileMenu.jsx";
import Notification from "./notification/notification.jsx";
import axios from "../../api/axios";
const Navbar = ()=>{
    // usestate for sidebar
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = ()=>{
        setSidebar(!sidebar)
    }
    // profile menu
    const [profileMenuVisible, setprofileMenuVisibility] = useState(false)
    const showProfilePage = ()=>{
        setprofileMenuVisibility(!profileMenuVisible)
        if(notifiactionVisible){
            setNotifiActionVisible(false)
        }
    }

    // notification visibility
    const [notifiactionVisible, setNotifiActionVisible] = useState(false)
    const showNotificationPage = ()=>{
        setNotifiActionVisible(!notifiactionVisible)
        if(profileMenuVisible){
            setprofileMenuVisibility(false)
        }
    }
   // login componet rendering 
    const [showLogin, setShowLogin] = useState(false)
    const showLoginPage = ()=>{
        setShowLogin(!showLogin)
        if(notifiactionVisible){
            setNotifiActionVisible(false)
        }
        if(profileMenuVisible){
            setprofileMenuVisibility(false)
        }
    }

    const navLinks = [
        {
            label:"Home",
            link:"#",
        },
        {
            label:"Blog",
            link:"#",
        },
        {
            label:"Contact",
            link:"#",
        },
        {
            label:"About",
            link:"#",
        },
        {
            label:"Login",
            link:"#",
        },
        {
            label:"Register",
            link:"#",
        }
    ]

    const profileLinks = [
        {
            label:"Profile", // user details 
            link:"#",
        },
        {
        label:"Settings", // like update and password change
        link:"#",
        },
        {
            label:"Logout",
            link:"#",
        }
    ]


console.log( profileMenuVisible, "logina nd sdiebar")


    return (
       <main>
         <nav className =" flex justify-between px-8 items-center py-6 sm:px-24">
            <div className="flex items-center gap-8">
            <section className="flex items-center gap-4">
                  {/* menu */}  
           <FiMenu className="text-3xl sm:hidden cursor-pointer" onClick={showSidebar}/>
                {/* logo */}
            <a href="" className="text-4xl font-mono">
                BlogMini
            </a>
            </section>
            {
                    navLinks.map((data, index)=>{
                        return(
                            <a href={data.link} key={index}
                             className="hidden sm:block font-semibold text-gray-400 hover:text-black">
                                {data.label}
                            </a>
                        )
                    })
                }
             </div>
             {!showLogin && <button
             onClick={showLoginPage}
             className="hidden md:absolute md:w-20 md:h-8 md:right-2 md:flex md:items-center md:justify-center focus-visible:outline bg-indigo-600 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 text-white px-4 rounded-full "
             >
             Login
             </button>}
            {/* mobile menu */}
            <div className= {`${sidebar ? "translate-x-0":"-translate-x-full"} fixed h-full w-screen sm:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all`}>
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                <IoCloseOutline className="mt-0 mb-8  text-3xl cursor-pointer" onClick={showSidebar}/>
                {
                    navLinks.map((data, index)=>{
                        return(
                            <a href={data.link} key={index} className="font-bold">
                                {data.label}
                            </a>
                        )
                    })
                }
                </section>
            </div>
            
           {/* notification and profile */}
            <section className="flex items-center gap-4">
                {/* notifiaction */}
            <IoIosNotifications className={`text-gray-400 text-3xl cursor-pointer rounded-full hover:text-black ${notifiactionVisible ? 'border-black border-2' : ''}`} onClick={showNotificationPage} />
            {/* avatar image */}
            <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Avatar"
             className={`h-8 w-8 rounded-full cursor-pointer ${profileMenuVisible ? 'border-black border-2' : ''}`} onClick={showProfilePage} />
          </section>
             {/* Notification window */}
             {notifiactionVisible && <Notification visible={notifiactionVisible}  />}
          {/* mobile menu for profilee */}
          {profileMenuVisible && <ProfileMenu profileLinks={profileLinks} />}
       </nav>
       {/* login window */}
       {showLogin && <Login />}
       <hr className=" sm:mx-24"/>
       </main>
    )
}

export default Navbar;