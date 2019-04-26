import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'

import './discover-tab.scss'

function DiscoverTab ({ tabs, match }) {
  return (
    <div className="discover-tab">
      {
        tabs.map(({ label, path }, index) => {
          return (
            <Route
              key={index}
              path={`${match.url}${path}`}
              children={(props) => {
                const innerMatch = props.match
                return (
                  <Link
                    className={`discover-tab__item${innerMatch ? '--active' : ''}`}
                    to={`${match.url}${path}`}
                  >{label}</Link>
                )
              }}
            >
            </Route>
          )
        })
      }
    </div>
  )
}

export default withRouter(DiscoverTab)
