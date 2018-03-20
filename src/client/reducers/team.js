const initialState = {
	state: 'init',
  	your_clicks: null,
	team_clicks: null,
	error: null
}

export default function team(state = initialState, action) {
    switch (action.type) {
    	case 'TEAM_CLICK_START':
        	return Object.assign({}, state, {
	              state: 'start',
	              // your_clicks: [],
	              // team_clicks: [],
	              message: null
	          })
        case 'TEAM_CLICK_DONE':
        	return Object.assign({}, state, {
	              state: 'done',
	              ...action.data,
	              message: null
	          })
       	case 'TEAM_CLICK_ERROR':
	        return Object.assign({}, state, {
	            state: 'error',
	            // your_clicks: [],
	            // team_clicks: [],
	            error: action.message
	        })
    }

    return state
}
