import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE-ULR.JS'
import Cookies from 'js-cookie'

const getCookie =()=>{
  return Cookies.get("token")
}

export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({
         baseUrl: BASE_URL,
         
         prepareHeaders:(headers)=>{
          const token  =  getCookie();
          if(token){
            headers.set("Authorization",`Bearer ${token}`)
          }
          return headers
         }
        }),
        tagTypes: ['Note'],

    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url:'user',
                 method:"GET",
              
                }),
                providesTags:["Note"]
          
        }),
        
       
          
  
})
})

export const {
    useGetUserQuery


} = userSlice
