import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '@/store/rootReducer'

import TopHeader from '@/layouts/TopHeader'

import './index.scss'

interface PropsFromState {
  size: string
}

type Props = PropsFromState

const App: React.FC<Props> = ({ size }) => (
  <div className={`app--${size}`}>
    <TopHeader></TopHeader>
  </div>
)

const mapStateToProps = ({ global }: IRootState) => ({
  size: global.size,
})

export default connect(
  mapStateToProps
)(App)
