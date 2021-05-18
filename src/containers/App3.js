//REDUX
//app component moved to MainPage component for better testing

import React, { Component} from 'react';
import { connect } from 'react-redux';
// import { robots } from './robots';
import {requestRobots, setSearchField} from '../actions.js';
import MainPage from '../components/MainPage';


const mapStateToProps = state =>{ 
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component {
    render() {
        return <MainPage { ...this.props }/>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
