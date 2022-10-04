import React from 'react'
import HomeChild from './HomeChild'

export default class Home extends React.Component{
    constructor()
    {

        super()
        console.warn("constructor")
        this.state={
            name:'Jorden'
        }
        this.state={
            count:0
        }
        this.state={
            show:true
        }
    }
    
 componentDidMount()
 {
    console.warn("called life cycle")
 }
 componentDidUpdate(){
   console.warn("componentDidUpdate")
}
shouldComponentUpdate()
{
    console.warn("shouldComponentupdate",this.state.count);
if(this.state.count>5 && this.state.count<10)
{
    return true;
}

}
 updateState()
    {
        this.setState({
        name:'Bruce'
         } )
    }
    render()
    {
        console.warn("render")

        return(
            <div>
            <h1>Home Component</h1>
            <h2>{this.props.data}</h2>
            <h2>{this.props.text.name}</h2>
            <h3>Hello {this.state.name}</h3>
            <button onClick={()=>{this.updateState()}}>Update Name</button>
            <h4>componentDidMount{this.state.name}</h4>
            <button onClick={()=>{this.setState({name:"joe"})}}>Update Name</button>
            <h5>componentDidUpdate</h5>
            <button onClick={()=>{this.setState({name:"Trump"})}}>Update Name</button>
            <h6> Should Component Update{this.state.count}</h6>
           <button onClick={()=>{this.setState({count:this.state.count+1})}}>update counter</button>
           <div>
           {
            this.state.show ? <HomeChild />:<h1>Child Component removed</h1>
           }
           <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
            </div>
            </div>
        )
    }
}
