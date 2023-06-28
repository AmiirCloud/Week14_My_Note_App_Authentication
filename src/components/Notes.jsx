/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetNotesQuery, useDeleteNoteMutation } from "../store/api/NoteSlice";
import { useGetUserQuery } from "../store/api/User";


function Notes() {
const {data:users = {}} = useGetUserQuery()
console.log("users",users)
  const { data: notes = [], status, error } = useGetNotesQuery();
  // const { data: note = []} = useGetNotesQuery();
  const [deleteNote] = useDeleteNoteMutation();


  const deleteNoteHandler = (id) => {
    deleteNote(id);
  };

  const checkUsersNote  =(note)=>{
   const myUser =  note.user_id  === users.id
   if(myUser){
     return true

   }
   else{

     return false;
   }

  }
  

  return (
    <div className="flex flex-wrap  justify-center mt-5  w-full    ">
      {status === "loading" && <div className="relative p-5 bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden">Loading...</div>}
      {status === "failed" && <div className="relative p-5 bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden">Sorry, {error}</div>}
      {notes.map((note) =>  (
        <div
          className="relative bg-gray-100 w-full  sm:max-w-lg    md:max-w-lg w-64 h-64 m-5 shadow-2xl overflow-hidden"
          key={note.id}
        >
          <div className="p-5">
            <h3 className="font-bold text-2xl mb-4">{note.title}</h3>
            <p>{note.content}</p>
          </div>
          <div className="absolute bg-yellow-400 w-12 h-12 rotate-45 -top-6 -left-6" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          {(checkUsersNote(note)) &&(


            <>
              <Link to={`/edit/${note.id}`}>
            <button className="mr-2">
              <FaEdit className="text-blue-900" size={20} />
            </button>
            </Link>
            <button>
              <FaTrash className="text-red-600" size={20} onClick={() => deleteNoteHandler(note.id)} />
            </button>
            </>
          )}
     
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;