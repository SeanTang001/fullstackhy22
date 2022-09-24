import { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [country, setCountry] = useState('')

  useEffect( () => {
    console.log('requesting')
    axios.get("https://restcountries.com/v3.1/all")
    .then( (response) => {
      setCountries(response.data)
      console.log(response.data)
    })
  }, [])

  const searchCountry = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  
  const tz = () => {
    console.log(country)
    let temp = countries.filter(
      (countri) => {
        //console.log(countri.name.common.toLowerCase().includes(country.toLowerCase()))
        return(countri.name.common.toLowerCase().includes(country.toLowerCase()))
      }
    )
    
    if (temp.length > 10) {
      temp = ([{name:{common:"Too many matches, specify another filter"}}])
    }
    else if (temp.length == 0) {
      temp = ([{name:{common:" "}}])
    }

    console.log(temp.length)

    return(temp.map(
      contri => <CountryEntry id = {contri.name.common} name = {contri.name.common}/>
      ))
  }

  return (
    <div>
      find countries <input onChange = {searchCountry}/>
      <ul>
      {
        tz()
      }
      </ul>
    </div>
  )
}

const CountryEntry = ({name}) => {
  return(<li>{name}</li>)
}

export default App;
