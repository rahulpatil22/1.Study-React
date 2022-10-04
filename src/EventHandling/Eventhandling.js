import React, { Component } from 'react'

export default class Eventhandling extends Component {
    testFun()
    {
        alert("testFun")
    }
  render() {
    return (
      <div>
        <h1>Eventhandling</h1>
        <button onClick={()=>this.testFun()}>click Me</button>
      </div>
    )
  }
}
