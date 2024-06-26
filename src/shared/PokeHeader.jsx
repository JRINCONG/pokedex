import React from 'react'
import '../styles/PokeHeader.css'

export const PokeHeader = () => {
  return (
 
     <div className='Header'>
      <div className='poke_red'>
        <figure className='pokeHeder_img'>
          <img src='./img/logo.svg' alt='Poke imagen'/>
        </figure>
      </div>
      <div className='poke_black'>
        <div className='pokeHeder_OutCircle'>
          <div className='pokeHeader_inCircle'></div>
        </div>
      </div>
    </div>
  
  )
}


