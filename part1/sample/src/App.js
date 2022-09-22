import {useState} from 'react'

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the button
      </div>
    )
  }
  return (
    <div>
      button press history : {allClicks.join(' ')}
    </div>
  )

}


const Display = ({counter}) =>  <div>{counter}</div>

const Button = ({onClick, text}) =>  <button onClick = {onClick}> {text} </button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  // const decrement = () => {
  //   setCounter(counter-1)
  // }

  // const reset = () => {
  //   console.log('clicked')
  //   setCounter(0)
  // }

  // setTimeout(
  //   () => setCounter(counter+1), 100000
  // )

  return (
    <div>
      <Display counter = {left}/>
      <Button text = "left" onClick = {handleLeftClick}/>
      <Display counter = {right}/>
      <Button text = "right" onClick = {handleRightClick}/>
      <History allClicks={allClicks}/>
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