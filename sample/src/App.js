import {useState} from 'react'

const Display = ({counter}) =>  <div>{counter}</div>

const Button = ({onClick, text}) =>  <button onClick = {onClick}> {text} </button>

const App = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    console.log('clicked')
    setCounter(counter+1)
  }

  const decrement = () => {
    setCounter(counter-1)
  }

  const reset = () => {
    console.log('clicked')
    setCounter(0)
  }

  // setTimeout(
  //   () => setCounter(counter+1), 100000
  // )

  return (
    <div>
      <Display counter = {counter}/>
      <Button text = "plus" onClick = {increment}/>
      <Button text = "zero" onClick = {reset}/>
      <Button text = "minus" onClick = {decrement}/>
    </div>
  )
}

export default App

// const App = (props) => {
//   const {counter} = props 
//   return (
//     <div>{counter}</div>
//   ) 
// }

// export default App



// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name = "Maya" age = {25+10}/>
//       <Hello name = {name} age = {age}/>
//     </>
//     )
// }

// const Hello = ({name, age}) => {

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }


//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you are born {bornYear()}
//       </p>
//     </div>

//   )

// }

// export default App
// //export default Hello