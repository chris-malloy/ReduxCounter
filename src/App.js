import React from 'react';
import './App.css';

import AddButton from './containers/AddButton';
import SubtractButton from './containers/SubtractButton';
import NumberContainer from './containers/NumberContainer';

// import AddNumber from './actions/AddNumber';
// import SubtractNumber from './actions/SubstractNumber';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

function App(){
    return (
        <div className="App container center">
            <h1>Count with Redux!</h1>
            <div className="main row">
                <AddButton />
                <SubtractButton />
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

export default App;
