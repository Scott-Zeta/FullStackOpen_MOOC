const Course = ({course}) =>{
  console.log(course)
  const header = course.name
  const part = course.parts.map(part => part.name)
  const exercises = course.parts.map(part => part.exercises)
  const total = course.parts.reduce((sum,part) => console.log('what is happening', sum, part),0)
  // console.log(part)
  // console.log(exercises)

  return(
    <div>
    <h1>{header}</h1>
    {course.parts.map(part =>
      <Parts key = {part.id} name = {part.name} exercises = {part.exercises} />)}
      
    <b>total of {course.parts.reduce((sum,part) => sum + part.exercises,0)} exercises</b>
    </div>
  )
}

const Parts = ({name, exercises}) =>{
  return(
    <p>{name} {exercises}</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App