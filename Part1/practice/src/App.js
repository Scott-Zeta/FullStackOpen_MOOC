import './App.css';
import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <>{counter}</>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [counter, setCounter] = useState({ left: 0, right: 0, up: 0, down: 0 })
  const time = new Date();
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const moveLeft = () => {
    const newCounter = {
      ...counter,
      left: counter.left + 1,
      right: counter.right - 1
    }
    setCounter(newCounter)
  }
  const moveRight = () => {
    const newCounter = {
      ...counter,
      left: counter.left - 1,
      right: counter.right + 1
    }
    setCounter(newCounter)
  }
  const moveUp = () => {
    const newCounter = {
      ...counter,
      up: counter.up + 1,
      down: counter.down - 1
    }
    setCounter(newCounter)
  }
  const moveDown = () => {
    const newCounter = {
      ...counter,
      up: counter.up - 1,
      down: counter.down + 1
    }
    setCounter(newCounter)
  }
  const reset = () => {
    const newCounter = {
      up: 0,
      down: 0,
      left: 0,
      right: 0
    }
    setCounter(newCounter)
  }

  return (
    <div>
      <div>
        <Display counter={counter.up} />
      </div>
      <div>
        <Button text="UP" onClick={moveUp} />
      </div>
      <div>
        <Display counter={counter.left} />
        <Button text="Left" onClick={moveLeft} />
        <Button text="Reset" onClick={reset} />
        <Button text="Right" onClick={moveRight} />
        <Display counter={counter.right} />
      </div>
      <div>
        <Button text="Down" onClick={moveDown} />
      </div>
      <div>
        <Display counter={counter.down} />
      </div>
    </div>
  )
}

export default App;
