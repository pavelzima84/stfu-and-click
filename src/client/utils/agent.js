import axios from 'axios'

export function fetchSessionsPromise(payload) {
  return axios.get('/api/v1/user/sessionList')
}

export function fetchLeaderBoardPromise(payload) {
  return axios.get(`/api/v1/team/leaderboard?session=${payload.session}`)
}

// export function fetchTeamPromise(session, team) {
// 	return axios.get(`/api/v1/team/${team}?session=${session}`)
// }

export function sendClickPromise(payload) {
  return axios.post(`/api/v1/team/${payload.team}/click?session=${payload.session}`)
}
