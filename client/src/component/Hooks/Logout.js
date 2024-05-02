import axios from "../../api/axios";
import useAuth from "./useAuth";


const useLogout = ()=>{
    const {setAuth}  = useAuth();
    const logout = async () =>{
        setAuth({})
        try {
            const response = await axios.post("/user/logout",{}, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            });
            console.log(response.data)
        } catch (error) {
             console.error(error);
        }
    }
    return logout;
}

export default useLogout;