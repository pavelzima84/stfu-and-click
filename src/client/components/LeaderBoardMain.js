import React from 'react'
import { Link } from 'react-router';
import PropTypes from 'prop-types'

import TeamTable from '../components/TeamTable'
import TeamAddClickForm from '../components/TeamAddClickForm'

export default class LeaderBoardMain extends React.Component {

	render() {
		return (
		    <div>
		        <p className="slogan">
		        	"It's really simple, you just need to click as fast as you can."
		        	<br />
					<span className="anonymous">- anonymous</span>
				</p>

				<div className="content">
			        <TeamAddClickForm click={this.props.click} />

			        <h2>TOP 10 Clickers</h2>
			    	
			        <TeamTable teams={this.getTeams()} />

			        <p>Want to be top? STFU and click!</p>
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
  	click: PropTypes.func.isRequired
}
