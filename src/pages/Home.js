import React from 'react'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Photo from '../components/Photo'
const Home = () => {
    return (
        <div className='bg-gray-200 flex flex-col items-center'>
            <Navbar/>
            <Stats/>
            <Photo/>
        </div>
      )
    
    }

export default Home