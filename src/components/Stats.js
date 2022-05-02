import React from 'react'
import { useGlobalContext } from '../context'

const Stats = () => {
    const {photos,stats} = useGlobalContext()
  return (
        <div>
            <div className='flex flex-col items-center my-12'>
              <div className="avatar mb-3">
                <img className='rounded-full' src={photos[0]?.user?.profile_image?.medium} alt="" />
              </div>
            <div className="stats flex">
            <div className='px-12 py-6 md:px-20  shadow-md text-white bg-indigo-800 mr-8 rounded-md flex items-center justify-center flex-col'>
              <p className='text-2xl'>Views</p>
              {stats.views && <p className='text-4xl'>{stats.views.total}</p>}
            </div>
            <div className='px-12 py-6 md:px-20 shadow-md text-white bg-indigo-800 rounded-md flex items-center justify-center flex-col'>
              <p className='text-2xl'>Downloads</p>
              {stats.downloads && <p className='text-4xl'>{stats.downloads.total}</p>}
            </div>
            </div>
            </div>
          </div>
  )
}

export default Stats