const App = () => {
  
  const part = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const excercise = [10,7,14]

  const course =   {
    name: 'Half stack application development',
    parts: [
      {
        name: part[0],
        excercise: excercise[0]
      },{
        name: part[1],
        excercise: excercise[1]
      },{
        name: part[2],
        excercise: excercise[2]
      }
    ]
  }

  return (
    <>      <Header course = {course}/>
    <Content course = {course}/>
      <Total course = {course}/>
    </>
  )

}
const Content = (props) => {
  console.log(props)  
  return(
    <>  
    <Part part = {props.course.parts[0].name} excercise = {props.course.parts[0].excercise}/>
    <Part part = {props.course.parts[1].name} excercise = {props.course.parts[1].excercise}/>
    <Part part = {props.course.parts[2].name} excercise = {props.course.parts[2].excercise}/>
    </>

  )
}


const Part = (props) => (
    <>
    <p>{props.part} {props.excercise}</p>
    </>
    )
   //<p>jello{props.part} {props.excercise}</p>

const Header = (props) => (
      <h1>{props.course.name}</h1>
)

const Total = (props) => (
  <p>Number of excercises {props.course.parts[0].excercise+props.course.parts[1].excercise+props.course.parts[2].excercise}</p>
)


export default App

//<Part excercise = {props.excercise[0]} part = {props.part[0]}/>
//<Part excercise = {props.excercise[1]} part = {props.part[1]}/>
//<Part excercise = {props.excercise[2]} part = {props.part[2]}/>

// <div>
// 
//   <p>
//     {props.part[1]} {props.excercise[1]}
//   </p>
//   <p>
//     {props.part[2]} {props.excercise[2]}
//   </p>
// </div>

// const Content = (props) => {
//   return (
//     <>
//     <Part part = {props.part[0]} excercise = {props.excercise[0]}/>
//     <Part part = {props.part[1]} excercise = {props.excercise[1]}/>
//     <Part part = {props.part[2]} excercise = {props.excercise[2]}/>
//     </>
//     )
// }
