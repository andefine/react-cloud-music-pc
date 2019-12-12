import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store'
import { WinSize } from '@/store/app/types'

import { MENUS } from './constant'
import styles from './index.module.scss'

interface StateProps {
  winSize: WinSize
}

type Props = StateProps

class Menu extends React.Component<Props> {
  render() {
    const { winSize } = this.props

    return (
      <React.Fragment>
        <div className={styles.left}>
          {MENUS.map((menu, index) => (
            <i
              key={index}
              className={`iconfont icon-${menu.icon} ${styles.icon}`}
            ></i>
          ))}
        </div>
        <div className={styles.right}>
          {winSize === WinSize.Min && (
            <i className={`iconfont icon-maximize ${styles.icon}`}></i>
          )}
          {winSize === WinSize.Max && (
            <i className={`iconfont icon-minimize ${styles.icon}`}></i>
          )}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ app }: RootState) => ({
  winSize: app.winSize,
})

export default connect(mapStateToProps)(Menu)
