import Course from "./components/Course"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          e: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          e: 7,
          id: 2
        },
        {
          name: 'State of a component',
          e: 14,
          id: 3
        },
        {
          name: 'Redux',
          e: 11,
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
          e: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          e: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App