import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import '../setupTest';

let wrapper;
beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchfield: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps } />)
})

it("expect to render App-MainPage component",()=> {
    expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', ()=>{
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 4,
            name: 'Nob',
            email: 'nob@bob.tt'
        }],
        searchfield: '3',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
    expect(wrapper2.instance().filterRobots()).toEqual([])
})