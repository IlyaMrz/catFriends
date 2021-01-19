import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';



function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usersi => setRobots(usersi));
    });
    const onSearchChange = (event) => {setSearchfield(event.target.value)}

    const filteredrobors = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return !robots.length ?
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
export default App;
