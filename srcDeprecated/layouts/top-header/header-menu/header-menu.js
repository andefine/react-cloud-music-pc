import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { maximize, minimize } from '@/store/size/actions'
import './header-menu.scss'

class HeaderMenu extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      menus: [
        {
          icon: 'pifu',
          desc: '皮肤'
        },
        {
          icon: 'xinfeng',
          desc: '通知'
        },
        {
          icon: 'shezhi',
          desc: '设置'
        }
      ]
    }
  }
  
  render () {
    const { size, maximize, minimize } = this.props

    let win
    if (size === 'min') {
      win = <i
        className="header-menu__i iconfont icon-maximize"
        onClick={maximize}
      ></i>
    }
    if (size === 'max') {
      win = <i
        className="header-menu__i iconfont icon-minimize"
        onClick={minimize}
      ></i>
    }
    
    return (
      <Fragment>
        <div
          className={`header-menu ${this.props.className}`}
        >
          {this.state.menus.map((menu, index) => 
            <i
              className={`header-menu__i iconfont icon-${menu.icon}`}
              key={index}
            ></i>
          )}
        </div>
        <div className="header-menu__right">
          {win}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ size }) => ({
  size
})

const mapDispatchToProps = (dispatch) => ({
  maximize: () => dispatch(maximize()),
  minimize: () => dispatch(minimize())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderMenu)
