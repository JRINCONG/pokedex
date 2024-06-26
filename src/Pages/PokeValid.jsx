import React from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { store } from '../store/redux'
import { PokeHeader } from '../shared/PokeHeader'


export const PokeValid = () => {

const user= useSelector((store)=> store.users)



  if(user.length >= 4 ){

       return (
        <>
        <PokeHeader/>
        <Outlet/>
       </>
       )
   
   }else{
     return <Navigate to ='/'/>
   }
 
   
  }





 