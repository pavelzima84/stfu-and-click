import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-3'

import TeamTable from '../components/TeamTable'

export default class TeamBoardMain extends React.Component {

	render() {
		return (
		    <div>
		        <h2>Clicking for team <span className="highlight">{this.props.team}</span></h2>
		        <p>
		        	Too lazy to click? Let your pals click for you
		        	<input value={window.location.href} readOnly />
		        </p>

		        <button onClick={(e) => this.props.click()}>CLICK!</button>

		        <div className="counter">
		        	<div className="item">
		        		<span className="label">Your clicks::</span>
		        		<span className="value">{this.props.your_clicks}</span>
		        	</div>

		        	<div className="item">
		        		<span className="label">Teams clicks:</span>
		        		<span className="value">{this.props.team_clicks}</span>
		        	</div>
		        </div>

		        <TeamTable teams={this.getTeams()} team={this.props.team} />
		    </div>
		)
	}

	getTeams() {
		let currentTeamIndex = this.props.teams.findIndex((item => item.team === this.props.team)),
			min = (currentTeamIndex -3 > 0) ? currentTeamIndex -3 : 0,
			max = currentTeamIndex + 3

		return this.props.teams.slice(min, max + 1)
	}
}

TeamBoardMain.propTypes = {
	teams: PropTypes.array.isRequired,
	team: PropTypes.string.isRequired,
	your_clicks: PropTypes.number,
  	team_clicks: PropTypes.number
}
