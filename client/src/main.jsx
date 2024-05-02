import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from "./Context/AuthProvider.jsx"
import {Routes, Route, BrowserRouter} from "react-router-dom"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <AuthProvider>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)


// since we have wrapper App inside AuthProvider now evry componet of app will have access to auth data which is in authprovider i.e it act a single source for auth data for all component 
// hence we dont need props drilling that is passing props from component to component to just access that prop data in anyone component