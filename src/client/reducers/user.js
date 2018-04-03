import { handleActions } from 'redux-actions'

import { createSession } from '../utils/session'

const initialState = {
  session: null
}

export default handleActions({
  SET_SESSION: (state, action) => ({
    ...state, session: action.payload
  })
}, initialState)
