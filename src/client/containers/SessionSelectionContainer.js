/* eslint react/prop-types: 0 */

import React from 'react'
import { connect } from 'react-redux'

import { fetchSessions } from '../actions/sessions'
import { setSession } from '../actions/user'
import Loading from '../components/Loading'
import SessionSelection from '../components/SessionSelection'
import { createSession } from '../utils/session'

class SessionSelectionContainer extends React.Component {

  // componentDidMount() {
    // if (!this.props.session) {
    //   this.props.setSession()
    // }
  // }

  render() {
    return <SessionSelection
      session={this.props.session}
      sessions={this.props.sessions}
      onLoadStart={() => this.props.loadSessions(this.props.session)}
      select={(session) => this.props.setSession(session)} />
  }
}

const mapStateToProps = (state, props) => ({
  session: state.user.session,
  sessions: state.sessions.items
})
// const mapStateToProps = (state, props) => { debugger; return {
//   session: state.user.session,
//   sessions: state.sessions.items
// }}

const mapDispatchToProps = (dispatch, props) => ({
  loadSessions: (session) => {
    dispatch(fetchSessions({ session }))
      // .then(() => {
      //   dispatch(goToTeam(team))
      // })
  },
  setSession: (session) => {
    dispatch(setSession(session))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionSelectionContainer)
