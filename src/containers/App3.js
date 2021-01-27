//REDUX

import React, { Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';
import {requestRobots, setSearchField} from '../actions.js';


const mapStateToProps = state =>{ 
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.searchRobots.isPending,
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
    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        const {searchfield,onSearchChange,robots,isPending} = this.props;
        const filteredrobors = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return isPending ?
            <h1>loading</h1> :
            <div className='tc'>
                <h1>Cat Friends~!</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredrobors} />
                    </ErrorBoundry>
                </Scroll>

            </div>


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
