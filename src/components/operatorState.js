import React from 'react'
import '../App.css';

class OperatorState extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      score:0,
      // stop: true
    };
  }

    increment = () => {
      this.setState(prevState => ({
        score: prevState.score +1
      }));
    }

    decrement = () => {
     if(this.state.score === 0){
      alert('Start and End from zero ! thanks');
     } else {
      this.setState(prevState => ({
        score: prevState.score -1
      }));
     }
    }

  render(){
    return(
      <div className="container">
        <h1>Score</h1>
        <h1>{this.state.score}</h1>
        <div className="containerBtn">
        <button onClick = {this.decrement}>-</button>
        <button onClick = {this.increment}>+</button>
        </div>
      </div>
    )
  };

}

export default OperatorState;