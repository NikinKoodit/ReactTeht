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
      <Header course = {course}/>
      <Content part = {parts[0].name} exercices={parts[0].exercises}/>
      <Content part = {parts[1].name} exercices={parts[1].exercises}/>
      <Content part = {parts[2].name} exercices={parts[2].exercises}/>
      <Total exercicesAll = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
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