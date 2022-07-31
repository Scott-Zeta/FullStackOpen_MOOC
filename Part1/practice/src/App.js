import './App.css';
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const time = new Date();
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  
  console.log('rendering...', counter)

  return (
    <div>
      {counter}
      {time.toString()}
    </div>
  )
}

export default App;
