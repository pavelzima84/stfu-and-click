import React from 'react'
import {Route, IndexRoute} from 'react-router';

import PageContainer from './containers/PageContainer'
import LeaderBoardMainContainer from './containers/LeaderBoardMainContainer'
import TeamBoardMainContainer from './containers/TeamBoardMainContainer'
import NotFoundMain from './components/NotFoundMain'

export default (
    <Route component={PageContainer}>
        <Route path="/" component={LeaderBoardMainContainer} />
        <Route path="/:name" component={TeamBoardMainContainer} />
        <Route path="*" component={NotFoundMain} />
    </Route>
)
