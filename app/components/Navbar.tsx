import React from 'react'

function Navbar() {
  return (
    <div className='px-5 py-5 bg-gray-100'>
      <div className='flex justify-between'>
        <div className='flex gap-6'>
            <h1>light</h1>
            <h1>dark</h1>
        </div>

        <div className='flex gap-4 list-none'>
            <li>Home</li>
            <li>/</li>
            <li>Services</li>
            <li>/</li>
            <li>Portfolio</li>
            <li>/</li>
            <li>About</li>
            <li>/</li>
            <li>Contact</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
