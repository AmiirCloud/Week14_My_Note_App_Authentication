import React from 'react'

import {Link} from 'react-router-dom'
function GetStart() {
  return (
    <section className="bg-white dark:bg-gray-900 shadow-lg">
    <div className="">
        <div className="p-10">
            <h1 className="max-w-2xl mb-4 text-3xl text-gray-500 font-extrabold font-bold  md:text-5xl xl:text-6xl ">Welcome To our Note App</h1>
            <p className=" text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Write Your Notes And Make a Plan with Us.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium, ab dolores mollitia quod vel molestias modi laboriosam culpa molestiae dolorum necessitatibus exercitationem, est repudiandae iste saepe expedita excepturi autem?</p>
        </div>
        <div className='p-5 mb-3'>
            <Link to="/login" className="p-3 mt-10  bg-blue-900 text-gray-100 rounded-lg ">
               Login  Here
            </Link> 
        </div>
                     
    </div>
</section>
  )
}
export default  GetStart;

