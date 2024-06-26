import React from 'react'
import '../../styles/PaginationPokemon.css'

function PaginationPokemon({ setPaginationPoke, PaginationPoke, setLimitPage,  LimitPage, TotalPoke }) {


const Next = () => {

    setPaginationPoke(PaginationPoke + LimitPage)

}

const Back = () =>{
    if(PaginationPoke > 1 ){
    setPaginationPoke(PaginationPoke - LimitPage)
    }
}

const MorCard = () => {
    if(LimitPage < 200){
    setLimitPage(LimitPage + 3)
    }else{
        
    }
}

const MenosCard = () =>{
    console.log('si funciona')
    if(LimitPage > 3){
    setLimitPage(LimitPage - 3)
    }else{
        document.querySelector('.Limitmenos').disabled= false
    }
}

  return (
    <div className='Conten_Buton'>
      <button className='Limitmenos'onClick={MenosCard}>➖ Card</button>
      <button className='Limit'onClick={MorCard}>➕ Card</button>      
      <button className='Next' onClick={Next}>Next</button>
      <p className='Conten_page'><span>Pag.</span>{PaginationPoke} </p>
      <button className='Back' onClick={Back}>Back</button>
    </div>
  )
}

export default PaginationPokemon
