import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-3'

export default class TeamTable extends React.Component {

  render() {
    return (
      <table className="scoreBoard table">
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
    const isActive = this.props.team && this.props.team.id === item.id

    return (
      <tr key={item.id} className={classNames({ active: isActive })} onClick={() => this.props.select(item.title)}>
        <td>{item.order}</td>
        <td>{item.title}</td>
        <td>{item.clicks}</td>
      </tr>
    )
  }
}

TeamTable.propTypes = {
  teams: PropTypes.array.isRequired,
  team: PropTypes.object,
  select: PropTypes.func.isRequired
}
