import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [input,setInput]=useState(0)
    const [category,setCategory]=useState()
    const navigate = useNavigate()
    const sendinfo=(e)=>{
        e.preventDefault()
        category =="people" ? selectPeople():selectPlanet()
        

    }
    const selectPlanet =()=>{
        navigate(`/planets/${input}`)
    }
    const selectPeople =()=>{
        navigate(`/people/${input}`)
    }


return (
    <div> 
    <div className='container d-flex '>
        <form onSubmit={sendinfo}>


        
    <label className='form-control'>Search for :</label>
    <select className='form-select' name='category' onChange={(e)=> setCategory(e.target.value)} >
        <option value="" disabled>Select the correct answer</option>
        <option value="planet"   >Planet</option>
        <option value="people" >people</option>

    </select>
    <label className='form-control '>ID:</label>
    <input type="text" className='col-1'  onChange={(e)=> setInput(e.target.value) }/>
    <button className='btn btn-primary'> search</button>
    </form>
    

</div>
</div>
)
}

export default Home