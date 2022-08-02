//tehtävä 1.1

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
      <Header course = {course}/>
      <Content part = {part1.name} exercices= {part1.exercises}/>
      <Content part = {part2.name} exercices= {part2.exercises}/>
      <Content part = {part3.name} exercices= {part3.exercises}/>
      <Total exercicesAll = {part1.exercises + part2.exercises + part3.exercises} />
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
    {props.part} {props.exercices},
    
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