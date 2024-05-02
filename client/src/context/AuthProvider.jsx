import { useState} from "react";

import AuthContext from "./authContext";

export  const AuthProvider = ({ children })=>{
    const [auth, setAuth] = useState({});
     const [user, setUser] = useState({}); //we can pass it as auth and authprovider user, setUser
    return (
        <AuthContext.Provider value={{auth, setAuth, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}



/*

createContext: This function is used to create a context object in React. 
Context provides a way to pass data through the component tree without having to pass props down 
manually at every level.

useState: This is a React Hook that allows functional components to manage state. 
It returns a stateful value and a function to update that value.

AuthContext: This is a context object created using createContext(). 
It will be used to share authentication-related data (such as user authentication status, user information, etc.) 
throughout the component tree.

AuthProvider: This is a custom component that serves as the provider for the AuthContext.
 It wraps around other components and provides them with access to the authentication data stored in the
  context. It uses the useState hook to manage the authentication state.

children: This is a special prop in React that represents the child components nested inside 
the AuthProvider. By passing children as a prop, any component wrapped in the AuthProvider will 
have access to the authentication context.


auth: This state variable holds authentication-related data, such as user authentication status, 
user information, etc.

setAuth: This function is used to update the auth state. 
It is provided by the useState hook and allows components to modify the authentication data stored in 
the context.
*/