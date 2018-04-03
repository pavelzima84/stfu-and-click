import { fetchLeaderBoardPromise, sendClickPromise } from '../utils/agent'
import { createActions } from 'redux-actions'
import { push } from 'react-router-redux'

export const { fetchLeaderBoard, clickTeam } = createActions({
  FETCH_LEADER_BOARD: payload => ({ data: payload, promise: fetchLeaderBoardPromise }), // payload: session
  CLICK_TEAM: payload => ({ data: payload, promise: sendClickPromise }) // payload: session, team
})

export const goToTeam = (teamTitle) => {
  return (dispatch, getState) => {
    dispatch(push(`/${teamTitle}`))
  }
}
