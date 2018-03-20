import React from 'react'
import PropTypes from 'prop-types'

export default class TeamAddClickForm extends React.Component {

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} ref="form">
        <label>
          <span>Enter your team name:</span>
          <input name="team" ref="team" />
        </label>

        <button>CLICK!</button>
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault() // do not send the form to process

    let team = this.refs.team.value
    if (team.length > 0) {
      this.props.click(team);
    } else {
      this.refs.team.focus()
    }
  }
}

TeamAddClickForm.propTypes = {
  click: PropTypes.func.isRequired
}
