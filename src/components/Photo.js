import React from 'react'
import { useGlobalContext } from '../context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PhotoCard from './PhotoCard'
const Photo = () => {
    
    const {photos,loading,searchPhoto,search} = useGlobalContext()

if(search){
  return (
    <div className='columns-1 gap-x-8 p-8 md:columns-2 lg:columns-3'>
      {loading ? <Skeleton className='shadow-md mb-4' count={30} height={700} /> :
        searchPhoto?.map((photo)=>(
            <PhotoCard key={photo.id} {...photo}/>
          
          ))}
    </div>
)
}

  return (
        <div className='columns-1 gap-x-8 p-8 md:columns-2 lg:columns-3'>
          {loading ? <Skeleton className='shadow-md mb-4' count={30} height={700} /> :
            photos.map((photo)=>(
                <PhotoCard key={photo.id} {...photo}/>
              
              ))}
        </div>
  )
}

export default Photo