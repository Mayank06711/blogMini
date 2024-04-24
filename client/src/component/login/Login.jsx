import { useState, useEffect, useContext, useRef } from "react";
import axios from "../../api/axios.js"  
const LOGIN_URL = "/user/login";
import AuthContext from "../../context/authContext";



const Login = () => {
  /*----------------------- Declaring state Variables -------------------------*/
  
  const {setAuth} = useContext(AuthContext)
  const [user, setUser] = useState() /// i will be using this after creating navigation button of login it will turn off login page once it is successfully loggedin
  
        //declaring reference to err and user input fields
  const userRef = useRef()
  const errRef = useRef()

         // for displaying false and success messages 
  const [LoginResult, setLoginResult] = useState(false)
  
         // for error messages and success messages
  const [errMgs, setErrMsg] = useState("") 
 
               // State for form input values
  const [credentials, setCredentials] = useState({
    email: "", // user email or username
    password: "", // password 
    username:"" // username 
  });

  const [closeButton, setCloseButton] = useState(false)
        // to focus on email/username inputs when it render first time , it does not have any dependencies so it will be work everytime this component renders
   useEffect(()=>{  
    if (!LoginResult) {  //userRef.current is undefined if our userRef.current might not be available at that moment(loginREsult = true). you call userRef.current.focus() in the useEffect hook, it throws an error because userRef.current is undefined. To fix this issue, you should conditionally call focus() on userRef.current only when LoginResult is false
        userRef.current.focus();
      }
   }, [LoginResult]);
    
       // Clear error message when credentials change
  useEffect(()=>{
      setErrMsg("")
  }, [credentials])

  const toggleCloseButton = ()=>{
    setCloseButton(!closeButton)
  }
  //Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update credentials based on input field name
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // funtion to handle submit 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      // Check if the entered value is a valid email address
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);
      
      // If it's a valid email address, set it to the 'email' field; otherwise, set it to the 'username' field
      const loginData = isValidEmail
      ? { email: credentials.email, password: credentials.password }
      : { username: credentials.email, password: credentials.password };

      console.log(credentials, "im logging in")


      // Making a POST request to the LOGIN_URL with loginData as the request body
      const response = await axios.post(LOGIN_URL, 
      loginData,
      {
         // Setting headers for the request
       headers: { "Content-Type": "application/json" },
          // Enabling credentials to be sent with the request (e.g., cookies)
       withCredentials: true,
      });

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      console.log(credentials, errMgs, "credentials in login");
      const accessToken = response?.data?.accessToken
      const refreshToken = response?.data?.refreshToken
      const loggedInUser = response?.data?.username 
           // Storing user authentication data inside the auth object
      setAuth({ loggedInUser, refreshToken, accessToken });

         // Resetting form input fields after successful login
      setCredentials({ emailEnteredInForm: "", password: "" });

        // Setting LoginResult to true to display the login success message
      setLoginResult(true);

    } catch (error) {
        if(!error?.response){
          setErrMsg("No server reponse")
        }
        else if(error.response?.status === 400){
          setErrMsg("Invalid email or password")
        }
        else if(error.response?.status === 401){
            setErrMsg("Unauthorized")
        }
        else{
        setErrMsg("Login failed")
        }
        errRef.current.focus()
    }
  };  

  return (
    <>
    <div className={`fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm ${closeButton? "hidden" : ""}`}>
    {
    LoginResult ? (
        <section>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Login Successfully
        </h2>
        <p className="mt-10 text-center text-sm text-gray-500">
         Click!
          <a
            href="#" // TODO: home url
            className="font-bold leading-6 text-indigo-600 hover:text-indigo-500"
            onClick={toggleCloseButton}
          >
          Return Home
          </a>
        </p>
        </section>
    ):(
       <section className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
        <p
            ref={errRef}
            className={`${
                errMgs ? "block" : "hidden" // Show the paragraph if errMgs exists, otherwise hide it
            } text-red-500 text-sm font-bold leading-3 mb-2 mt-2`}
            aria-live = "assertive"
        >
        {errMgs} 
        <hr className="sm:mx-24" />
        <a href="#" 
        className="font-semibold text-indigo-600 hover:text-indigo-500"
        onClick={toggleCloseButton} // re render the login page TODO
        >Try Again</a>   
       </p>
       
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-14 w-auto"
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="Avatar"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome back! Please Login
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          onSubmit={handleSubmit}
        >
          <div>
          <label htmlFor="emailEnteredInForm" className="block text-sm font-medium leading-6 text-gray-800">Email/Username</label>
            <div className="mt-2">
              <input
                type="text"
                id="emailEnteredInForm"
                name="email"
                value={credentials.email}
                autoComplete="off"
                ref={userRef}
                onChange={handleChange}
                placeholder="Email/username"
                required
                className="block w-full rounded-md border-1 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div>
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a
                  href="#" // send him to link of forget password 
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input 
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                minLength={8}
                required
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Need an account?
          <a
            href="#" // TODO: add regiter url
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
          Registor
          </a>
        </p>
      </div>
       </section>
    )}
    </div>
    </>
  );
};


export default Login;
