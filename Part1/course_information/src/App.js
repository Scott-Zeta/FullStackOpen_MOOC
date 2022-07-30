const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.num}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part ={props.part1} num = {props.num1}/>
      <Part part ={props.part2} num = {props.num2}/>
      <Part part ={props.part3} num = {props.num3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} num1={part1.exercises} part2={part2.name} num2={part2.exercises} part3={part3.name} num3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App;
