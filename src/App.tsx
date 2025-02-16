import './App.css'
import Button from './Components/Button'
import Container from './Components/Container'
import Greet from './Components/Greet'
import Heading from './Components/Heading'
import Input from './Components/Input'
import Oscar from './Components/Oscar'
import Person from './Components/Person'
import PersonList from './Components/PersonList'
import LoggedIn from './Components/State/LoggedIn'
import { Status } from './Components/Status'
import Users from "./Components/Users"
import User from "./Components/User"

const App=()=> {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }
  const nameList=[
    {
      first:"indra",
      last:"limub",
    },
    {
      first:"samjana",
      last:"rai",
    },
    {
      first:"indra",
      last:"karki",
    },
  ]
  return (
    <>
  {/* <Greet name="indra"  isLoggedIn={false}/>
    <Person name={personName} />
    <PersonList names={nameList}/>
    <Status status='loading'/>
    <Heading>Placeholder text</Heading>
    <p>asdfasd</p>
    <Oscar>
      <Heading>Oscar goes to Indra Limbu</Heading>
    </Oscar> */}
    <Users/>
    {/* <User/> */}
    {/* <Button handleClick={(event,id)=> console.log("clicked", event,id)}></Button> */}
    {/* <Input value='' handleChange={(event) => console.log(event)}/> */}
    {/* <Container styles={{border: "1px solid black",backgroundColor: "gray",color:"white", padding:"1rem"}}/> */}
   {/* <LoggedIn/> */}
    </>
  )
}

export default App
