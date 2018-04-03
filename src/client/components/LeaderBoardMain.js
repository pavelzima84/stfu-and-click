import React from 'react'
import { Link } from 'react-router-3';
import PropTypes from 'prop-types'

import TeamTable from '../components/TeamTable'
import ChallengeText from '../components/ChallengeText'
import TeamAddClickForm from '../components/TeamAddClickForm'

export default class LeaderBoardMain extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <p className="slogan">
            "It's really simple, you just need to click as fast as you can."
            <br />
            <span className="anonymous">- anonymous</span>
          </p>
        </div>

        <div className="content">
          <TeamAddClickForm click={(team) => this.props.click(team)} />

          <div className="ribbonWrapper">
            <div className="ribbon">
              <div className="ribbon-content">
                <h2>TOP 10 Clickers</h2>
              </div>
            </div>
          </div>

          <TeamTable teams={this.getTeams()} select={(team) => this.props.select(team)}/>

          <ChallengeText />
        </div>
      </div>
    )
  }

  getTeams() {
    return this.props.teams.slice(0, 10)
  }
}

LeaderBoardMain.propTypes = {
  teams: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired
}
