//tehtävä 1.1

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part = {part1} exercices= {exercises1}/>
      <Content part = {part2} exercices= {exercises2}/>
      <Content part = {part3} exercices= {exercises3}/>
      <Total exercicesAll = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {

return(
  <div> 
    <h1>{props.course}</h1>
  </div>

)
}

const Content = (props) =>{
return(
  <p>
    {props.part} {props.exercices}
  </p>
)
}

const Total = (props) => {
return(
<p>
Number of exercises: {props.exercicesAll}
</p>

)

}

export default App