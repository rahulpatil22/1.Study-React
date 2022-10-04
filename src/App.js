import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './Hooks/UseEffect';
import UseEffect from "./Hooks/UseEffect"
import StateEffect from './Hooks/StateEffect';
import Home from './Components and Props/Home';
import Profile from './Profile'
import RenderMethod from './ConditionalRendering/RenderMethod';
import ListDemo from './ListAndKeys/ListDemo';
import KeyDemo from './ListAndKeys/KeyDemo';
import FormDemo from './Form/FormDemo';
import HOCDemo from './HOC/HOCDemo';


function App() {
  const [data, setData] = useState("Rahul")
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
    </div>);
}

export default App;
