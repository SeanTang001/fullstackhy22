import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')

  const personToShow = () => {
    const pz = persons.filter((person) => {
      return(person.name.toLowerCase().startsWith(searchName.toLowerCase()))
    });
    
    console.log({pz})
    console.log(persons)
    return (pz.map((person) => <Entry name={person.name} phone = {person.phone} key={person.name}/>))    
  }


  const addPerson = (event) => {
    event.preventDefault()
    console.log(newPhone, newName)
    console.log(persons.find((names) => {return(names.name === newName)}))
    if (persons.find((names) => {return(names.name === newName)})){
      alert(newName + " is alreayd in your phone book")
      setNewName('')
    }else{
      setPersons(persons.concat({name : newName, phone : newPhone})) 
      console.log({newName})
      setNewName('')  
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
          filter shown with <input value = {searchName} onChange = {handleSearchChange}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
          name: <input value={newName} onChange={handleNameChange}/>
          <br></br>
          number: <input value={newPhone} onChange = {handlePhoneChange} />
          <br></br>
          <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          personToShow()
        }
      </ul>
    </div>
  )
}

const Entry = ({name, phone}) => {
  return(<li>{name} {phone}</li>)
}

export default App