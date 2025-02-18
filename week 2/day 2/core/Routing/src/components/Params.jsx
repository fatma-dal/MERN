import React from 'react'
import { useParams } from 'react-router-dom'
function Params(props) {
    const {param}= useParams()
  return (
    <div>
        {isNaN(+param)==true ? <h1>The world is: {param}</h1> : <h1>The Number is: {param}</h1>}
    </div>

  )
}

export default Params