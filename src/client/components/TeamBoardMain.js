import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-3'

import TeamTable from '../components/TeamTable'
import ChallengeText from '../components/ChallengeText'

export default class TeamBoardMain extends React.Component {

  render() {
    return (
      <div>
        <div className="teamHeading">
          <h2>Clicking for team <strong>{this.props.team.title}</strong></h2>
          <p>
            Too lazy to click? Let your pals click for you
            <input value={window.location.href} readOnly className="form-control" />
          </p>
        </div>

        <div className="content">
          <button
            onClick={(e) => this.props.click(this.props.team)}
            className="btn btn-primary btn-block"
          >
            CLICK!
          </button>

          <div className="counter row">
            <div className="item col-sm-6">
              <span className="label">Your clicks:</span>
              <span className="value">{this.props.team.myClicks}</span>
            </div>

            <div className="item col-sm-6">
              <span className="label">Teams clicks:</span>
              <span className="value">{this.props.team.clicks}</span>
            </div>
          </div>

          <TeamTable teams={this.getTeams()} team={this.props.team} select={(team) => this.props.select(team)} />

          <ChallengeText />
        </div>
      </div>
    )
  }

  getTeams() {
    const currentTeamIndex = this.props.teams.findIndex((item => item.title === this.props.team.title))
    let startIndex = (currentTeamIndex - 3 > 0) ? currentTeamIndex - 3 : 0,
      endIndex

    if (currentTeamIndex === -1) {
      startIndex = 0,
      endIndex = this.props.teams.length - 1
    } else {
      startIndex = (currentTeamIndex - 3 > 0) ? currentTeamIndex - 3 : 0,
      endIndex = currentTeamIndex + 3 
    }

    return this.props.teams.slice(startIndex, endIndex + 1)
  }
}

TeamBoardMain.propTypes = {
  teams: PropTypes.array.isRequired,
  team: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired
}
