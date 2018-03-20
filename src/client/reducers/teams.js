const initialState = {
  state: 'init',
  items: [],
  message: null
}

export default function teams(state = initialState, action) {
  switch (action.type) {
    case 'LEADER_BOARD_FETCH_START':
      return Object.assign({}, state, {
        state: 'loading',
        // items: [],
        message: null
      })
    case 'LEADER_BOARD_FETCH_DONE':
      return Object.assign({}, state, {
        state: 'ready',
        items: action.items,
        message: null
      })
    case 'LEADER_BOARD_FETCH_ERROR':
      return Object.assign({}, state, {
        state: 'error',
        // items: [],
        message: action.message
      })
  }

  return state
}
