import { Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import { useState, useEffect } from "react";
import useRefreshToken from "../Hooks/refreshToken";

const RemainLogin = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken();
    const {auth} = useAuth();
    
    useEffect(()=>{
        const verifyRefreshToken = async ()=>{
            try {
                 await refresh();
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            } 
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    })

    useEffect(()=>{
        console.log(`isLoading: ${isLoading}`)
        console.log(`accesstoken: ${JSON.stringify(auth?.accessToken)}`)
    },[isLoading])
    return (
        <>
        {
            isLoading? <h1>Loading...</h1>: <Outlet />
            }
       </>
    )
}

export default RemainLogin;