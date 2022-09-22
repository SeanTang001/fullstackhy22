import { useState } from "react"

const Statistics = ({reviews}) => {
  console.log(reviews.good)
  const getTtl = (reviews) => {

    return  (reviews.good + reviews.neutral + reviews.bad)  
  }

  const getAverage = (reviews) => {
    return (reviews.good - reviews.bad)/(getTtl(reviews))
  }

  if (getTtl(reviews) == 0){
    return(
      <>
      <b>Statistics</b>
      <br></br>
      <p>No feedback given</p>
      </>
    )
  }

  return(
    <>
      <b>Statistics</b>
      <br></br>
      <table>
      <StatisticsLine text = 'good' value={reviews.good}/>
      <StatisticsLine text = 'bad' value={reviews.bad}/>
      <StatisticsLine text = 'neutral' value={reviews.neutral}/>
      <StatisticsLine text = 'total' value={getTtl(reviews)}/>
      <StatisticsLine text = 'average' value={getAverage(reviews)}/>
      <StatisticsLine text = 'positive' value={(reviews.good)/getTtl(reviews)}/>
      </table>
    </>
  )


}


const App = () => {
  const [reviews, setReview] = useState(
    {
      good:0,
      neutral:0,
      bad:0
    }
  )


  const setGood = () => {
    setReview({
      ...reviews,
      good : reviews.good + 1
    })
  }

  const setBad = () => {
    setReview({
      ...reviews,
      bad : reviews.bad + 1
    })
  }
  const setNeutral = () => {
    setReview({
      ...reviews,
      neutral : reviews.neutral + 1
    })
  }

  return (
    <div>
      <b>give feedback</b>
      <br></br>
      <Button onClick={setGood} text={"good"}/>
      <Button onClick={setBad} text={"bad"}/>
      <Button onClick={setNeutral} text="neutral"/>
      <br></br>
      <Statistics reviews={reviews}/>
    </div>

  )
}

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Display = ({counter}) =>  <div>{counter}</div>
const Button = ({onClick, text}) =>  <button onClick = {onClick}> {text} </button>

export default App;
