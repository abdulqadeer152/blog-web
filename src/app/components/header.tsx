import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-16 border-solid md:border-dotted border-2 rounded-sm bg-red-200
     hover:bg-red-300 hover:border-double flex justify-center items-center space-x-96 parents'>

        <div className="logo sm:text-center">
            <h1>Q.A BLOG</h1>
        </div>
        <div className="pages sm:text-center">
            <ul className='links'>
            <Link href={'/'}>    <li>Home</li></Link>
                <li>About</li>
                <li>Blog</li>
                <li>Contact US</li>
            </ul>
            <button className='btn'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header