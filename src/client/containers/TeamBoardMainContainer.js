import React from 'react'
import { connect } from 'react-redux'

import { asycFetchLeaderBoard, asycClick } from '../actions/team'
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
    this.props.click(this.props.session, this.props.team)
      .then((teams) => {})
      .catch((reason) => {
        // TODO: is missing
        // debugger
      })
  }

  render() {
    return <TeamBoardMain
      teams={this.props.items} team={this.props.team}
      click={() => this.props.click(this.props.session, this.props.team)}
      your_clicks={this.props.your_clicks} team_clicks={this.props.team_clicks}
    />
  }
}

const mapStateToProps = (state, props) => ({
  session: state.user.session,
  team: props.params.name,
  ...state.teams,
  ...state.team
})

const mapDispatchToProps = (dispatch, props) => ({
  click: (session, team) => asycClick(dispatch, session, team).then(() => {
    asycFetchLeaderBoard(dispatch)
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoardMainContainer)
