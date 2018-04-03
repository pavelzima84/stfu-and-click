import { handleActions } from 'redux-actions'

const initialState = {
  status: 'init',
  items: [],
  message: null
}

export default handleActions({
  // SET_SESSION: (state, action) => initialState,

  FETCH_SESSIONS_START: (state, action) => ({
    ...state, status: 'loading', message: null
  }),
  FETCH_SESSIONS_DONE: (state, action) => ({
    ...state, status: 'ready', items: action.payload, message: null
  }),
  FETCH_SESSIONS_ERROR: (state, action) => ({
    ...state, status: 'error', message: action.payload
  })
}, initialState)
