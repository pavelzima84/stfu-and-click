import { handleActions } from 'redux-actions'

const initialState = {
  status: 'init',
  error: null
}

export default handleActions({
  // SET_SESSION: (state, action) => initialState,

  CLICK_TEAM_START: (state, action) => ({
    ...state, status: 'start', error: null
  }),
  CLICK_TEAM_DONE: (state, action) => ({
    ...state, status: 'done', ...action.payload, error: null
  }),
  CLICK_TEAM_ERROR: (state, action) => ({
    ...state, status: 'error', error: action.payload
  }),
}, initialState)
