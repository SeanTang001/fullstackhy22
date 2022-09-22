import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [votes, setVote] = useState(
    [0,0,0,0,0,0,0]
  )

  const voting = () => {
    const votesCpy = [...votes]
    votesCpy[selected] = votes[selected] + 1
    setVote(votesCpy)

  } 

  const mostVotes = () => {
    let largest = votes.indexOf(Math.max(...votes))
    console.log(largest)
    return (
      <>
      <p>
      {anecdotes[largest]}
      </p>
      <p>has {Math.max(...votes)} votes</p>
      </>
    )

  }

  const [selected, setSelected] = useState(0)

  console.log(votes)

  return (
    <div>
      <b>Anecdote of the day</b>
      <br></br>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]}
      <br></br>
      <Button onClick={voting} text="vote"/>
      <Button onClick={()=>{setSelected(selected+1); if (selected>=6){setSelected(0)}}} text = "next anecdote"/>
      <br></br>
      <b>Anecdote with the most votes</b>
      <p>{mostVotes()}</p>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


export default App