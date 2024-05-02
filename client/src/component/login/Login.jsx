import { useState, useEffect,  useRef } from "react";
import axios from "../../api/axios.js"  
import { useNavigate, useLocation} from "react-router-dom"
import useAuth from "../Hooks/useAuth.js"



const LOGIN_URL = "/user/login";
const REGISTER_URL = "/user/register";
const FORGOTPASS_URL = "/user/password/f";

 const Register = () => {
  /*----------------------- Declaring state Variables -------------------------*/
  const {setAuth} = useAuth();
  const {setUser} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.paathname || "/"
 /// i will be using this after creating navigation button of login it will turn off login page once it is successfully loggedin
  
        //declaring reference to err and user input fields
  const userRef = useRef()
  const errRef = useRef()
  
         // for error messages and success messages
  const [errMgs, setErrMsg] = useState("")
  const [avatar,setAvatar] = useState(null)
          // State for form input values
  const [credentials, setCredentials] = useState({
    email: "", // user email or username
    password: "", // password 
    username:"", // username 
    fullName:"",
    bio:"",  
  });


    useEffect(()=>{  
       //userRef.current is undefined if our userRef.current might not be available at that moment(loginREsult = true). you call userRef.current.focus() in the useEffect hook, it throws an error because userRef.current is undefined. To fix this issue, you should conditionally call focus() on userRef.current only when LoginResult is false
         userRef.current.focus();
      },[]);
  

                // Clear error message when credentials change
    useEffect(()=>{
       setErrMsg("")
   }, [credentials])

    //Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update credentials based on input field name
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  }
  const handleFile = (event) => {
    setAvatar(event.target.files[0]);
    console.log(event.target.files[0],"change")
  }

  
  // console.log(credentials.avatar[0],"register")
  // funtion to handle submit 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     
      const formData = new FormData();
      formData.append('email', credentials.email);
      formData.append('password', credentials.password);
      formData.append('username', credentials.username);
      formData.append('fullName', credentials.fullName);
      formData.append('bio', credentials.bio);
      formData.append('avatar', avatar);


      console.log(credentials, "im regitration in")


      // Making a POST request to the LOGIN_URL with loginData as the request body
      const response = await axios.post(REGISTER_URL, 
      formData,
      {
         // Setting headers for the request
       headers: { "Content-Type": "multipart/form-data" },
      });

      //console.log(response);
      //console.log(JSON.stringify(response))

      console.log(credentials, errMgs, "credentials in login");
      const accessToken = response?.data?.data?.accessToken
      const refreshToken = response?.data?.data?.refreshToken
      const loggedInUser = response?.data?.data?.user 
           // Storing user authentication data inside the auth obj
      setAuth({ refreshToken, accessToken });
      setUser({loggedInUser})
      console.log(loggedInUser,"from login")
         // Resetting form input fields after successful login
      setCredentials({ email: "", password: "", username:"" , fullName:"", bio: "", avatar:""});
      setAvatar(null);
      navigate(from, {replace: true}); //replace scucces page 
    } catch (error) {
        if(!error?.response){
          setErrMsg("No server reponse")
        }
        else if(error.response?.status === 400){
          setErrMsg("All fields are required fields")
        }
        else if(error.response?.status === 401){
            setErrMsg("Email already exists :try login")
        }
        else if(error.response?.status === 409){ // for username already taken
            setErrMsg("username already taken")
        }
        else{
        setErrMsg("Something went wrong while registring user: try again later")
        }
        errRef.current.focus()
    }
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
    <section className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
      <div ref={errRef} className={`${errMgs ? "block" : "hidden"} text-red-500  mt-2`} aria-live="assertive">
        <h1 className="text-lg font-bold">{errMgs}</h1>
      </div>
      <div className="sm:mx-auto sm:w-full sm:mt-20 mt-14 sm:max-w-sm">
        <img className="mx-auto h-14 w-auto" src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="Avatar" />
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome to BLOGMINI! Register</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="post" action="#" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                value={credentials.email}
                autoComplete="off"
                ref={userRef}
                onChange={handleChange}
                placeholder="Email"
                required
                className="block w-full text-md rounded-md border-1 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                minLength={8}
                required
                className="block w-full rounded-md border-0 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="block w-full rounded-md border-0 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <input
                type="text"
                name="fullName"
                value={credentials.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="block w-full rounded-md border-0 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <textarea
                name="bio"
                value={credentials.bio}
                onChange={handleChange}
                placeholder="Bio"
                required
                className="block w-full rounded-md border-0 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleFile}
                required
                className="block w-full rounded-md border-0 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-3 mb-3 text-center text-md text-gray-700">
           Already Have Account
        </p>
      </div>
    </section>
  </div>
  )
}//Done!



