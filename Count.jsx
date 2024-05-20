import React, { Component } from 'react';

class Count extends Component {
    constructor(props){
        super(props);
        this.state=
        {
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.increment} style={{backgroundColor:"aqua", borderRadius:'5px'}}>+</button>
                <button onClick={this.decrement} style={{backgroundColor:"aqua", borderRadius:'5px'}}>-</button>
            </div>
        );
    }
}

export default Count;