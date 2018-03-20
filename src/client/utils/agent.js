import axios from 'axios'

export function fetchLeaderBoard() {
  return axios.get('/api/v1/leaderboard')
}

export function sendClick(userSession, team) {
  return axios.post('/api/v1/click', { session: userSession, team })
}
