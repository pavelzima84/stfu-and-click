/* eslint react/prop-types: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchLeaderBoard, clickTeam, goToTeam } from '../actions/team'
import TeamBoardMain from '../components/TeamBoardMain'

/**
 * This is <Main> part of Page.
 * There are three parts:
 * click button - to add a click
 * counter - to show my and team clicks
 * scoreboard - to show current team + 3 teams before and after
 */
class TeamBoardMainContainer extends React.Component {

  componentDidMount() {
    this.props.select(this.props.session, this.props.team.title)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.session != nextProps.session) {
      this.props.refresh(nextProps.session)
    }
  }

  render() {
    return <TeamBoardMain
      teams={this.props.teams.items}
      team={this.props.team}
      click={team => this.props.click(this.props.session, this.props.team.title)}
      select={team => this.props.select(this.props.session, team)}
      clicks={this.props.team.clicks}
      myClicks={this.props.team.myClicks}
    />
  }
}

const mapStateToProps = (state, props) => {
  // find already created team by title or prepare a new one
  const team = state.teams.items.find((item) => item.title === props.params.name) || {
    id: null,
    title: props.params.name,
    clicks: 0,
    myClicks: 0
  }

  return {
    session: state.user.session,
    team,
    teams: state.teams
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  click: (session, team) => {
      dispatch(clickTeam({ session, team }))
        .then(() => {
          dispatch(fetchLeaderBoard({ session }))
        })
  },
  select: (session, team) => {
    dispatch(fetchLeaderBoard({ session }))
      .then(() => {
        dispatch(goToTeam(team))
      })
  },
  refresh: (session) => {
    dispatch(fetchLeaderBoard({ session }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoardMainContainer)
