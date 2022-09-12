import './App.css';
import { useState } from 'react';
import Content from './components/Content';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }, { name: 'Scott Zeta' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const name = {
      name: newName
    }

    setPersons(persons.concat(name)) //concat the new name behind exsit
    setNewName("") //clear the input box
  }
  const onChange = (event) =>{
    console.log("changing: ", event.target.value)
    setNewName(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Content persons={persons} />
    </div>
  )
}

export default App