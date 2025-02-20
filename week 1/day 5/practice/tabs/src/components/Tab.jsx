import React from 'react'
import style from '../css/Tab.module.css'


function Tab({data,setValue}) {
const [arr1,arr2,arr3]=data








return (
    <div className='container col-4 mt-5'>
        <table className='table '>
            <thead >
                <tr>
                    
                    {data.map((d,i)=>(<th key={i}  onClick={()=>(setValue(d.content))}>{d.number}</th>))}
                </tr>
            </thead>
        </table>
    </div>
)
}

export default Tab