import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store/rootReducer'
import { WinSize } from '@/store/app/types'

import TopHeader from '@/layouts/TopHeader'
import Main from '@/layouts/Main'
import LoginMoal from './components/LoginMoal'

import styles from './index.module.scss'

interface PropsFromState {
  winSize: WinSize
}

type Props = PropsFromState

const App: React.FC<Props> = ({ winSize }) => (
  <div className={styles[`app--${winSize.toLocaleLowerCase()}`]}>
    <TopHeader></TopHeader>
    <Main></Main>

    <LoginMoal></LoginMoal>
  </div>
)

const mapStateToProps = ({ app }: RootState) => ({
  winSize: app.winSize,
})

export default connect(mapStateToProps)(App)
