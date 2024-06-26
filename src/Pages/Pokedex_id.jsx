import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hook/useFetch';
import { v4 } from "uuid";
import '../styles/Pokedex_id.css'

export const Pokedex_id = () => {

const navigate=useNavigate();
  const param=useParams();

  const [ ShowItems, getShowItems ] = useFetch()


  useEffect(()=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${param.id}/`
    getShowItems(url)
  },[])

  const Atras = () =>{
    navigate('/pokedex')

  }

  console.log(ShowItems)
 
  return (
    <div className='conten_General'>
      <div>    
          <button className='Pokeinfo_atras' onClick={Atras}>Back</button>
      </div>
      
    <section className='sectionInfo'>
      <div className={`pokeInfo_back ${ShowItems?.types[0].type.name}`}></div>
    <figure className='PokeInfo_img'>
       <img src={ ShowItems?.sprites?.other['official-artwork'].front_default}/>
   </figure>
 
    <h2 className='pokeInfo_id'>#{ShowItems?.id}</h2>
        <span className='pokeInfo_name'>
        <hr className='poke_hr'/> <h2>{ ShowItems?.name}</h2><hr className='poke_hr'/>
        </span> 
        <div className='pokeInfo_Peso'>
        <ul className='pokeInfo_Peso_ul'>
       
          <li><span>Peso</span>{ShowItems?.weight}</li>
          
          <li><span>Altura</span>{ShowItems?.height}</li>
        </ul>
        </div>
        <div className='containt_type'>
        <div className='pokeInfo_containt_type'>
        <h2 className='pokeInfo_tipo_type'>Tipo</h2>
        <ul className='pokeInfo_type'>
           
        {
         ShowItems?.types?.map((item)=>(
            <li className={`poke_info_item ${item.type.name}`} key={v4()}>{item.type.name}</li>
        ))
       }
        </ul>
       </div>
       <div className='pokeInfo_containt_habilidad'>
        <h2 className='pokeInfo_tipo_habilidad'>Habilidades</h2>
          <ul className='pokeInfo_habilidad'>
            
        {
        ShowItems?.abilities?.map((item) => (        
  
        <li>{item.ability.name}</li>     
 
      ))

       }
        </ul>
        </div>
        </div>
        <div className='pokeInfo_title_stats'>
        <h2 className='title_stats'>Stats</h2> <hr className='title_stats_hr'/>
        </div>  
        <ul className='pokeInfo_state'>
        {
         ShowItems?.stats?.map((item, index) => (
         
          <li className='pokeInfo-item' key={v4()}>
          <span>{item.stat.name}</span>
          <span>{item.base_stat}/250</span>
          <div className='outbar'>
            <div className='inbar' style={{width:`${item.base_stat/2.5}%`,}}>

            </div>
          </div>
          </li>
         
        ))
    }
        </ul>
   <div className='conten_Moments'>
     <div className='conten_title_Moments'>
        <h2 className='title_Moments'>Stats</h2>
        <hr className='title_Moments_hr'/>
        </div>
    <div className='pokeInfo_Moments'>
      
    {
       ShowItems?.moves?.map((item) => (
        
      
      <div className='pokeInfo_Moments_items'>{item.move.name}</div>  
    
    ))

    }
    </div>
    </div>  
</section>
</div>
  )
}


