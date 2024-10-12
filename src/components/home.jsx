import React from 'react'
import Navbar from './NavHome'
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.avif'
export default function home() {
  return (
    <div className="bg-white flex flex-col scroll-auto min-h-screen " >
      <Navbar className="absolute top-0 left-0 w-full z-10" />
      <div className='bg-white  min-h-screen min-w-screen flex items-center justify-center'> 
        <h1 className='text-green-400 font-mono text-5xl'>Explore the Frontiers of Research and Innovation.</h1>
      </div>
      <div className='bg-white ml-7 mr-7 flex justify-between items-center min-h-60 min-w-screen border-b scroll-m-1 '>
        <div className='bg-gray-50 border rounded-md w-48 m-2 h-48 tr hover:drop-shadow-[0_0_10px_rgba(0,200,0,0.25)] transition-all duration-300 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${img1})` }}></div>
        <div className='bg-gray-50 border rounded-md w-48 m-2 h-48 tr hover:drop-shadow-[0_0_10px_rgba(0,200,0,0.25)] transition-all duration-300 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${img2})` }}></div>
        <div className='bg-gray-50 border rounded-md w-48 m-2 h-48 tr hover:drop-shadow-[0_0_10px_rgba(0,200,0,0.25)] transition-all duration-300 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${img3})` }}></div>
        <div className='bg-gray-50 border rounded-md w-48 m-2 h-48 tr hover:drop-shadow-[0_0_10px_rgba(0,200,0,0.25)] transition-all duration-300 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${img4})` }}></div>
      </div>
      <div className='bg-white ml-7 mr-7 flex justify-between items-center min-h-60 min-w-screen border-b scroll-m-1 '></div>
      <div className='bg-white ml-7 mr-7 flex justify-between items-center min-h-60 min-w-screen border-b scroll-m-1 '></div>
      <div className='bg-white ml-7 mr-7 flex justify-between items-center min-h-60 min-w-screen border-b scroll-m-1 '></div>
      <div className='bg-white ml-7 mr-7 flex justify-between items-center min-h-60 min-w-screen border-b scroll-m-1 '></div>
      <div className='bg-black  flex justify-between items-center min-h-80 min-w-screen border-b scroll-m-1 '></div>

      
    </div>
  )
}
