import './App.css'
import Card from './components/Card'

function App() {
  


  return (
    <>
    <div className='main'>
    <Card firstName = 'Doe' lastName ='Jane' age={45} hairColor = 'Black'/>
    <Card firstName = 'Mike' lastName ='JB' age={8} hairColor = 'Brown'/>
    </div>

    </>
  )
}

export default App
