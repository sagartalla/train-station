import React from 'react'
import Header from 'components/Header'
import styles from '../../stylus/global.styl'

export default ({ children }) => (
  <div style={{ textAlign: 'center' }}>
    {/*<Header />*/}
    {children}
  </div>
)
