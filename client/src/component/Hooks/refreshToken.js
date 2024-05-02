import axios from "../../api/axios"
import useAuth from "./useAuth"

const useRefreshToken =  () => {
    const {setAuth}  = useAuth();
    const refresh = async () =>{
        const response = await axios.post("/user/refresh-token",{}, {
            withCredentials: true
        }) 
        setAuth(prev =>{
                console.log(JSON.stringify(prev),"prev data from refresh")
                console.log(response.data.accessToken, "new refresh and access")
                return {
                   ...prev,
                    accessToken: response.data.accessToken,
                }
        });
        return response.data.accessToken
    } 
    return refresh;
}

export default useRefreshToken;


// This will retreive new refresh and accessToken from server 