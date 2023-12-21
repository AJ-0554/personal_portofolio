import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const[nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:"home",

        },
        {
            id:2,
            link:"about",

        },
        {
            id:3,
            link:"portofolio",

        },
        {
            id:4,
            link:"experience",

        },
        {
            id:1,
            link:"contact",

        },
    ]
  return (
    <div className='w-full bg-black text-white flex justify-between items-center h-20 px-4 fixed'>
      <h1 className=' py-3 ml-2 font-signature text-5xl'>Abdulla</h1>
      <ul className='hidden md:flex'>
      {
        links.map(({id,link})=>{
            return <li key={id} className='text-gray-400 cursor-pointer hover:scale-105 capitalize duration-200 pr-4'>{link}</li>
        })
      }
        
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
     { nav &&<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 bggradient from black to bg-gray-800'>
      {
        links.map(({id,link})=>{
            return <li key={id} className='hover:bg-slate-200 hover:w-full hover:text-center hover:scale-110 hover:duration-200 py-6 capitalize text-4xl cursor-pointer'>{link}</li>
        })
      }
      </ul>
     }
      </div>

  )
}

export default Navbar
