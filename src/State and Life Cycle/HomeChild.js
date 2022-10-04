import React from 'react'

export default class HomeChild extends React.Component {
    componentWillUnmount()
    {
        alert("component will unmount called")
    }
  render() {
    return (
      <div className="Home">
      <h1>HomeChild</h1>
        
      </div>
    )
  }
}
