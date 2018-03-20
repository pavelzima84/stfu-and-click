import _ from 'underscore'

// all persisted teams - default value
// TODO: should be persisted in a db
const allTeams = [
    {
        // order: 1,
        title: 'a',
        created: 3,
        clicks: _.map(
            _.range(11),
            value => ({
                session: value.toString(),
                created: value
            })
        )
    },
    {
        // order: 2,
        title: 'A',
        created: 2,
        clicks: [{
            session: '1',
            created: 1
        }]
    },
    {
        // order: 3,
        title: 'á',
        created: 1,
        clicks: [{
            session: '2',
            created: 2
        }]
    }
]

export function getLeaderBoard() {
	let teams = _.map(
        allTeams.slice().sort(compareTeams),
        (team, index) => ({
            order: index + 1,
            team: team.title,
            clicks: team.clicks.length
        })
    )

    return teams
}

export function findTeam(title) {
	return _.find(allTeams, t => t.title === title)
}

export function createTeam(teamToCreate) {
    allTeams.push(teamToCreate)
}

export function addClick(session, currentTeam, now) {
	let clickToAdd = {
            session: session,
            created: now
        }

    currentTeam.clicks.push(clickToAdd)

    return clickToAdd
}

// for sorted teams for leaderboard
function compareTeams(a, b) {
    let diff = b.clicks.length - a.clicks.length
    return (diff === 0)
        ? a.created - b.created
        : diff
}
