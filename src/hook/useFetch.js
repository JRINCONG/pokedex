import axios from 'axios';
import React, { useState } from 'react';

export const useFetch = () => {

    const [ ConsulApi, setConsulApi ] = useState();

    const [ TypeName, setTypeName ] = useState();

    const [ Pagina, setPagina ] = useState();

    const [ OtherConsult, setOtherConsult ] = useState();
    

                    const getApiPokemon = (url) => {
                    axios.get(url)
                    .then(resp => {
                        setConsulApi(resp.data)
                        setPagina(resp.data)
                    })
                    .catch(error => console.log(error))

                    }


                    const getType = (url) =>{
                        
                        axios.get(url)
                        .then(resp => {
                            setTypeName({ 

                                results: resp.data.pokemon.map((item)=>(
                                    item.pokemon
                                ))
                            })

                            setOtherConsult({ 

                                results: resp.data.pokemon.map((item)=>(
                                    item.pokemon
                                ))
                            })
                            
                        })
                        
                        .catch(error => console.log(error))


                        
                        }
                        
                  
                       

    return [ ConsulApi, getApiPokemon, TypeName, getType, Pagina,  OtherConsult ]
 
}




