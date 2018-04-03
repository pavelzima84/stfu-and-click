import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Loading from '../components/Loading'

const defaultState = {
  isSelecting: false
}

export default class SessionSelection extends React.Component {

  constructor(props) {
    super(props)
    this.state = defaultState
  }

  render() {
    return (
      <div className="sessionSelection">
        <span>Your session is <strong>{this.props.session}</strong></span>
        <div className={classNames({ 'd-none': this.state.isSelecting })}>
          <span onClick={(e) => this.handleChangeClick(e)}>change</span>
        </div>
        <div className={classNames({ 'd-none': !this.state.isSelecting })}>
          <span onClick={(e) => this.handleCancelClick(e)}>cancel</span>  
          { this.props.sessions.length === 0 &&  <Loading /> }
          { this.props.sessions.length > 0 &&
          	<ul className="selection">
          	{this.props.sessions.map((session) => 
              (
                (session !== this.props.session) && 
                <li key={session} className={classNames({ active: session === this.props.session })} onClick={(e) => this.handleSelect(e, session)}>
                  {session}
                </li>
              )
          	)}    		
          	</ul>
          }
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              <span>Enter session:</span>
            <input
              type="text" name="session" ref="session" placeholder="any session..."
              className="form-control"
            />
          </label>

          <button className="btn btn-primary btn-block">CLICK!</button>
          </form>
        </div>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()

    const selectedSession = this.refs.session.value
    if (selectedSession.length > 0) {
      this.setState(defaultState)
      this.refs.session.value = ''
      this.props.select(selectedSession)
    } else {
      this.refs.session.focus()
    }
  }

  handleChangeClick(e) {
    e.preventDefault()

    this.setState({
      isSelecting: true
    })

    this.props.onLoadStart()
    // this.props.loadPromise.then(resolve, reject)
  }

  handleCancelClick(e) {
    e.preventDefault()

    this.setState(defaultState)
  }

  handleSelect(e, session) {
    e.preventDefault()

    this.setState(defaultState)
    this.refs.session.value = ''

    this.props.select(session)
  }
}

SessionSelection.propTypes = {
  session: PropTypes.string.isRequired,
  sessions: PropTypes.array.isRequired,
  onLoadStart: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired
}
