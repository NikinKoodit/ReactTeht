//tehtävä 1.5

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content part = {course.parts[0].name} exercices={course.parts[0].exercises}/>
      <Content part = {course.parts[1].name} exercices={course.parts[1].exercises}/>
      <Content part = {course.parts[2].name} exercices={course.parts[2].exercises}/>
      <Total exercicesAll = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
return(
  <div> 
    <h1>{props.course}</h1>
  </div>

)
}

const Content = (props) =>{
  console.log(props)  
return(
  <p>
    {props.part} {props.exercices}
  </p>
)
}

const Total = (props) => {
  console.log(props)
return(
<p>
Number of exercises: {props.exercicesAll}
</p>

)

}

export default App