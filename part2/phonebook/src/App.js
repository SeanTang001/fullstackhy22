import { useEffect, useState } from 'react'
import phoneBookServices from './service/phoneBook'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    phoneBookServices.getPhoneBook()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')

  const personToShow = () => {
    const pz = persons.filter((person) => {
      return(person.name.toLowerCase().includes(searchName.toLowerCase()))
    });
    
    console.log({pz})
    console.log(persons)
    return (pz.map((person) => {
      return(
      <>
        <Entry name={person.name} phone = {person.phone} key={person.name}/>
        <button onClick={() => removePerson(person.name)}>delete</button>
      </>
      )
    }))    
  }

  const removePerson = (name) => {
    let a = window.confirm ("Delete " +name + "?")
    if (a){
      console.log(name)
      phoneBookServices.getId(encodeURI(name)).then(
        response => {  
          axios.delete("http://localhost:3001/persons/"+encodeURI(response.data[0].id))  
          console.log(name + " removed")
          setPersons(persons.filter(person => person.name !== name))
        }
      )
  
    }

    //window.location.reload(1)
  } 

  const addPerson = (event) => {
    event.preventDefault()
    console.log(newPhone, newName)
    console.log(persons.find((names) => {return(names.name === newName)}))
    if (persons.find((names) => {return(names.name === newName)})){
      //alert(newName + " is already in your phone book")
      let a = window.confirm ("Replace " +newName + "'s phone number?")
      if (a){
        phoneBookServices.getId(encodeURI(newName)).then(
          response => {  
            axios.put("http://localhost:3001/persons/"+encodeURI(response.data[0].id), {name:newName, phone: newPhone})  
            setPersons(persons.filter((person) => 
              person.name !== newName).concat({name:newName, phone:newPhone, id:response.data[0].id}))
          }
        )
      }
      else{
        setNewName('')
        setNewPhone('')  
      }
    }else{
      setPersons(persons.concat({name : newName, phone : newPhone})) 
      phoneBookServices.addPerson({name:newName, phone: newPhone})
      .then(
        response => {
          console.log(response)
          console.log({newName})
          setNewName('')  
          setNewPhone('')  
        }
  
      )
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