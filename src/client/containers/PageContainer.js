import React from 'react'
import { connect } from 'react-redux'

import { initSession } from '../actions/user'
import Loading from '../components/Loading'
import Page from '../components/Page'

/**
 * This contains the whole Page. There are three parts - <header>, <main>, <footer>.
 * <header> and <footer> parts are for all pages the same.
 * <main> part is always specified by the actual route.
 *
 * At first there is need to prepare session - this is a loading phase.
 * Just then the page is rendered.
 *
 * @prop {React.Component} children - <Main> part by the actual Route. 
 */
class PageContainer extends React.Component {

  componentDidMount() {
    if (!this.props.session) {
      this.props.initSession()
    }
  }

  render() {
    if (!this.props.session) {
      return <Loading />
    }

    {/* render the <main> by the actual Route */}
    return <Page main={this.props.children} />
  }
}

const mapStateToProps = (state, props) => {
  return {
    session: state.user.session
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    initSession: () => {
      dispatch(initSession())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
