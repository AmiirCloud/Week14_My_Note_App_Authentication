import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE-ULR.JS'
import Cookies from 'js-cookie'

const setToken  = (token)=>{
    Cookies.set("token",token,{expires:1})
}
export const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({
         baseUrl: BASE_URL
        }),

    endpoints: (builder) => ({
        register: builder.mutation({
            query: (newUser) => ({
                url:'register',
                 method:"POST",
                 body:newUser
                }),
          
        }),
        login: builder.mutation({
            query: (user) => ({
                url: 'login',
                method: 'POST',
                body:user,
            }),
            onQueryStarted: async (arg, {queryFulfilled}) => {
                try {
                    const result = await queryFulfilled
                  
                    setToken(result.data.token)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
     
  
})
})

export const {
    useRegisterMutation,
    useLoginMutation

} = authSlice
