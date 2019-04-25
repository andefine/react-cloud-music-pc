import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'

import './discover-tab.scss'

function DiscoverTab ({ tabs, match }) {
  // handleSwitchTab = (index, path) => {
  //   let pathname = ''
  //   if (index === 0) {
  //     pathname = '/'
  //   } else {
  //     pathname = `/${path}`
  //   }

  //   // 如果目标路径和当前路径相同，无需跳转
  //   if (pathname === this.props.location.pathname) {
  //     return
  //   }
    
  //   this.props.history.push(pathname)
  // }
  
  // render () {
  // }

  const outMatch = match
  return (
    <div className="discover-tab">
      {
        tabs.map(({ label, path }, index) => {
          // let active = false
          // if (index === 0 && this.props.location.pathname === '/') {
          //   active = true
          // }
          // if (index !== 0 && this.props.location.pathname.includes(path)) {
          //   active = true
          // }
          return (
            <Route
              key={index}
              path={`${outMatch.url}${path}`}
              children={({ match }) => (
                <Link
                  className={`discover-tab__item${match ? '--active' : ''}`}
                  to={`${outMatch.url}${path}`}
                >
                  {/* <div
                    className={`discover-tab__item${match ? '--active' : ''}`}
                    // onClick={() => {this.handleSwitchTab(index, path)}}
                  >{label}</div> */}
                  {label}
                </Link>
              )}
            >
            </Route>
          )
        })
      }
    </div>
  )
}

export default withRouter(DiscoverTab)
