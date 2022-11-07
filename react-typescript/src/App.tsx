
import './App.css';
import { Typeprops } from './Component/Typeprops';
import {Person} from './Component/Person';
import {PersonList} from './Component/PersonList'
import { Advancedprops } from './Component/Advanceprops';
import { Heading } from './Component/Heading';
import { Oscar } from './Component/Oscar';
import { Greet} from './Component/Greet';
import { Button } from './Component/Button';
import {Input} from './Component/Input';
import { Container } from './Component/Container';


function App() {
  const personName ={
    first:'Bruce',
    last:'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last : 'Wayne'
    },
    {
      first: 'Clark Kent',
      last : 'Wayne'
    },
    {
      first: 'Princess',
      last : 'Diana'
    }
  ]


  return (
    <div className="App">
    <Typeprops name='Rahul' massageCount={20} isLoggedIn={false} />
    <Person name={personName}/>
    <PersonList names={nameList}/>
    <Advancedprops status='loading' />
    <Heading>Placeholder text</Heading>
    <Oscar>
      <Heading>Oscar goes to Leaonardo dicaprio!</Heading>
    </Oscar>
    <Greet name='Rupesh' isLoggedIn={false} />
    <Button handleClick={(event,id)=>{
      console.log('Button clicked',event,id)}}/>
      <Input value=''handleChange={event=> console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
    </div>
  );
}

export default App;
