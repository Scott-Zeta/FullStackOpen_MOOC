import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("new note place holder")

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5, //randomly true or false
      id: notes.length + 1,
    }

    console.log(noteObject)
    setNotes(notes.concat(noteObject)) // concat the new note behind the old version
    setNewNote("")//clear the new note builder, clean the input form
  }

  const handleNoteChange = (event) =>{
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
        <input value = {newNote}
        onChange = {handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App