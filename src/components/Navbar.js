import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context';

const Navbar = () => {
    const {getRandom,search,handleChange,getUserPhoto} = useGlobalContext()
  return (
    <nav className='flex items-center justify-around mt-4 w-full'>  
        <div>
            <Link to='/' onClick={()=>getUserPhoto()} className='px-4 py-2 bg-indigo-800 rounded-md text-white mr-2'>Home Page</Link>
            <Link to='/random' onClick={()=>getRandom()} className='px-4 py-2 bg-indigo-800 rounded-md text-white'>Random Photo</Link>
        </div>
    
       <input value={search} onChange={(e)=>handleChange(e.target.value)} placeholder='Search...' className='w-48 h-8 rounded-md px-2 py-2 shadow-md outline-none'/>
      
    </nav>
  )
}

export default Navbar