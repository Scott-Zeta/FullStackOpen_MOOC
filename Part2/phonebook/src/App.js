import './App.css';
import { useState, useEffect} from 'react';
import Content from './components/Content';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [show, setShow] = useState('')

  const hook = () =>{
    const eventHandler = (response) =>{
      setPersons(response.data)
    }
    axios.get('http://localhost:3001/persons').then(eventHandler)
  }

  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    const name = {
      name: newName,
      number: newNumber
    }
    if (!Duplicate(name)) {
      setPersons(persons.concat(name)) //concat the new name behind exsit
      setNewName("") //clear the input box
      setNumber("")
    } else {
      alert(name.name + " is already added to phonebook!")
    }
  }

  //onChange varibales function for each input box.
  const onChange = (event) => {
    setNewName(event.target.value)
  }
  const numOnChange = (event) => {
    setNumber(event.target.value)
  }
  const showOnChange = (event) => {
    setShow(event.target.value)
  }


  const Duplicate = (check) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === check.name) {
        // console.log(check)
        // console.log("true")
        return true;
      }
    }
    // console.log("false")
    return false;
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={show} filterChange={showOnChange} />
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onChange} /><br></br>
          number: <input value={newNumber} onChange={numOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {console.log(show)} */}
      <Content persons={persons} filter={show} />
    </div>
  )
}

export default App