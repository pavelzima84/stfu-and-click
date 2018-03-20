import {fetchLeaderBoard, sendClick} from '../utils/agent'

export function asycFetchLeaderBoard(dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(leaderBoardFetchStart())

    fetchLeaderBoard()
      .then((response) => {
        dispatch(leaderBoardFetchDone(response.data))
        resolve(response.data)
      })
      .catch((response) => {
        dispatch(leaderBoardFetchError(response))
        reject(response)
      })
  })
}

export function asycClick(dispatch, userSession, team) {
  return new Promise((resolve, reject) => {
    dispatch(teamClickStart(userSession, team))

    sendClick(userSession, team)
      .then((response) => {
        dispatch(teamClickDone(response.data))
        resolve(response.data)
      })
      .catch((response) => {
        dispatch(teamClickError(response))
        reject(response)
      })
  })
}

// fetching
function leaderBoardFetchStart() {
   return { type: 'LEADER_BOARD_FETCH_START'}
}

function leaderBoardFetchDone(items) {
   return { type: 'LEADER_BOARD_FETCH_DONE', items};
}

function leaderBoardFetchError(message) {
   return { type: 'LEADER_BOARD_FETCH_ERROR', message};
}

// click
function teamClickStart(userSession, team) {
   return { type: 'TEAM_CLICK_START', session: userSession, team}
}

function teamClickDone(data) {
   return { type: 'TEAM_CLICK_DONE', data};
}

function teamClickError(message) {
   return { type: 'TEAM_CLICK_ERROR', message};
}
