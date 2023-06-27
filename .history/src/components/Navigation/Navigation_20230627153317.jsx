import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <ul Cl="flex">
    <li class="mr-6">
      <Link class="text-blue-500 hover:text-blue-800" href="#">Active</Link>
    </li>
  
  </ul>
  )
}
