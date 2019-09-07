import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store'

import './index.scss'

interface PropsFromState {
  size: 'min' | 'max'
}

type Props = PropsFromState

const App: React.FC<Props> = ({ size }) => (
  <div className={`app--${size}`}>app</div>
)

const mapStateToProps = ({ global }: RootState) => ({
  size: global.size,
})

export default connect(
  mapStateToProps
)(App)
