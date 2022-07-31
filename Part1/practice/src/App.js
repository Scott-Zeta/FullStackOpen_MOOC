import './App.css';
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const time = new Date();
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const add = () => setCounter(counter + 1)
  const minus = () => setCounter(counter - 1)
  const handleClick = () => {
    console.log('clicked')
  }

  console.log('rendering...', counter)

  return (
    <div>
      {counter}
      <button onClick={add}>
        plus
      </button>
      <button onClick={minus}>
        minus
      </button>
      {time.toString()}
    </div>
  )
}

export default App;
