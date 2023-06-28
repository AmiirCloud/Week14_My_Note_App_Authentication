import React from 'react'
import { Navigate,Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'

 function PrivateRoute() {
   
    const token  =  Cookies.get("token")
    if(!token){
        return <Navigate to="/login"/>
    }
    return <Outlet/>

}
export default PrivateRoute