const Login = () => {
  /*----------------------- Declaring state Variables -------------------------*/
  
  const {setAuth} = useAuth();
  const {setUser} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.paathname || "/"
  const [account, setAccount] = useState("login") /// i will be using this after creating navigation button of login it will turn off login page once it is successfully loggedin
  
        //declaring reference to err and user input fields
  const userRef = useRef()
  const errRef = useRef()
  
         // for error messages and success messages
  const [errMgs, setErrMsg] = useState("") 
 
               // State for form input values
  const [credentials, setCredentials] = useState({
    email: "", // user email or username
    password: "", // password 
    username:"" // username 
  });


        // to focus on email/username inputs when it render first time , it does not have any dependencies so it will be work everytime this component renders
   useEffect(()=>{  
      //userRef.current is undefined if our userRef.current might not be available at that moment(loginREsult = true). you call userRef.current.focus() in the useEffect hook, it throws an error because userRef.current is undefined. To fix this issue, you should conditionally call focus() on userRef.current only when LoginResult is false
        userRef.current.focus();
   },[]);
    

       // Clear error message when credentials change
  useEffect(()=>{
      setErrMsg("")
  }, [credentials])
  
   // to switch between login and register

   const toggleAccount = ()=>{
     account === "register" ? setAccount("login") : setAccount("register");
     console.log(account)
   }

  //  console.log(openWhat)
  //Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update credentials based on input field name
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  }


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

      //console.log(response);
      //console.log(JSON.stringify(response))

      console.log(credentials, errMgs, "credentials in login");
      const accessToken = response?.data?.data?.accessToken
      const refreshToken = response?.data?.data?.refreshToken
      const loggedInUser = response?.data?.data?.user 
           // Storing user authentication data inside the auth obj
      setAuth({ refreshToken, accessToken });
      setUser({loggedInUser})
      console.log(loggedInUser)
         // Resetting form input fields after successful login
      setCredentials({ email: "", password: "", username:"" });
      navigate(from, {replace: true}); //replace scucces page 
    } catch (error) {
      console.error("Error:", error);
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
  }


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
       {account === "login" ? (
       <section className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
         <div
            ref={errRef}
            className={`${
                errMgs ? "block" : "hidden" // Show the paragraph if errMgs exists, otherwise hide it
            } text-red-500 mb-2 mt-2`}
            aria-live = "assertive"
        >
          <h1 className="text-lg font-bold ">
        {errMgs}
        </h1> 
       </div>
        <div className="sm:mx-auto sm:w-full sm:mt-20 mt-14 sm:max-w-sm">
        <img
          className="mx-auto h-14 w-auto"
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="Avatar"
        />
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome back! Please Login
        </h2>
       </div>
       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                value={credentials.email}
                autoComplete="off"
                ref={userRef}
                onChange={handleChange}
                placeholder="Email/username"
                required
                className="block w-full text-md rounded-md border-1 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
        
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#" // send him to link of forget password 
                  className="font-semibold  text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input 
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                minLength={8}
                required
                className="block w-full rounded-md border-0 py-4 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // onClick={()=> toggleAccount()}
           >
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 mb-3 text-center text-md text-gray-700">
           OR
        </p>
        <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={()=> toggleAccount()}
        >
          Register
        </button>
       </div>
       </section>
          ): (
          <Register  />
        ) }
         <button
        className={`absolute w-inherit h-8 right-1/2 bottom-6 ml-1/2  ${account === "login" ? " hidden" : ""}  transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 z-50`}
        onClick={toggleAccount}
      >
        {account === "login" ? "Register" : "Login"}
      </button>
       </div>
        </>
  )
}


export default Login;
