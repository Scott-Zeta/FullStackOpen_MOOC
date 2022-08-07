import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ indicate, count }) => {
  if (indicate == "positive") {
    return (
      <tr>
        <td>{indicate}</td>
        <td>{count} %</td>
      </tr>
      //<>{indicate} {count} %<br></br></>
    )
  } else {
    return (
      <tr>
        <td>{indicate}</td>
        <td>{count}</td>
      </tr>
      //<>{indicate} {count}<br></br></>
    )
  }
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total == 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine indicate="good" count={good} />
          <StatisticLine indicate="neutral" count={neutral} />
          <StatisticLine indicate="bad" count={bad} />
          <StatisticLine indicate="all" count={total} />
          <StatisticLine indicate="average" count={average} />
          <StatisticLine indicate="positive" count={positive} />
        </tbody>
      </table>
    )
  }
}

const ButtonGroup = ({ clickGood, clickNeutral, clickBad }) => {
  return (
    <>
      <Button text="good" onClick={clickGood} />
      <Button text="neutral" onClick={clickNeutral} />
      <Button text="bad" onClick={clickBad} />
    </>
  )
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

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <ButtonGroup clickGood={clickGood} clickNeutral={clickNeutral} clickBad={clickBad} />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
      </div>
    </div>
  )

}

export default App
