import React, { Component } from 'react';

class Counter extends Component {
    styles = { 
        fontSize: 20,
        fontWeight: 'bold'
    } 
    render() { 
        return (
            <div>
                <button style={this.styles} className='btn btn-primary btn-sm m-4'>1month</button>
                <button style={this.styles} className='btn btn-primary btn-sm m-4'>3months</button>
                <button style={this.styles} className='btn btn-primary btn-sm m-4'>6months</button>
                <button style={this.styles} className='btn btn-primary btn-sm m-4'>12months</button>
            </div>
        );
    }
}
 
export default Counter;
