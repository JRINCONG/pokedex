import React, { useRef, useState } from 'react';
import '../styles/HomePage.css';
import { setUsers } from '../store/slice/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../store/redux';
import { useNavigate } from 'react-router-dom';
import { PokeFooter } from '../shared/PokeFooter';

export const Home_page = () => {

const [ Validar, setValidar ]= useState(true)

const users = useSelector((store) => store.users)
const navigate = useNavigate();


const dispatch= useDispatch();
const TextInput=useRef()

const Handlesubmit = (event) => {

if(Validar){
console.log('entro')
dispatch(setUsers(TextInput.current.value.trim()))
TextInput.current.value='';
navigate('/pokedex')
setValidar(false)
}
}

const  keyUp = (e) => {
   const vali = /[\d]/;
  if( parseInt(e.key.trim()) ){
  setValidar(false)  
  }else{
    setValidar(true)
  }
  
}
console.log(Validar)

  return (
  <div className='Containt'>
    <div className='Conten-homepage'>

      <figure className='homePage_img'>
        <img src='../img/logo.svg' alt='Pokedex-LOGO'/>
      </figure>
      
      <div className='homepage-saludo'>
      <h1>¡ Hello Coach !</h1>
      <h3>To start give me your name</h3>
      </div>
     
      <form onSubmit={Handlesubmit}>
        <input type='text' 
       onKeyUp={keyUp}
        placeholder='Write your name'
         ref={TextInput}/>
        
        <button>Send</button>
      </form>
      {
         (!Validar)&&
        <h2>❌ Debe Digitar Solo Su Nombre 😥</h2>
        
      }
      
    </div>
   <div className='footer'>
   <div className='poke_red'></div>
   <div className='poke_black'></div>
   </div>
   </div>
  )
}

