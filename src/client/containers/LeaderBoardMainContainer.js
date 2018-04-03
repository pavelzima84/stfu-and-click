/* eslint react/prop-types: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchLeaderBoard, clickTeam, goToTeam } from '../actions/team'
import LeaderBoardMain from '../components/LeaderBoardMain'

/**
 * This is <Main> part of Page.
 * There are two parts:
 * form to and add a click to a team
 * scoreboard - to show top 10 teams
 */
class LeaderBoardMainContainer extends React.Component {

  componentDidMount() {
    this.props.loadLeaderBoard(this.props.session)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.session != nextProps.session) {
      this.props.loadLeaderBoard(nextProps.session)
    }
  }

  render() {
    return <LeaderBoardMain
      teams={this.props.items}
      click={(team) => this.props.click(this.props.session, team)}
      select={(team) => this.props.select(team)}
    />
  }
}

const mapStateToProps = (state, props) => ({
  session: state.user.session,
  ...state.teams
})

const mapDispatchToProps = (dispatch, props) => ({
  loadLeaderBoard: (session) => dispatch(fetchLeaderBoard({ session })),
  click: (session, team) => {
    dispatch(clickTeam({ session, team }))
      .then(() => {
        dispatch(goToTeam(team))
      })
      // .catch((response) => {
      //  TODO: is missing
      // })
  },
  select: (team) => {
    dispatch(goToTeam(team))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardMainContainer)
