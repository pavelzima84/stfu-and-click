import { createAction } from 'redux-actions'

// import { fetchLeaderBoard } from '../actions/team'
// init
export const setSession = createAction('SET_SESSION', session => session)


// export const setSession = (teamTitle) => {
//   return (dispatch, getState) => {
//     dispatch(setSessionInner)
// 	    .then(() => {
//         const session = getState().user.session
//         dispatch(fetchLeaderBoard(session))
//       })
//   }
// }