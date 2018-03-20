import _ from 'underscore'

import * as TeamService from './services/Team'

export function initApiRouters(app) {
  // log into console all api calls only
  app.all('/api/*', (req, res, next) => {
    console.log(`${req.method}  ${req.path} ${JSON.stringify(req.body)}`)
    next()
  })

  app.get('/api/v1/leaderboard', (req, res) => {
    res.json(TeamService.getLeaderBoard())
  })

  app.post('/api/v1/click', (req, res) => {
    let now = new Date().getTime(),
      title = req.body.team,
      session = req.body.session,
      currentTeam,
      yourClicks,
      invalidParams

    // validate request params
    invalidParams = validateClick(session, title)
    if (!_.isEmpty(invalidParams)) {
      res.status(500).send({
        message: 'Invalid params',
        invalidParams
      })
    }

    // add clict
    currentTeam = getOrCreateTeam(title, now)
    TeamService.addClick(session, currentTeam, now)

    // response preparing
    yourClicks = _.filter(currentTeam.clicks, clickItem => clickItem.session === session)

    res.json({
      your_clicks: yourClicks.length,
      team_clicks: currentTeam.clicks.length
    })
  })
}

function validateClick(session, title) {
  let invalidParams = {}
  if (typeof session !== 'string' || session.length === 0) {
    invalidParams.session = 'Empty or missing `session` param!'
  }

  if (typeof title !== 'string' || title.length === 0) {
    invalidParams.title = 'Empty or missing `session` param!'
  }

  return invalidParams
}

function getOrCreateTeam(title, now) {
  // find already created team by title
  let currentTeam = TeamService.findTeam(title),
    teamToCreate

  // create new one team in the case of missing
  if (!currentTeam) {
    teamToCreate = {
      title,
      created: now,
      clicks: []
    }

    TeamService.createTeam(teamToCreate)

    currentTeam = teamToCreate
  }

  return currentTeam
}
