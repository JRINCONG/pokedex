import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store/redux'
import { useFetch } from '../hook/useFetch'
import { PokedexCard } from '../components/PokedexPage/PokedexCard'
import { v4 } from "uuid";
import { InputSelect } from '../components/PokedexPage/InputSelect'

import '../styles/PokedexPage.css'
import { PaginationCard } from '../components/PokedexPage/PaginationCard'
import PaginationPokemon from '../components/PokedexPage/PaginationPokemon'


export const PokedexPage = () => {

  const [ Pokemon, getPokemon,TypeName, getType, Pagina, OtherConsult ] = useFetch();

  const [ BuscarInput, setBuscarInput ] = useState('');

  const [ BuscarTypes, setBuscarTypes ] = useState('');

  const [ Pagination , setPagination] =useState(1);

  const [ ShowCardInput, setShowCardInput ] = useState(6);

  const [ PaginationPoke, setPaginationPoke ] = useState(1)

  const [ LimitPage, setLimitPage ] = useState(3)









  useEffect(()=>{    
   
    if(BuscarTypes){
    getType(BuscarTypes)
    }else{
      const url=`https://pokeapi.co/api/v2/pokemon/?limit=${LimitPage}&offset=${PaginationPoke}`
      getPokemon(url)

    }
  },[BuscarTypes, PaginationPoke, LimitPage, ShowCardInput])

 

 const TextInput=useRef()
 let datos = '';

    const BuscarPoke =(event)=>{
    event.preventDefault();
    setBuscarInput(TextInput.current.value.trim())
  }
  
  const filtrado = (item) =>{
   return item.name.includes(BuscarInput)

  }
 
const user = useSelector((store)=> store.users)

//console.log(OtherConsult.results.length)

//const Cantpaginas = 7;
const  Total = Math.ceil(TypeName?.results?.length / ShowCardInput);
const  TotalPoke =  Math.ceil(Pokemon?.results?.length / LimitPage);
const paginacion = () =>{ 

  if(Total){
    let end = ShowCardInput * Pagination;
    let star = end - ShowCardInput;
    return TypeName?.results?.slice(star, end)
  }else{
   let end = ShowCardInput * Pagination;
   let star = end - ShowCardInput;
   return Pokemon?.results?.slice(star, end)
  }  
}

  return (

   <>
       
      <div className='Pokedex_page_name'>
        <h1><span>Welcome</span><span> { user } </span> here you will find your favorite pokemon </h1>
        </div>
        <div className='Pokedex_busqueda'>
            <form onSubmit={BuscarPoke}>
                <input type='text' placeholder='Busca tu Pokemon' onChange={BuscarPoke} ref={TextInput}/>
                <button>Buscar</button>
            </form>
           
        <InputSelect
         setBuscarTypes={ setBuscarTypes }
         
        />
          
        </div>
        
        <div>
          {
        (!Total)? 
       <PaginationPokemon
       setPaginationPoke={ setPaginationPoke }
       PaginationPoke = { PaginationPoke }
       TotalPoke = { TotalPoke }
       setLimitPage ={ setLimitPage }
       LimitPage = { LimitPage }
       />  
       :           
          
          (Total)?          
       <PaginationCard
       Pagination={Pagination}
       setPagination={ setPagination }
       Total={Total}
       ShowCardInput = { ShowCardInput }     
       setShowCardInput = { setShowCardInput }
       />
       :console.log('')

          }
       </div>


        <div className='conten-PokemonCard'>
        
          {

        
            (TypeName)?
            paginacion().filter(filtrado).map((item)=>(
            
              <PokedexCard
               
               key={v4()}
               url ={item.url}
               />
            ))
              :
              Pokemon?.results.filter(filtrado).map((item)=>(
          
               <PokedexCard
               
               key={v4()}
               url ={item.url}
               />            
            ))

          }

        </div>
       
    </>
 
  )
}


