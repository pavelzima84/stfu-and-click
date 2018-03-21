import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import { Link } from 'react-router-3';

export default class Page extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1><Link to="/">stfuandclick.com</Link></h1>
        </header>

        <main className="container">
        {this.props.main || <Loading />}
        </main>

        <footer>
          <span>If you don't like this page, it's&nbsp;<a href="https://applifting.cz" target="_blank">Applifting</a>'s fault</span>
        </footer>
      </div>
    )
  }
}

Page.propTypes = {
  main: PropTypes.object
}
