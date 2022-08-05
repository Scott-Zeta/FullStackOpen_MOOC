import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ indicate, count }) => {
  if (indicate == "positive") {
    return (<>{indicate} {count} %<br></br></>)
  } else {
    return (
      <>{indicate} {count}<br></br></>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad;
  let average = 0;
  let positive = 0;
  if (total) {
    average = (good - bad) / total;
    positive = good / total * 100;
  }
  const clickGood = () => {
    setGood(good + 1);
    console.log(good);
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  }

  const clickBad = () => {
    setBad(bad + 1);
    console.log(bad);
  }

  if (total == 0) {
    return (
      <div>
        <div>
          <h1>give feedback</h1>
          <Button text="good" onClick={clickGood} />
          <Button text="neutral" onClick={clickNeutral} />
          <Button text="bad" onClick={clickBad} />
        </div>
        <div>
          <h1>statistics</h1>
          <p>
            No feedback given
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <h1>give feedback</h1>
          <Button text="good" onClick={clickGood} />
          <Button text="neutral" onClick={clickNeutral} />
          <Button text="bad" onClick={clickBad} />
        </div>
        <div>
          <h1>statistics</h1>
          <p>
            <Statistics indicate="good" count={good} />
            <Statistics indicate="neutral" count={neutral} />
            <Statistics indicate="bad" count={bad} />
            <Statistics indicate="all" count={total} />
            <Statistics indicate="average" count={average} />
            <Statistics indicate="positive" count={positive} />
          </p>
        </div>
      </div>
    )
  }
}

export default App
