import { useRef, useState, useEffect } from "react"
import {IoCloseOutline }from "react-icons/io5"
import axios from "../../api/axios";
const PASSFORGOT_URL = "/user/password/f";

const ForgotPassword = ()=> {
     //TODO: Add another form to get otp from email
                      //declaring reference to err and user input fields
        const userRef = useRef()
        const errRef = useRef()

                             // for displaying false and success messages 
        const [passResult, setPassResult] = useState(false)
  
                           // for error messages and success messages
        const [errMgs, setErrMsg] = useState("") 
         
        const [closeCurrentView, setCloseView] = useState(false)

        const [credentials, setCredentials] = useState({
            email: "", // user email or usernam // password 
            username:"", // username 
            newPassword:"",
            confirmPassword:""
          });

        useEffect(()=>{
         if(!passResult) userRef.current.focus();
       },[passResult])

                         // Clear error message when credentials change
        useEffect(()=>{
          setErrMsg("")
         }, [credentials])


        const toggleCurrentView = ()=>{
            setCloseView(!closeCurrentView)
          }


        const handleChange = (event) => {
            const { name, value } = event.target;
                   // Update credentials based on input field name
            setCredentials((prevCredentials) => ({
              ...prevCredentials,
              [name]: value,
            }));
          };
        
        const handleSubmit =  async (event)=>{
            event.preventDefault();

                                // Check if the entered value is a valid email address
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);
      
                                // If it's a valid email address, set it to the 'email' field; otherwise, set it to the 'username' field
            const passwordData = isValidEmail
             ? { email: credentials.email, newPassword: credentials.newPassword, confirmPassword: credentials.confirmPassword}
             : { username: credentials.email, newPassword: credentials.newPassword, confirmPassword: credentials.confirmPassword };

             console.log(credentials, "i forgot pass so chainging")

            try {
                      // Making a POST request to the passforgot_URL with passwordData as the request body
            const response = await axios.post(PASSFORGOT_URL, 
                passwordData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `Bearer ${auth.accessToken}` bcz user will not have accessToken if he forgot pass
                      },
                    withCredentials: true,
                }
            )

            console.log(response);

            setCredentials({email:"", username:"", newPassword: "", confirmPassword:""})
            setPassResult(true);
            } catch (error) {
             if(!error?.response){
                   setErrMsg("No server reponse")
                 }
             else if(error.response?.status === 400){
                   setErrMsg("Invalid email/username or password did not match")
                 }
             else if(error.response?.status === 401){
                 setErrMsg("Unauthorized")
                }
             else{
                  setErrMsg("Password Changed failed")
               }
             errRef.current.focus()
          }
        }
       

        return (
            <>
            <div className={`fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm transition-all ${closeCurrentView? "hidden" : ""}`}>
            {
            passResult ? (
                <section>
                  <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                   Password Changed!
                </h2>
                <p className="mt-8 text-center text-sm text-gray-500">
                 Click!
                  <a
                    href="#" // TODO: home url
                    className="font-bold leading-6 text-indigo-600 hover:text-indigo-500"
                    onClick={toggleCurrentView}
                  >
                  To Login Again
                  </a>
                </p>
                </section>
            ):(
               <section className="flex min-h-full w-1/4 flex-col justify-center px-6 py-12 lg:px-8">
                 <p
                    ref={errRef}
                    className={`${
                        errMgs ? "block" : "hidden" // Show the paragraph if errMgs exists, otherwise hide it
                    } text-red-500 text-sm font-bold leading-3 mb-2 mt-2`}
                    aria-live = "assertive"
                >
                {errMgs} 
                <p
                className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer mt-2"
                 // re render the login page TODO
                >Try Again</p>   
               </p>
               <IoCloseOutline className="absolute top-3 right-3 md:text-5xl text-4xl cursor-pointer rounded-full hover:bg-gray-300" onClick={toggleCurrentView}/>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-14 w-auto"
                  src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                  alt="Avatar"
                />
                <h2 className="mt-3 text-center text-2xl font-bold leading-6 tracking-tight text-gray-900">
                Enter Details
                </h2>
              </div>
              <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
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
                        className="block w-full rounded-md border-1 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                
                  <div>
                    <div className="mt-1">
                      <input 
                        type="password"
                        name="newPassword"
                        value={credentials.newPassword}
                        onChange={handleChange}
                        placeholder="NewPassword"
                        minLength={8}
                        required
                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    </div>
                    <div>
                    <div className="mt-1">
                      <input 
                        type="password"
                        name="confirmPassword"
                        value={credentials.confirmPassword}
                        onChange={handleChange}
                        placeholder="ConfirmPassword"
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
                      Submit
                    </button>
                  </div>
                </form>
              </div>
               </section>
            )}
            </div>
            </>
          );
}


export default ForgotPassword;