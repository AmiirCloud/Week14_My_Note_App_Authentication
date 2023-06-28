import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/users/Login";


import {Link} from 'react-router-dom'
import Register from "./components/users/Register";
import { useState } from "react";

import Cookies from "js-cookie";
import { useEffect } from "react";
import PrivateRoute from "./privateRoute";
import GetStart from "./components/getStart";
import Profile from "./components/users/Profile";

function App() {
  const token  =  Cookies.get("token")

const [isAuthonicated,setIsAuthonicated]  = useState(false)
const navigate  = useNavigate()
useEffect(()=>{
  if(token){
    setIsAuthonicated(true)
  }
},[token])
const handleLogOut  = ()=>{
  Cookies.remove("token")
  setIsAuthonicated(false)
  navigate("/login")

}
  
  return (
    <>
        <div className="bg-white text-black mt-5 flex justify-end items-center shadow-full p-2">
        <ul className="flex items-center">
    {/* <li className="mr-6">
      <Link to="/profile" className="text-black hover:text-blue-800" href="#">Profile</Link>
    </li> */}
    {/* <li className="mr-6">
      <Link to="/logout" className="text-black hover:text-blue-800" href="#">logout</Link>
    </li> */}
    {isAuthonicated &&(
  <>
    <li className="mr-6">
      <Link to="/" className="text-black hover:text-blue-800">Home</Link>
    </li>
    <li className="mr-6">
      <Link to="/profile" className="text-black hover:text-blue-800">Prifle</Link>
    </li>
    <li className="mr-6">
      <Link to="/addNote" className="text-black hover:text-blue-800">Add</Link>
    </li>
    <li className="mr-6">
      <Link  className="text-black hover:text-blue-800" onClick={()=>{
        handleLogOut()
      }}>Logout</Link>
    </li>
    </>
    )}
    {!isAuthonicated && (
      <>
  
    <li className="mr-6">
      <Link to="/GetStart" className="text-black hover:text-blue-800">get started</Link>
    </li>
    <li className="mr-6">
      <Link to="/login" className="text-black hover:text-blue-800">login</Link>
    </li>
    <li className="mr-6">
      <Link to="/Register" className="text-black hover:text-blue-800">Register</Link>
    </li>
    </>
 
    )}
  </ul>
        </div>
    <div className="bg-gray-200 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5"></h3>
          <Routes>
            <Route  path="/GetStart" element={<GetStart/>} />
            <Route path="/login"element={<Login/> }></Route>
            <Route path="/addNote" element={<PrivateRoute/>}>
            <Route path="/addNote" element={<AddNote />} />

            </Route>
            <Route path="/profile" element={<Profile />}> 
            <Route  path="/profile" element={<Profile/>} />

            </Route>
            <Route path="/" element={<PrivateRoute />} >
            <Route path="/"element ={<Notes/>} ></Route>
            </Route>
            <Route path="/Register"element={<Register/> }></Route>
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;