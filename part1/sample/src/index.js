import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

ReactDOM.createRoot(document.getElementById('root')).render(<App counter = {counter}/>)

//const refresh = () => {
//}    

// setInterval(() => {
//     refresh()
//     counter += 1
// }, 1000)

// refresh()
// counter+=1
// refresh()
// counter+=1
// refresh()
