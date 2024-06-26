import React from 'react'
import '../../styles/PaginationCard.css'


export const PaginationCard = ({Pagination, setPagination, Total, setShowCardInput, ShowCardInput  }) => {


    const Siguiente = () =>{
         if(Pagination < Total){
          document.querySelector('.anterior').disabled = false;
         setPagination(x => x + 1);
        }else{
          document.querySelector('.siguiente').disabled = true;
          
        }
       }
       const Anterior = () =>{
         if(Pagination > 1){
          document.querySelector('.siguiente').disabled = false;
          setPagination(x => x - 1)
        }else{
          document.querySelector('.anterior').disabled= true
          
        }
     
       }

      let temp = Total;
      console.log(ShowCardInput)
   console.log(Total)
       const MorCard = () => {
        if(Total > 1)
        
        setShowCardInput( ShowCardInput + 3)
       }

       const MenosCard = () => {
             if(ShowCardInput > 6)
           setShowCardInput( ShowCardInput - 3)
       }

  return (
    <div className='Pagination'>
      <button className='anterior' onClick={Anterior}>Back</button>     
      <p><span>{Pagination}</span> to <span>{Total}</span></p>
      <button className='siguiente' onClick={Siguiente}>Next</button>
      <button className='Limit'onClick={MorCard}>➕ Card</button>
      <button className='Limitmenos'onClick={MenosCard}>➖ Card</button>
    </div>
  )
}


