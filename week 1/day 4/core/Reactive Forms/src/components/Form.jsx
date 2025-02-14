import React from 'react'
import { useState } from 'react'

function Form() {
  
  const [FirstName,setFirstName]= useState()
  const [LastName,setLastName]= useState('')
  // const [Email,setEmail]= useState('')
  // const [Password,setPassword]= useState('')

const submitHandler = (e)=>{
  e.preventDefault()
  setFirstName(FirstName)
  
 }
const changeHandler = (e)=> {
  setFirstName (e.target.value)
  setLastName(e.target.value)

}




  return (
    <div>
    <h1 className="text-center">Welcome.Please submit the Form</h1>
    <form onSubmit={(e)=> submitHandler} className='d-flex flex-column container center_div col-3'>
        <label  className="form-label">First Name</label>
        {JSON.stringify(FirstName)}
        <input onChange={changeHandler}/>
        <p></p>
        <label  className="form-label">Last Name</label>
        <input onChange={changeHandler} />
        <p></p>
        <label  className="form-label">Email</label>
        <input  />
        <p></p>
        <label  className="form-label">Password</label>
        <input  />
        <p></p>
        <label  className="form-label">Confirm Password</label>
        <input  />
        <p></p>
          <button  className='btn btn-success col-3 '>Submit</button>
    </form>
    </div>
  )
}

export default Form