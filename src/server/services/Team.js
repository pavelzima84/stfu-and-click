import _ from 'underscore'

let lastTeamId = 3

// all persisted teams - default value
// TODO: should be persisted in a db
const allTeams = [
  {
    id: 3,
    // order: 1,
    title: 'a',
    created: 3,
    session: '1',
    clicks: _.map(
      _.range(1, 10),
      value => ({
        session: value.toString(),
        created: value
      })
    )
  },
  {
    id: 2,
    // order: 2,
    title: 'A',
    session: '2',
    created: 2,
    clicks: [{
      session: '1',
      created: 1
    }]
  },
  {
    id: 1,
    // order: 3,
    session: '3',
    title: 'á',
    created: 1,
    clicks: [{
      session: '2',
      created: 2
    }]
  }
]

export function getLeaderBoard() {
  // throw new Error('eee')
  // let teams = _.map(
  //   allTeams.slice().sort(compareTeams),
  //   (team, index) => adaptTeam(team, {order: index + 1, session})
  // )

  return allTeams
}

export function findTeamByTitle(session, title) {
  const team = _.find(allTeams, t => t.title === title)

  if (!team) {
    return null
    // throw new Error(`Team '${title}' not found`)
  }

  return team

  // return adaptTeam(team, { session })
}

export function createTeam(teamToCreate) {
  const createdTeam = Object.assign({}, { id: ++lastTeamId}, teamToCreate)

  allTeams.push(createdTeam)

  return createdTeam
}

export function addClick(session, currentTeam, now) {
  let clickToAdd = {
    session,
    created: now
  }

  currentTeam.clicks.push(clickToAdd)

  return clickToAdd
}

export function adaptTeams(allTeams, options = {}) {
  return _.map(
    allTeams.slice().sort(compareTeams),
    (team, index) => adaptTeam(team, { order: index + 1, session: options.session })
  )
}

export function adaptTeam(team, options = {}) {
  let adaptedTeam = {
    id: team.id,
    title: team.title,
    clicks: team.clicks.length,
    created: team.created
  },
    myClicks

  if (options.session) {
    myClicks = _.filter(team.clicks, clickItem => clickItem.session === options.session)
    adaptedTeam.myClicks = myClicks.length
  }

  if (options.order) {
    adaptedTeam.order = options.order
  }

  return adaptedTeam
}

// for sorted teams for leaderboard
function compareTeams(a, b) {
  let diff = b.clicks.length - a.clicks.length
  return (diff === 0)
    ? getLastClicked(b.clicks) - getLastClicked(a.clicks)
    : diff
}

function getLastClicked(team) {
  return _.max(team.clicks, click => click.created).created
}
