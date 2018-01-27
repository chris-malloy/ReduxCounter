import React, { Component } from 'react';

class Button extends Component {
    render(){
        const { onClick, title } = this.props
        return(
            <button className="btn" onClick={onClick}>{title}</button>
        )
    }
}

export default Button;