import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SubtractNumber from '../actions/SubstractNumber';

class AddButton extends Component {
    constructor() {
        super();
        this.subtractHandler = this.subtractHandler.bind(this);
    }

    subtractHandler() {
        const number = this.props.number;
        this.props.subtract(number);
    };

    render() {
        return (
            <div className="col s6" >
                <button onClick={this.subtractHandler} className="btn">Subtract</button>
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
        subtract: SubtractNumber,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);