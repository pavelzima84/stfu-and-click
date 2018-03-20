import React from 'react'
import { Link } from 'react-router';

export default class NotFoundMain extends React.Component {

  render() {
    return (
        <div>
          	<h2>404 Page Not Found</h2>
			<Link to="/">Go back to homepage</Link>
        </div>
    )
  }
}
