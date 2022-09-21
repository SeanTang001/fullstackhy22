const App = () => {
  console.log('Hello from component')

  const now = new Date()
  const a = 10
  const b = 20


  return (
    <>
      <h1>Grettings</h1>
      <Hello name = "George" age = '10'/>
      <Hello name = "Jimmy"age = {10}/>
      <Hello name = "Sean" age = {10/2}/>
    </>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

export default App
//export default Hello