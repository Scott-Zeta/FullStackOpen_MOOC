const Header = ({ courseName }) =>
  <h2>{courseName}</h2>

const Part = ({ part, exercises }) =>
  <p>{part} {exercises}</p>

const Content = ({ parts }) =>
  <div>{parts.map(part =>
    <Part key={part.id} part={part.name} exercises={part.exercises} />)}</div>

const Total = ({ parts }) => {
  const total = parts.reduce((sum, parts) => sum + parts.exercises, 0)

  return (
    <b>total of {total} exercises</b>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <div key={course.id}>
          <Header courseName={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>)}
    </div>)
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Containernize',
      id: 3,
      parts: [
        {
          name: 'Terminal',
          exercises: 6,
          id: 1
        },
        {
          name: 'Docker',
          exercises: 10,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App