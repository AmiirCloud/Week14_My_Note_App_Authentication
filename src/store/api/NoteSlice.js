import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import BASE_URL from './BASE-ULR.JS'

const getCookies   = ()=>{
    return Cookies.get("token")
}
export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({
         baseUrl: BASE_URL,
         prepareHeaders:(headers)=>{
            const token  =  getCookies()
            if(token){
                headers.set("Authorization",`Barear ${token}`)
            }
            return headers
         }
        }),
    tagTypes: ['Note'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => ({
                url:'notes',
                 method:"GET",
                }),
            providesTags: ['Note'],
        }),
        addNote: builder.mutation({
            query: (body) => ({
                url: 'create_note',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Note'],
        }),
        updateNote: builder.mutation({
            query: ({ id, updatedNote }) => ({
                url: `update_note/${id}`,
                method: 'PUT',
                body: updatedNote,
            }),
            invalidatesTags: ['Note'],
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `delete_note/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Note'],
        }),
    }),
})

export const {
    useGetNotesQuery,
    useAddNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation,
} = noteApi
