import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import '../setupTest';

it("expect to render Card component",()=> {
    const mockRobots = [
        {
            id:1,
            name: 'Bob Tob',
            username: 'BobTop',
            email: 'bobtop@hotbob.fuck',
            address: {
                city: 'vermontton'
            }
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})