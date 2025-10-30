import React from 'react'
import Nav from './Nav'

function NotFound() {
  return (
    <>
        <Nav/>
        <div className='NotFound-container bg-[#ffffff] flex flex-col'>
            <img className='w-[400px] ' src="/PNF.jpg" alt="" />
            <p className='text-xl font-semibold'>We can't find the page you are looking for go back to "<span className='text-[#4D4DFF] cursor-pointer hover:underline'>Home</span>"</p>
        </div>
    </>
  )
}

export default NotFound