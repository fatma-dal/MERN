import React from 'react'
import { useState } from 'react'

function Card (props) {
    const {firstName ,lastName,age,hairColor} = props
      const [Newage,setAge]= useState(age)
const handelAge = ()=> {
    console.log(Newage)
    setAge(Newage+1)
}
    
  return (
    <>
    <div style={{border:'1px  black solid', borderRadius:'10px' ,padding : '8px' }} >
        <h1>{firstName} ,{lastName}</h1>
        <h4>Age:{Newage}</h4>
        <h4>Hair Color: {hairColor}</h4>
        <button onClick={handelAge} className='btn btn-outline-dark'>Birthday Button for {firstName} {lastName}</button>
    </div>
    </>
  )
}

export default Card
