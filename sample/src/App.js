const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name = "Maya" age = {25+10}/>
      <Hello name = {name} age = {age}/>
    </>
    )
}

const Hello = ({name, age}) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }


  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you are born {bornYear()}
      </p>
    </div>

  )

}

export default App
//export default Hello