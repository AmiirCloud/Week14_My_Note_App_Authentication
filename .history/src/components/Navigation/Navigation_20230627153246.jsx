import React from 'react'

export default function Navigation() {
  return (
    <ul class="flex">
    <li class="mr-6">
      <Link class="text-blue-500 hover:text-blue-800" href="#">Active</Link>
    </li>
    <li class="mr-6">
      <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
    </li>
    <li class="mr-6">
      <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
    </li>
    <li class="mr-6">
      <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
    </li>
  </ul>
  )
}
