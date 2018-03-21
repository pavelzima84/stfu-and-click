import React from 'react'
import PropTypes from 'prop-types'

export default class TeamAddClickForm extends React.Component {

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} ref="form" className="teamAddClickForm clearfix">
        <label>
          <span>Enter your team name:</span>
          <input type="text" name="team" ref="team" placeholder="Your mom" className="form-control" />
        </label>

        <button className="btn btn-primary btn-block">CLICK!</button>
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
