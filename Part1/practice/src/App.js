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

  console.log('rendering...', counter)

  return (
    <div>
      {counter}
      <button onClick={add}>
        Plus
      </button>
      <button onClick={minus}>
        Minus
      </button>
      <button onClick={() => setCounter(0)}>
        Reset
      </button>
      {time.toString()}
    </div>
  )
}

export default App;
