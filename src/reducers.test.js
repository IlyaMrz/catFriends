import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', ()=>{
    const initStateSearch = {
        searchfield: ''
    }
    it("should return the initial state", ()=>{
        expect(reducers.searchRobots(undefined, {})).toEqual({searchfield: ''})
    })

    it("should handle CHANGE_SEARCHFIELD", ()=>{
        expect(reducers.searchRobots(initStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({searchfield: 'abc'})
    })
})

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  }
  describe('requestRobots reducer', () => {
    it('should return the initial state', () => {
      expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })
  
    it('should handle REQUEST_ROBOTS_PENDING action', () => {
      expect(
        reducers.requestRobots(initialStateRobots, {
          type: REQUEST_ROBOTS_PENDING,
          payload: {isPending: false}
        })
      ).toEqual(
        {
          robots: [],
          isPending: true,
          error: "",
        }
      )
    })
    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
      expect(
        reducers.requestRobots(initialStateRobots, {
          type: REQUEST_ROBOTS_SUCCESS,
          payload: [{
              id: '123',
              name: 'test',
              email: 'j@jmail.com'
            }]
        })
      ).toEqual(
        {
          robots: [{
            id: '123',
            name: 'test',
            email: 'j@jmail.com'
          }],
          isPending: false,
          error: ''
        }
      )
    })
    it('should handle REQUEST_ROBOTS_FAILED action', () => {
      expect(
        reducers.requestRobots(initialStateRobots, {
          type: REQUEST_ROBOTS_FAILED,
          payload: 'NOOO'
        })
      ).toEqual(
        {
            isPending: false,
            robots: [],
            error: 'NOOO'
        }
      )
    })
  })

