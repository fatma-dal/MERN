
import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Tab from './components/Tab'

function App() {

  const [value,setValue]= useState('')

    const arr=[
        {number:'table 1',content:'Tab 1 content is showen here'},
        {number:'table 2',content:'Tab 2 content is showen here'},
        {number:'table 3',content:'Tab 3 content is showen here'}

    ]
  


  return (
    <>
     <Tab data={arr} setValue={setValue}/>
     <Content  value={value}/>


    </>
  )
}

export default App
