import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () =>{
    setGood(good + 1);
    console.log(good);
  }

  const clickNeutral = () =>{
    setNeutral(neutral + 1);
    console.log(neutral);
  }

  const clickBad = () =>{
    setBad(bad + 1);
    console.log(bad);
  }

  return (
    <div>
      <div>
      <h1>give feedback</h1>
      <Button text = "good" onClick ={clickGood} />
      <Button text = "neutral" onClick ={clickNeutral} />
      <Button text = "bad" onClick ={clickBad} />
      </div>
      <div>
        <h1>statistics</h1>
        <p>good {good} <br></br>
        neutral {neutral} <br></br>
        bad {bad}</p>
      </div>
    </div>
  )
}

export default App
