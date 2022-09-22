import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("new note place holder") //this is actually not a appropriate way for palce holder
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    // console.log('effect')

    // const eventHandler = response => {
    //   console.log('promise fulfilled')
    //   setNotes(response.data)
    // }
    // axios                                   //These two parts
    //   .get('http://localhost:3001/notes')    // was refactored
    //   .then(eventHandler)
    noteService.getAll()
      .then(initalNotes => {
        setNotes(initalNotes)
      })
  } //get notes from the server

  useEffect(hook, [])
  console.log('render', notes.length, 'notes') //render two times, first without notes data, second with notes 

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
  //a if else statement, condition showAll?, if true, all notes, if false, notes with filter

  const addNote = (event) => {
    event.preventDefault() //prevent refresh page in old way
    //new note object
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5, //randomly true or false
      id: notes.length + 1,
    }

    // axios.post('http://localhost:3001/notes', noteObject)
    //   .then(response => {
    //     console.log(response)
    //     setNotes(notes.concat(response.data)) // concat the new note behind the old notes
    //     setNewNote("")//clear the new note builder, clean the input form after submmit
    //   }) //the notes won't disappear when refreshing

    //console.log(noteObject, event.target) //event.target is the target the event has been excuted on
    noteService.create(noteObject)
      .then(returnedNode => {
        setNotes(notes.concat(returnedNode))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => { //handle the change in the input box
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportance = (id) => {
    console.log('importance of ' + id + 'needs to be toggled')

    const url = `http://localhost:3001/notes/${id}` //use ` not ' or 404 not found(I don't know fucking why!)
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    // axios.put(url, changedNote).then(response => {
    //   setNotes(notes.map(n => n.id !== id ? n : response.data))//use map to subsitute the old notes, 
    //   //if id not same, assign to itself(skip), if it is, assign to new notes
    // })
    noteService.update(id, changedNote)
      .then(returnedNode => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNode))
      })
  } ///!! important

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
          {/* with click, the 'showAll' variable will change, then so the button's name */}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
        )}
        {/* a conditional filter notesToShow before the map */}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange} //handle the change in the input box
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App