import React, { Component } from 'react';

import { connect } from 'react-redux';

class NumberContainer extends Component {
    render(){
        return(
            <div id="number" className="numberBox">{this.props.number}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        number: state.changeNumber
    }
}

export default connect(mapStateToProps)(NumberContainer);