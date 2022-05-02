import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext()

const defaultState={
    photos:[],
    loading:true,
    search:'',
    searchPhoto:[],
    stats:[],
    random:[]

}


export const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,defaultState);

    const getUserPhoto = async()=>{
        dispatch({type:'LOADING'})
        const response = await fetch('https://api.unsplash.com//users/emreturkan/photos/?client_id=Pm3cOdK0iufN9X3lt2Xg_40NC4HIavKKbR62HvndA1c&per_page=40')
        const data = await response.json()
        dispatch({type:'USER_PHOTO',payload:data})
    }

    const getStatistics = async()=>{
        const response = await fetch('https://api.unsplash.com//users/emreturkan/statistics/?client_id=Pm3cOdK0iufN9X3lt2Xg_40NC4HIavKKbR62HvndA1c')
        const data = await response.json()
        dispatch({type:'STATS',payload:data})
    }

    const getRandom = async()=>{
        const response = await fetch('https://api.unsplash.com/photos/random/?client_id=Pm3cOdK0iufN9X3lt2Xg_40NC4HIavKKbR62HvndA1c&count=30')
        const data = await response.json()
        dispatch({type:'RANDOM_PHOTO',payload:data})
    }

    const getSearch = async()=>{
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=Pm3cOdK0iufN9X3lt2Xg_40NC4HIavKKbR62HvndA1c&per_page=30&query=${state.search}`)
        const data = await response.json()
        dispatch({type:'SEARCH_PHOTO',payload:data.results})
    }

    const handleChange = (value)=>{
        dispatch({type:'SEARCH',payload:value})
    }
       
   


    useEffect(()=>{
        getStatistics()
        
        if(state.search.trim()===''){
            getUserPhoto()
            
        }
        else{

            getSearch()
        }

        
    },[state.search])

    useEffect(()=>{
        
        if(state.search.trim()===''){
            getRandom()
        }
        else{

            getSearch()
        }

    },[state.search])
    
   

    return <AppContext.Provider value={{...state,getRandom,handleChange,getUserPhoto}}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}