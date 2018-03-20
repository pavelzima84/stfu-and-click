import { createSession } from '../utils/session'

const initialState = {
  session: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'INIT_SESSION':
      if (state.session) {
        throw new Error('Init session was called more times!')
      }

      return Object.assign({}, state, { session: createSession() })
  }

  return state
}
