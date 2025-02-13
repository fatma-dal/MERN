import PersonalCard from './components/PersonalCard';
import './App.css'

function App() {
  return (
      <div className="App">
          <PersonalCard FirstName = "Doe" lastName = "Jane" Age={45} HairColor = "Black"  />
          <PersonalCard FirstName = "Smith" lastName = "John" Age={45} HairColor = "Brown" />
          <PersonalCard FirstName = "Fillmore" lastName = "Millard" Age={45} HairColor = "Brown" />
      </div>
  );
}


export default App
