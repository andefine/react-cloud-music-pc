import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '@/store/rootReducer'

import TopHeader from '@/layouts/TopHeader'
import Main from '@/layouts/Main'

import styles from './index.module.scss'

interface PropsFromState {
  size: string
}

type Props = PropsFromState

const App: React.FC<Props> = ({ size }) => (
  <div className={styles[`app--${size}`]}>
    <TopHeader></TopHeader>
    <Main></Main>
  </div>
)

const mapStateToProps = ({ global }: IRootState) => ({
  size: global.size,
})

export default connect(mapStateToProps)(App)
