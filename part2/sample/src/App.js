import { useEffect, useState } from 'react'
import Note from './components/Note'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note ...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    }
    noteService.getAll().then(
      response => {
        setNotes(response.data.concat(nonExisting))
      }
    )
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

    noteService.create(noteObject).then(response => {
        console.log(response)
        setNotes(notes.concat(noteObject))
        setNewNote('')    
      })
   }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportance = (id) => {
    const note = notes.find(n=>n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote).then(response => {
      setNotes(notes.map(n=>n.id !== id ? n: response.data))
    }).catch(
      error => {
        alert ('the note "'+note.content+'" does not exist')
        setNotes(notes.filter(n=>n.id!==id))
      }
    )


    console.log(id)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance = {() => toggleImportance(note.id)} />
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