import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';
import '../setupTest';
// https://backbencher.dev/blog/empty-shallowwrapper-snapshot-jest-enzyme
import { create } from "react-test-renderer";

const cardd = create(<Card />)


it("expect to render Card component",()=> {
    expect(cardd.toJSON()).toMatchSnapshot()
})

// it("expect to render Card component",()=> {
//     expect(shallow(<Card />)).toMatchSnapshot()
// })
