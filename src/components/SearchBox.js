import React from 'react';
import CounterButton from '../components/CounterButton';

const SearchBox = ({ searchChange }) => {
    return (
        <div id='top'>
            <h1 className="pa0 ma1">Cat Friends~!</h1>
            <input className='pa2 ba b--green bg-lightest-blue tc'
                type='search'
                placeholder='search cats'
                onChange={searchChange}
            />
            <div className="ml3">
            <CounterButton />
            </div>
        </div>
    );
}

export default SearchBox;