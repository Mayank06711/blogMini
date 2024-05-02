import { useState, useEffect } from "react";
import useAxiosPrivate from "../component/Hooks/useAxiosPrivate.js";
import { useNavigate, useLocation } from "react-router-dom";

const dataPosterAndReceiver = (url) => {
    //useState() without passing an initial value, the state variable (data in your example) will be initialized with the value undefined.
    const [data, setData] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate(); 

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const { signal } = controller;

        const fetchData = async () => {
            try {
                console.log(signal, "signal");
                const response = await axiosPrivate.get(url, {
                    signal: signal
                });
                console.log(response.data, "Fetch user data \n")
                isMounted && setData(response.data)
                console.log(response.data, "kjasdjksadkj from fetcher \n");
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request aborted in serfetcher \n", error.name);
                  } else {
                    console.log(error.message, "Fetch user data error \n \n \n");
                    navigate('/login', { state: { from: location }, replace: true });
                  }
                  console.log(signal.reason, "Fetch user data")
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            // controller.abort();
            setTimeout(() => {
                controller.abort();
            }, 1000)
        };
    }, [url]);

    return data;
};

export default dataPosterAndReceiver;





















/**
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