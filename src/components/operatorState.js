import React from 'react'
// import '../App.css';
import styled from 'styled-components';

const ButtonY = styled.button`
border-radius: 15px;
border: none;
margin: 50px 20px;
padding: 20px 50px;
color: white;
font-size: 36px;
background-color: transparent;
  :hover {
    background-color:#333;
    border 2px solid white;
  }

`


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
        <ButtonY onClick = {this.decrement}>-</ButtonY>
        <ButtonY onClick = {this.increment}>+</ButtonY>
        </div>
      </div>
    )
  };

}

export default OperatorState;