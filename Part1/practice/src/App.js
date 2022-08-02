import './App.css';
import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <>{counter}</>
  )
}

const Button = (props) => {
  const{onClick, text} = props
  console.log(props)
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  console.log(props.history)
  if (props.history.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.history.join(', ')}
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState({ left: 0, right: 0, up: 0, down: 0 })
  const [route, router] = useState([])
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
    router(route.concat("L"))
  }
  const moveRight = () => {
    const newCounter = {
      ...counter,
      left: counter.left - 1,
      right: counter.right + 1
    }
    setCounter(newCounter)
    router(route.concat("R"))
  }
  const moveUp = () => {
    const newCounter = {
      ...counter,
      up: counter.up + 1,
      down: counter.down - 1
    }
    setCounter(newCounter)
    router(route.concat("U"))
  }
  const moveDown = () => {
    const newCounter = {
      ...counter,
      up: counter.up - 1,
      down: counter.down + 1
    }
    setCounter(newCounter)
    router(route.concat("D"))
  }
  const reset = () => {
    const newCounter = {
      up: 0,
      down: 0,
      left: 0,
      right: 0
    }
    setCounter(newCounter)
    router(route.splice())
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
      <History history={route} />
    </div>
  )
}

export default App;
