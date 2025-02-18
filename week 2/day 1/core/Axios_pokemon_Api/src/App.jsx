import { useState , useEffect} from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [pokemons,setPokemons]=useState([])
  

  const dataWithAxios= async()=>{
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=151')
    .then(response=>{
      console.log(response.data.results)
      
      const pokemonz = response.data.results
      
      setPokemons(pokemonz)
      
  
  })
  }
    useEffect(()=>{
      dataWithAxios()
    }, []); 
  
  
  return (
    <>
    <div className='container col-5 '>
      <h1 className='text-center'>Pokemon API</h1>
      <ul className='list-group' >
        {pokemons.map((pk,index)=> {
          return(
            <li className='list-group-item list-group-item-info text-center mt-1 ' key={index}  > <strong>Pokemon Number {index+1}:</strong> {pk.name}</li>) 
            // <img key={index} src={pk.url} alt="Pokemon image" /> )
          })}
      </ul>
      </div>
    </>
  )
}

export default App
