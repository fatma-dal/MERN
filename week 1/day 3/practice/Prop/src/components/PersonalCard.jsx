import React from 'react'

function PersonalCard(props) {
    const {FirstName , lastName , Age, HairColor }= props
  return (
    <div className='card'>
        <h1>{FirstName} , {lastName}</h1>
        <h3>Age : {Age}</h3>
        <h4>Hair Color : {HairColor}</h4>
    </div>
  )
}

export default PersonalCard