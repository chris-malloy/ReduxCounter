import React, {Component} from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from './containers/Button';

// import AddButton from './containers/AddButton';
// import SubtractButton from './containers/SubtractButton';
import NumberContainer from './containers/NumberContainer';

import AddNumber from './actions/AddNumber';
import SubtractNumber from './actions/SubstractNumber';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class App extends Component{
    render(){
        return (
            <div className="App container center">
                <h1>Count with Redux!</h1>
                <div className="main row">
                    <Button title="add" onClick={()=>{this.props.add(this.props.number)}} />
                    <Button title="subtract" onClick={()=>{this.props.subtract(this.props.number)}} />
                    <NumberContainer />
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

function mapStateToProps(state) {
    return {
        number: state.changeNumber
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        add: AddNumber,
        subtract: SubtractNumber
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
