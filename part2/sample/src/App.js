import {useState} from 'react'
import Note from './components/Note'

const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((notes,i) => <Note key = {notes.id} note = {notes}/>
        )}
      </ul>

    </div>
  )
}


export default App