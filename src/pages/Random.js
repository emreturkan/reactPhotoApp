import React from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PhotoCard from '../components/PhotoCard'

const Random = () => {
    const {random,loading,searchPhoto,search} = useGlobalContext()
  
    if(search){
        return (
            <div className='bg-gray-200 flex flex-col items-center'>
                <Navbar/>
                <div className='columns-1 gap-x-8 p-8 md:columns-2 lg:columns-3'>
                  {loading ? <Skeleton className='shadow-md mb-4' count={30} height={700} /> :
                    searchPhoto?.map((photo)=>(
                        <PhotoCard key={photo.id} {...photo}/>
                      
                      ))}
                </div>
            </div>
          )
    }

    return (
        <div className='bg-gray-200 flex flex-col items-center'>
            <Navbar/>
            <div className='columns-1 gap-x-8 p-8 md:columns-2 lg:columns-3'>
              {loading ? <Skeleton className='shadow-md mb-4' count={30} height={700} /> :
                random.map((photo)=>(
                    <PhotoCard key={photo.id} {...photo}/>
                  
                  ))}
            </div>
        </div>
      )

}

export default Random