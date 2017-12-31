import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from '../../sass/global.styl'

const Dashboard = ({ user }) => (
  <div className={`${styles.element}`}>
    <h1>Dashboard</h1>
    <p>test 123</p>
  </div>
)

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Dashboard)

export const DASHBOARD_PATH = '/'