import { useState, useEffect } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate.js";
import {useNavigate, useLocation} from "react-router-dom"
import dataFetcher from "../../api/fetcherApi.js"
const URL = "/user/current-user"
const User = ()=>{
       const user = dataFetcher(URL);
      const blog = dataFetcher("/blog/")
      console.log(blog?.data?.blogs[0],"user")
     return (
        <div>
        <h1>Profile</h1>
        <h1>FULLNAME: {user?.data?.fullName}</h1>
        <img src={user?.data?.avatar} className="w-20 h-20" alt="" />
        <h1>username:{user?.data?.username}</h1>
        <h1>email:{user?.data?.email}</h1>
        <h1>role:{user?.data?.role}</h1>
        <h1>bio:{user?.data?.bio}</h1>
        <h1 className="text-pink-400">blog{blog?.data?.blogs[0]?.content}</h1>

        <button className="bg-gray-500 text-white rounded-full w-28" >Update Profile</button>
        </div>
    )
}

export default User;







/*  This can be used here instead of userFetcher 

 const [user, setUser] = useState();
       const navigate = useNavigate();
       const location = useLocation();
       const axiosPrivate = useAxiosPrivate();
       console.log(location,"location user" ,"\n",  navigate,"\n", user,"\n","userm is above" )
       
       useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController(); // this is for cancelling req once blog is fetched
        const {signal}  = controller;
        console.log("hii mayank this controller", controller.signal, "\n")
        const userProfile = async ()=>{
            try {
                console.log("hii mayank this top ", "\n")
                const response = await axiosPrivate.get(URL, {
                     signal:signal
                });
                console.log(response.data, "Fetch user data \n")
                isMounted && setUser(response.data)
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request aborted");
                  } else {
                    console.log(error.message, "Fetch user data error \n \n \n");
                    navigate('/login', { state: { from: location }, replace: true });
                  }
                  console.log(signal.reason, "Fetch user data")
            }
       }
       userProfile();
       return ()=>{  // clean up function when blog is fetched
           isMounted  = false;
        //    controller.abort();
           setTimeout(() => {
            controller.abort();
        }, 100)   
       }
       },[]);

 */