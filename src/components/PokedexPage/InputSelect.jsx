import React, { useEffect, useRef } from 'react'
import { useFetch } from '../../hook/useFetch'
import { v4 } from "uuid";

export const InputSelect = ({ setBuscarTypes }) => {

  
const [ Type, getType ] = useFetch()

useEffect(()=>{
    const url='https://pokeapi.co/api/v2/type'
    getType(url)

},[])

const SeleccionInput= useRef();

 const Seleccion = () =>{

 setBuscarTypes(SeleccionInput.current.value); 

 }


  return (

        <select onChange={Seleccion}  ref = { SeleccionInput }>
            <option value="">All Pokemon</option>
             {
                Type?.results.map((item)=>(

                    <option key={item.url} value={item.url}>{item.name}</option>

                ))             

             } 
            

        </select>
      
 
  )
}


