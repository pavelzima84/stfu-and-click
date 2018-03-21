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
          <h2>Clicking for team <strong>{this.props.team}</strong></h2>
          <p>
            Too lazy to click? Let your pals click for you
            <input value={window.location.href} readOnly className="form-control" />
          </p>
        </div>

        <div className="content">
          <button
            onClick={(e) => this.props.click()}
            className="btn btn-primary btn-block"
          >
            CLICK!
          </button>

          <div className="counter row">
            <div className="item col-sm-6">
              <span className="label">Your clicks:</span>
              <span className="value">{this.props.your_clicks}</span>
            </div>

            <div className="item col-sm-6">
              <span className="label">Teams clicks:</span>
              <span className="value">{this.props.team_clicks}</span>
            </div>
          </div>

          <TeamTable teams={this.getTeams()} team={this.props.team} />

          <ChallengeText />
        </div>
      </div>
    )
  }

  getTeams() {
    let currentTeamIndex = this.props.teams.findIndex((item => item.team === this.props.team)),
      min = (currentTeamIndex - 3 > 0) ? currentTeamIndex - 3 : 0,
      max = currentTeamIndex + 3

    return this.props.teams.slice(min, max + 1)
  }
}

TeamBoardMain.propTypes = {
  teams: PropTypes.array.isRequired,
  team: PropTypes.string.isRequired,
  your_clicks: PropTypes.number,
  team_clicks: PropTypes.number,
  click: PropTypes.func.isRequired
}
