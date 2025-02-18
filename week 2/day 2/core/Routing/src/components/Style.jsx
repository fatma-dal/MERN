import React from 'react'
import { useParams } from 'react-router-dom'
function Style(props) {
  const {color1,color2}=useParams()

  
  return (
    <div>
      <h1 style={{backgroundColor:color1, color:color2}}>The world is : hello</h1>
    </div>
  )
}

export default Style