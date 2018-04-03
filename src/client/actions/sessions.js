import { fetchSessionsPromise } from '../utils/agent'
import { createActions } from 'redux-actions'

export const { fetchSessions } = createActions({
  FETCH_SESSIONS: payload => ({ data: payload, promise: fetchSessionsPromise }) // payload: session
})