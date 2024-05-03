import './App.css'
import {Routes, Route,Navigate} from "react-router-dom"
import RemainLogin from "./component/Login/RemainLogin"
import Home from "./component/Home/Home"
import useAuth from './component/Hooks/useAuth'
import Login from './component/Login/Login.jsx'
import Contact from './component/Contact/contact.jsx'
function App() {
    const { auth } = useAuth();

    return (
      // <Routes>
      //   <Route path="/" element={auth.accessToken ? <Navigate to="/home" /> : <Login />} />
      // <Route element ={<RemainLogin/>}>
      //   <Route path="/home" element={<Home />} />
      // </Route>
      // <Route path="/contact" element={<Contact/>} />
      // </Routes>
      <Home />
    );
}

export default App





















// import { Route, Routes } from 'react-router-dom'
// import Home from './component/Home/Home.jsx'
// import Login from './component/Login/Login.jsx'
// import UserProfile from "./component/Profile/userProfile.jsx"
// import ForgotPassword from './component/ForgotPass/ForgotPass.jsx'
// import Contact from './component/Contact/contact.jsx'
// import Layout from './component/Layout/layout.jsx'
// import Missing from './component/Missing/404page.jsx'
// import RequiredAuth from './component/Hooks/RequiredAuth.jsx'
// import RemainLogin  from './component/Login/RemainLogin.jsx'






  // <Routes>
      //   <Route path="/" element={<Layout />} >
      //     {/* Public routes */}
      //   <Route path="login" element={<Login />} />
      //   <Route path="forgotPass" element={<ForgotPassword />}/>  
      //   <Route element = {<RemainLogin />}>
      //   <Route element={<RequiredAuth />}>
      //   <Route path="profile" element={<UserProfile />} />
      //   </Route> 
      //   </Route>
      //   {/* <Route element={<RequiredAuth />}>
      //   <Route path='user' element = {<User/>} />
      //   </Route> */}
      //   <Route path="/" element={<Home />} />
      //   <Route path="contact" element={<Contact />} />
      //   <Route path="*" element={<Missing />} />
      //   </Route>
      // </Routes>