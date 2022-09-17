import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("new note place holder") //this is actually not a appropriate way for palce holder
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])  //get notes from the server
  console.log('render', notes.length, 'notes')  

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

    console.log(noteObject, event.target) //event.target is the target the event has been excuted on
    setNotes(notes.concat(noteObject)) // concat the new note behind the old notes
    setNewNote("")//clear the new note builder, clean the input form after submmit
  }

  const handleNoteChange = (event) => { //handle the change in the input box
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick = {() => setShowAll(!showAll)}> 
          Show {showAll ? 'important': 'all'}
          {/* with click, the 'showAll' variable will change, then so the button's name */}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
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