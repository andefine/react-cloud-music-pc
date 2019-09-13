import React from 'react'
import { RouteComponentProps, Route, Link, withRouter } from 'react-router-dom'

import { ITab } from '@/pages/Discover'

import './index.scss'

interface IOwnProps {
  tabs: ITab[]
}

type Props = IOwnProps & RouteComponentProps

const DiscoverTab: React.FC<Props> = ({ tabs, match }) => (
  <div className="discover-tab">
    {tabs.map((item, index) => {
      const { label, path } = item
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
        ></Route>
      )
    })}
  </div>
)

export default withRouter(DiscoverTab)
