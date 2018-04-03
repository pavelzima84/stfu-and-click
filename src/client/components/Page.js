import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-3';

import SessionSelectionContainer from '../containers/SessionSelectionContainer'


export default class Page extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1><Link to="/">stfuandclick.com</Link></h1>

          <SessionSelectionContainer />
        </header>

        <main className="container">
          {this.props.main}
        </main>

        <footer>
          <span>If you don't like this page, it's&nbsp;<a href="https://applifting.cz" target="_blank">Applifting</a>'s fault</span>
        </footer>
      </div>
    )
  }
}

Page.propTypes = {
  main: PropTypes.object.isRequired
}
