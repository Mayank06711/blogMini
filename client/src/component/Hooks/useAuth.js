import { useContext,  } from "react";
import AuthContext from "../../Context/authContext.js"

const useAuth = ()=>{
    return useContext(AuthContext)
}


export default useAuth;