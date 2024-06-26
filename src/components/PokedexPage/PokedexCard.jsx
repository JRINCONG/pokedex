import React, { useEffect } from 'react';
import { useFetch } from '../../hook/useFetch';
import { v4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import '../../styles/PokedexPage.css'




export const PokedexCard = ({url}) => {
  
  const [ ShowPokemon, getShowPokemon ] = useFetch()

  const navigate = useNavigate();

  useEffect(() => {             
     getShowPokemon(url)
  },[])

const Buscar = (event) =>{
  navigate(`/pokedex/${ShowPokemon.id}`)

}


    return (
        <>
      
    
    <section className='SectionCard' onClick={Buscar}>
      <div className={`pokedex_back ${ShowPokemon?.types[0].type.name}`}></div>
        <figure className='pokecardImg'>
           <img src={ShowPokemon?.sprites?.other['official-artwork'].front_default}/>
       </figure>
       <div className='PokedexDatos'>
      <h2 className={`pokedex_name${ShowPokemon?.types[0].type.name}`}>{ShowPokemon?.name}</h2>

      <ul className='pokedex_type'>
        {
            ShowPokemon?.types?.map((item)=>(
                <li className = {`Slot${item.slot}`} key={v4()}>{item.type.name}</li>
            ))
        }
      </ul>
       <span className='pokedex_TYPE'>type</span>
       </div>
       <hr className='pokedex_hr'/>

      <ul className='pokedex_stat'>
        {
            ShowPokemon?.stats?.map((item, index) => (
                (index < 4)?
              <li className='items-habilidades' key={v4()}>
             <span>{item.stat.name}</span>
             <span className={`pokedex_name${ShowPokemon?.types[0].type.name}`}>{item.base_stat}</span>
              </li>
             :''
            ))
        }
      
      </ul>


    </section>

    </>  
   
  )
}


