/* eslint react/prop-types: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { asycFetchLeaderBoard } from '../actions/team'
import LeaderBoardMain from '../components/LeaderBoardMain'

/**
 * This is <Main> part of Page.
 * There are two parts:
 * form to and add a click to a team
 * scoreboard - to show top 10 teams
 */
class LeaderBoardMainContainer extends React.Component {

  componentDidMount() {
    this.props.loadLeaderBoard()
      .then((teams) => {})
      .catch((reason) => {
        // TODO: is missing
        // debugger
      })
  }

  render() {
    return <LeaderBoardMain
      teams={this.props.items}
      click={(team) => this.props.click(this.props.session, team)}
    />
  }
}

const mapStateToProps = (state, props) => ({
  session: state.user.session,
  ...state.teams
})

const mapDispatchToProps = (dispatch, props) => ({
  loadLeaderBoard: () => asycFetchLeaderBoard(dispatch),
  click: (session, team) => {
    dispatch(push(`/${team}`))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardMainContainer)
