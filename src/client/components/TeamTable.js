import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class TeamTable extends React.Component {

	render() {
		return (
	        <table className="scoreBoard">
	        	<thead>
	          		{this.renderHeader()}
	          	</thead>
	          	<tbody>
	          		{this.props.teams.map(this.renderRow, this)}
	          	</tbody>
	        </table>
		)
	}

	renderHeader() {
		return (
			<tr>
				<th></th>
				<th>TEAM</th>
				<th>CLICKS</th>
			</tr>
		)
	}

	renderRow(item, index) {
		return (
			<tr key={item.order} className={classNames({active: item.team === this.props.team})}>
				<td>{item.order}</td>
				<td>{item.team}</td>
				<td>{item.clicks}</td>
			</tr>
		)
	}
}

// TeamTable.defaultProps = {
// 	teams: []
// }

TeamTable.propTypes = {
  	teams: PropTypes.array.isRequired
}
