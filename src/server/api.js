import _ from 'underscore'

import * as TeamService from './services/Team'

export function initApiRouters(app) {
  // log into console all api calls only
  app.all('/api/*', (req, res, next) => {
    console.log(`${req.method}  ${req.path} ${JSON.stringify(req.body)}`)
    next()
  })

  app.get('/api/v1/user/sessionList', (req, res) => {
    const teams = TeamService.getLeaderBoard(),
      sessions = _.flatten(_.map(teams, team => _.pluck(team.clicks, 'session'))),
      uniqueSessions = Array.from(new Set(sessions))

    res.json(uniqueSessions)
  })

  app.get('/api/v1/team/leaderboard', (req, res) => {
    const session = req.query.session,
      teams = TeamService.getLeaderBoard(session)

    res.json(TeamService.adaptTeams(teams, { session }))
  })




  // app.get('/api/v1/team/:title', (req, res, next) => {
  //   if (req.params.title === 'leaderboard') {
  //     next()
  //   } else {
  //     res.json(TeamService.getTeam(req.query.session, req.params.title))
  //   }
  // })

  app.post('/api/v1/team/:title/click', (req, res) => {
    let now = new Date().getTime(),
      title = req.params.title,
      session = req.query.session,
      currentTeam,
      myClicks,
      invalidParams

    // validate request params
    invalidParams = validateAddClick(session, title)
    if (!_.isEmpty(invalidParams)) {
      res.status(500).send({
        message: 'Invalid params',
        invalidParams
      })
    }

    // add clict
    currentTeam = getOrCreateTeam(session, title, now)
    TeamService.addClick(session, currentTeam, now)

    // response preparing
    myClicks = _.filter(currentTeam.clicks, clickItem => clickItem.session === session)

    res.json({
      myClicks: myClicks.length,
      teamClicks: currentTeam.clicks.length
    })
  })
}

function validateAddClick(session, title) {
  let invalidParams = {}
  if (typeof session !== 'string' || session.length === 0) {
    invalidParams.session = 'Empty or missing `session` param!'
  }

  if (typeof title !== 'string' || title.length === 0) {
    invalidParams.title = 'Empty or missing `session` param!'
  }

  return invalidParams
}

function getOrCreateTeam(session, title, now) {
  // find already created team by title
  let currentTeam = TeamService.findTeamByTitle(session, title),
    teamToCreate,
    createdTeamId

  // create new one team in the case of missing
  if (!currentTeam) {
    teamToCreate = {
      title,
      created: now,
      clicks: [],
      session
    }

    currentTeam = TeamService.createTeam(teamToCreate)
  }

  return currentTeam
}
