import React from 'react'

import './index.scss'

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
  constructor(props: Props) {
    super(props)
    this.state = {
      active: {
        back: true,
        forward: false,
      }
    }
  }
  
  render() {
    const backModifier = this.state.active.back ? '--active' : ''
    const forwardModifier = this.state.active.forward ? '--active' : ''
    
    return (
      <div className={this.props.className ? (`bf ${this.props.className}`) : 'bf'}>
        <div className="bf__back">
          <i className={`bf__back-icon${backModifier} iconfont icon-back`}></i>
        </div>
        <div className="bf__forward">
          <i className={`bf__forward-icon${forwardModifier} iconfont icon-back`}></i>
        </div>
      </div>
    )
  }
}

export default BackForward
