import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
        <nav className='nav'>
            <h1 className='logo'><span className='font-normal text-[hsl(240,60%,55%)] '><IoMdCheckboxOutline size={28}/></span>TaskFlow</h1>
            <ul className='flex gap-5 items-center'>
               <Link to='/login'> <li className='login-text'>Login</li></Link>
                <Link to='/signup'><li className='signup-nav'>Get Started</li></Link>
            </ul>
        </nav>
    </>
  )
}

export default Nav