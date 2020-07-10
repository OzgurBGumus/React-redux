import React from 'react';

class Counter extends React.Component{
    arttir =()=>{
        this.setState({
          number: this.state.number+1
        });
      }
      azalt = ()=>{
        this.setState({
          number: this.state.number-1
        })
      }
    state ={
        number: 10
    }
    render(){
        return(
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button onClick={this.arttir}>+</button>
                <button onClick={this.azalt}> - </button>
            </div>
        )
    }
}
export default Counter;