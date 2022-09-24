import { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryToShow, setCountryToShow] = useState(0)
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
    //console.log(event.target.value)
    setCountry(event.target.value)
    setCountryToShow(1)
  }

  
  const tz = () => {
    //console.log(country)
    let temp = countries.filter(
      (countri) => {
        //console.log(countri.name.common.toLowerCase().includes(country.toLowerCase()))
        return(countri.name.common.toLowerCase().includes(country.toLowerCase()))
      }
    )
    
    if (temp.length > 10) {
      return (<p>Too many matches, specify another filter</p>)
    }
    else if (temp.length == 1 || !countryToShow) {
      return (<p></p>)
    }

    //console.log(temp.length)

    return(temp.map(
      contri => {
        return(
        <>
          <CountryEntry id = {contri.name.common} name = {contri.name.common}/>       
          <button onClick={processCountry} id={contri.name.common} type='button'>show</button>
        </>
      )}
      ))
  }

const processCountry = (event) => {
  console.log(event.target.id)
  setCountry(event.target.id)
  setCountryToShow(0)
}

const individualCountry = () => {
  let tempz = countries.filter(
    (countri) => {
      //console.log(countri.name.common.toLowerCase().includes(country.toLowerCase()))
      return(countri.name.common.toLowerCase() === (country.toLowerCase()))
    }
  )
  let corrCountry = tempz[0]

  if (tempz.length == 1){
    let langs = corrCountry.languages
    let langz = []
    for (var key in langs) {
      langz.push(<p>{langs[key]}</p>)
    }

    console.log("langz")
    console.log(langz)
    return(
      <>
      <h2>{corrCountry.name.common}</h2>
      <p>Capital {corrCountry.capital[0]}</p>
      <p>Area {corrCountry.area}</p>
      <br></br>
      <h1>languages</h1>
        {
          langz
        }
      <img src = {corrCountry.flags.png}/>
      <h1>Weather in Helsinki</h1>
      
      </>
    )
  }
}
  return (
    <div>
      find countries <input onChange = {searchCountry}/>
      <>
      {
        tz()
      }
      {
        individualCountry()
      }
      </>
    </div>
  )
}

const CountryEntry = ({name}) => {
  return(<p>{name}</p>)
}

export default App;
