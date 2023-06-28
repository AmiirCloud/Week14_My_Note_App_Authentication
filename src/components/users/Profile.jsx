import React from 'react'
import { useGetUserQuery } from '../../store/api/User'
import {FaUser} from 'react-icons/fa'
 function Profile() {
    const {data:user = {}} =  useGetUserQuery()
    console.log(user)

  return (
    <div className='bg-gray-100 text-black  rounded-lg shadow-xl     '>
       <div className=' flex items-center w-64 justify-center h-40 bg-blue-300 '>
        {<FaUser className='text-9xl'/>}
        
        </div> 
        <div className=' p-5'>
        <p className=''>
           <span className= 'font-bold  text-md  '>Name:</span> {user.name }
            
        </p>
        <p className=''>
           <span className= 'font-bold  text-md  '>Name:</span> {user.email }
            
        </p>
       

        
        </div>
    </div>
  )
}

export default Profile;