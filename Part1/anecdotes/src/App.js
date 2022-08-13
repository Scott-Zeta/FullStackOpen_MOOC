import { useState } from 'react';
import './App.css';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  //let point = new Array(anecdotes.length).fill(0);
  
  const array = new Array(anecdotes.length).fill(0)
  const [point,setPoint] = useState(array);
  const [selected, setSelected] = useState(0)
  
  
  const selectRandom = () =>{
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    console.log(selected);
  }

  const vote = () =>{
    const newPoint ={
      ...point,
      [selected]: point[selected] + 1
    }
    setPoint(newPoint);
    console.log(newPoint);
  }

  return (
    <div>
      {anecdotes[selected]}<br></br>
      <>has {point[selected]} votes</><br></br>
      <Button text = "vote" onClick={vote} />
      <Button text = "next anecdote" onClick={selectRandom}/>
    </div>
  )
}
export default App;
