import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Planets(props) {
  const {idp}=useParams()
  const [planet,setPlanet]= useState([])

  const fetchPlanet =()=>{
    axios.get(`https://swapi.dev/api/planets/${idp}/`)
        .then(res=>setPlanet(res.data))
        .catch(err => {
          console.log(err.message);
      })
  }
useEffect(()=>{

      fetchPlanet()
  },[idp])



  return (
    <div className='container col-4 mt-5'>
      <h1 className='text-center text-primary'>Name: {planet.name}</h1>
      <h4 className='text-center'>Diametre: {planet.diameter}</h4>
      <h4 className='text-center'>terrain: {planet.terrain}</h4>
      <h4 className='text-center'>Population: {planet.population}</h4>
    </div>
  )
}

export default Planets