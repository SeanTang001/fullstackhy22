import { useEffect, useState } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note ...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fullfilled')
      setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <Button  onClick={() => setShowAll(!showAll)} text = "show all"/>
      <form onSubmit={addNote}>
        <input value={newNote} onChange = {handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

const Button = ({onClick, text}) =>  <button onClick = {onClick}> {text} </button>

export default App 