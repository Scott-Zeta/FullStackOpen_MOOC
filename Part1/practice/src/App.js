import './App.css';
import { useState } from 'react'

const Display = ({counter,time}) =>{
  return (
    <div>{counter} {time}</div>
  )
}

const Button = ({onClick,text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const App = () => {
  const [counter, setCounter] = useState(0)
  const time = new Date();
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const add = () => setCounter(counter + 1)
  const minus = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  console.log('rendering...', counter)

  return (
    <div>
      <Display counter = {counter} time = {time.toString()}/>
      <Button text = "Plus" onClick = {add}/>
      <Button text = "Minus" onClick = {minus}/>
      <Button text = "Reset" onClick = {reset}/>
    </div>
  )
}

export default App;
