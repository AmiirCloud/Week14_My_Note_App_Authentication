import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ['Note'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/notes',
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
