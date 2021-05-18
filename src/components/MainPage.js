// separated redux app (app3) for better testing 

import React, { Component} from 'react';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import CardList from './CardList'
// import CardList from '../CardList';
// import { robots } from './robots';


class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase())
        })
    }

    render() {
        const {onSearchChange,isPending} = this.props;

        return isPending ?
            <h1>loading</h1> :
            <div className='tc'>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundry>
                </Scroll>

            </div>


    }
}
export default MainPage;
