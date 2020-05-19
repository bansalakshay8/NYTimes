import * as actions from '../src/actions/'
import * as types from '../src/actions/ActionTypes'

describe('actions', () => {
  it('should create an action to make a login call', () => {
    const text = {
        email:"akshay@gmail.com",
        password:"akshay@2020"
      };
    const expectedAction = {
        type: types.LOGIN_ACTION,
        payload: text,
      }
    expect(actions.loginAction(text)).toEqual(expectedAction)
  })
})