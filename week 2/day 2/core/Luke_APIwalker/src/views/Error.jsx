import React from 'react'
import Obi_Wan from '../assets/Obi_Wan.jpeg'

function Error() {
    return (
        <div className='container '>
            <h1 className='text-center text-danger pb-4'>These aren't the droids you're looking for</h1>
            <img src={Obi_Wan} alt="Obi-Wan Kenobi" />
        </div>
    )
}

export default Error