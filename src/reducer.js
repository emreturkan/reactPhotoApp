import React from 'react'

const reducer = (state,action) => {
  switch(action.type){
      case 'LOADING':{
        return {...state,loading:true}
      }

      case 'USER_PHOTO':{
        return {...state,photos:action.payload,loading:false,search:''}
      }

      case 'STATS':{
          return {...state,stats:action.payload}
      }

      case 'RANDOM_PHOTO':{
        return {...state,random:action.payload,loading:false,search:''}
      }

      case 'SEARCH_PHOTO':{
        return{...state,searchPhoto:action.payload,loading:false}
      }

      case 'SEARCH':{
        return{...state,search:action.payload}
      }

      default:
          return state

  }
}

export default reducer