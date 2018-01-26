import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddNumber from '../actions/AddNumber';

class AddButton extends Component{
    constructor() {
        super();
        this.addHandler = this.addHandler.bind(this);
    }

    addHandler() {
        const number = this.props.number;
        this.props.add(number);
    };

    render(){  
        return(
            <div className = "col s6" >
                <button onClick={this.addHandler} className="btn">Add</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        number: state.changeNumber
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        add: AddNumber,
    }, dispatch)
}
    
export default connect(mapStateToProps, mapDispatchToProps)(AddButton);