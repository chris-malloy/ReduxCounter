import React, { Component } from 'react';
import './App.css';

import AddNumber from './actions/AddNumber';
import SubtractNumber from './actions/SubstractNumber';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class App extends Component {
    constructor(){
        super();
        this.number = 0;
        this.addHandler = this.addHandler.bind(this);
        this.subtractHandler = this.subtractHandler.bind(this);
    }

    addHandler(){
        const number = this.props.number
        this.props.add(number);
    };
    subtractHandler(){
        const number = this.props.number
        this.props.subtract(number);
    };
    render() {
        return (
            <div className="App container center">
                <h1>Count with Redux!</h1>
                <div className="main row">
                    <div className="col s6">
                        <button onClick={this.addHandler} className="btn">Add</button>
                    </div>
                    <div className="col s6">
                        <button onClick={this.subtractHandler} className="btn">Subtract</button>
                    </div>
                    <div id="number" className="numberBox">{this.props.number}</div>
                </div>
                <p>
                    This is a simple app that demonstrate redux functionality inside of react.
                    The two buttons above have onClick functions that increment and decrement the number, respectively.
                    The is accomplished by creating two actions which perform the appropriate function, pass the new state
                    to the reducers, who then hand that state value to the container, this updating the state of the app.
                    Try it out for yourself!
                </p>
            </div>
        );
    }
}

function mapStateToProps(state){
return {
    number: state.changeNumber
}
}

function mapDispatchToProps(dispatch){
return bindActionCreators({
    add: AddNumber,
    subtract: SubtractNumber
},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
