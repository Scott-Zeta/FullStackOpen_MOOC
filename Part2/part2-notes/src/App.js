import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("new note place holder") //this is actually not a appropriate way for palce holder
  const [showAll, setShowAll] = useState(true)

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
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
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