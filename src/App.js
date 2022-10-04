import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './Hooks/UseEffect';
import UseEffect from "./Hooks/UseEffect"
import StateEffect from './Hooks/StateEffect';
import Home from './Components and Props/Home';
import Profile from './Components and Props/Profile'
import RenderMethod from './ConditionalRendering/RenderMethod';
import ListDemo from './ListAndKeys/ListDemo';
import KeyDemo from './ListAndKeys/KeyDemo';
import FormDemo from './Form/FormDemo';
import HOCDemo from './HOC/HOCDemo';
import LiftingstateupDemo from './LiftingStateup/LiftingstateupDemo';
import Eventhandling from './EventHandling/Eventhandling';
import EventHandl from './EventHandling/EventHandl';


function App() {
  const [data, setData] = useState("Rahul")
  function parentAlert(data){
    alert(data)
  }
  return (
    <div className="App">
      <h1> {data}</h1>
      <button onClick={() => setData("Rupesh")}>Update Data</button>
      <UseEffect />
      <StateEffect />
      <Home text={{ name: 'John' }} data="Home Data" />
      <Profile text={{ name: 'peter' }} data="Profile Data" />
      <RenderMethod />
      <KeyDemo />
      <ListDemo />
      <FormDemo />
      <HOCDemo />
      <LiftingstateupDemo alert={parentAlert}/>
      <Eventhandling/>
      <EventHandl/>
    </div>);
}

export default App;
