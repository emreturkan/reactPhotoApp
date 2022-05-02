import React from 'react'

const PhotoCard = (photo) => {
  return (
    
    <a href={photo.links.html} target='_blank'>
      <img  className='mb-4 rounded-md shadow-md' src={photo.urls.regular} alt="" /> 
    </a>
  )
}

export default PhotoCard