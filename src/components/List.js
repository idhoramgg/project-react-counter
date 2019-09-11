import React from 'react'

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input : ''
    }
    
  }
  handleButton(){
    console.log('searching');
  }
  handleInput = (event) =>{
    this.setState({
      input: event.target.value
    })
  }
  render(){
    return <div><h1>Hello my name is {this.props.name} and im {this.props.age}</h1>
    <form>
      <input type="text" placeholder="Search Something" onChange={this.handleInput}/>
      <button onClick={this.handleButton}> Submit </button>
    </form>
    </div>  
    }
}

export default List