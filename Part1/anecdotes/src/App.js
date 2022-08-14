import { useState } from 'react';
import './App.css';


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>)
}

const ShowMost = ({anecdotes, points}) => {
  const max = Math.max(...points);
  const maxVoteIndex = points.indexOf(max);
  console.log(max);
  if (max === 0) {
    return (
    <div>
      <p>No votes for any anecdotes yet!</p>
      </div>
      );
  } else {
    return (
      <div>
        <p>{anecdotes[maxVoteIndex]}</p>
        <p>{points[maxVoteIndex]}</p>
      </div>
    );
  }
}

const Winner = ({anecdotes, allVotes}) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    '0. If it hurts, do it more often.',
    '1. Adding manpower to a late software project makes it later!',
    '2. The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '3. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '4. Premature optimization is the root of all evil.',
    '5. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '6. Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [point, setPoint] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0)


  const selectRandom = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    //console.log(selected);
  }

  const vote = () => {
    // const newPoint = {
    //   ...point,
    //   [selected]: point[selected] + 1
    // }
    const newPoint = [...point]
    newPoint[selected] += 1
    setPoint(newPoint);
    console.log(newPoint);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      <>has {point[selected]} votes</><br></br>
      <Button text="vote" onClick={vote} />
      <Button text="next anecdote" onClick={selectRandom} />
      <h1>Anecdote with the most votes</h1>
      {/* <ShowMost anecdotes={anecdotes} points={point} /> */}
      <Winner anecdotes={anecdotes} allVotes={point} />
    </div>
  )
}
export default App;
