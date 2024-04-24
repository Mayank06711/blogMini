import {FiMenu} from "react-icons/fi"
import { IoIosNotifications } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import  { useState, useEffect, useRef, useCallback } from "react";
import axios from "../../api/axios";
const Navbar = ()=>{
    // usestate for sidebar
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = ()=>{
        setSidebar(!sidebar)
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


console.log(sidebar)


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
                             className="hidden sm:block text-gray-400 hover:text-black">
                                {data.label}
                            </a>
                        )
                    })
                }
             </div>
            
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
            
            <section className="flex items-center gap-4">
                {/* notifiaction */}
            <IoIosNotifications className="text-3xl" />
            {/* avatar image */}
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="h-8 w-8 rounded-full" />
          </section>
            
       </nav>
       <hr className=" sm:mx-24"/>
       </main>
    )
}

export default Navbar;