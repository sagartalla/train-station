import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Provider } from 'react-redux'

import AppLayout from 'layout/AppLayout'

// Routes
import Home, { HOME_PATH } from '../container/Home'
import Dashboard, { DASHBOARD_PATH } from '../container/Dashboard'
import About, { ABOUT_PATH } from '../container/About'

export default class Routes extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <AppLayout>
            <Route exact path ={DASHBOARD_PATH} component={Dashboard} />
            <Route exact path ={HOME_PATH} component={Home} />
            <Route path={ABOUT_PATH} component={About} />
          </AppLayout>
        </Router>
      </Provider>
    )
  }
}
