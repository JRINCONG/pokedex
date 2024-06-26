import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { Home_page } from './Pages/Home_page';
import { Pokedex_id } from './Pages/Pokedex_id';
import { PokedexCard } from './Pages/PokedexCard';
import { PokedexPage } from './Pages/PokedexPage';
import { PokeValid } from './Pages/PokeValid';
import { PokeFooter } from './shared/PokeFooter';



export const App = () => {





  return (
    <>
      <Routes>
      
       <Route path = '/' element = {<Home_page/>}/>
       
          <Route element = {<PokeValid/>}>
                <Route path = '/Pokedex' element = {<PokedexPage/>}/>
                <Route path = '/Pokedex/:id' element = {<Pokedex_id/>}/>
          </Route>
          
          
      </Routes>
     
    </>
  )
}

