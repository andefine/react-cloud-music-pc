import React from 'react'

import styles from './index.module.scss'

interface Active {
  back: boolean
  forward: boolean
}

interface Props {
  className?: string
}

interface State {
  active: Active
}

class BackForward extends React.Component<Props, State> {
  static defaultProps = {
    className: '',
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      active: {
        back: true,
        forward: false,
      },
    }
  }

  render() {
    const { className } = this.props
    const backModifier = this.state.active.back ? '--active' : ''
    const forwardModifier = this.state.active.forward ? '--active' : ''

    return (
      <div className={`${className} ${styles.bf}`}>
        <div className={styles.back}>
          <i
            className={`iconfont icon-back ${
              styles[`back-icon${backModifier}`]
            }`}
          ></i>
        </div>
        <div className={styles.forward}>
          <i
            className={`iconfont icon-back ${
              styles[`forward-icon${forwardModifier}`]
            }`}
          ></i>
        </div>
      </div>
    )
  }
}

export default BackForward
