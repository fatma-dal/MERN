import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import Search from '../components/Search'
function People(props) {

  const [data,setData]= useState([])


  const {id}=useParams()
  const fetchData=()=>{
    axios.get(`https://swapi.dev/api/people/${id}`)

        .then(res=>setData(res.data))
        .catch(err => {
          console.log(err.message);
      })
        
  }

  useEffect(()=>{
  
    fetchData()
  },[id])

  return (
    <div className='container col-4 mt-5'>
      
      <h1 className='text-center text-success'>Name: {data.name}</h1>
      <h4 className='text-center'>Height: {data.height} </h4>
      <h4 className='text-center'>Gender: {data.gender}</h4>
      <h4 className='text-center'>Hair color: {data.hair_color}</h4>

    </div>
  )
}

export default People