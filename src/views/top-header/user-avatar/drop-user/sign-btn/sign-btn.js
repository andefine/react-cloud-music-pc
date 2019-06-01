import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './sign-btn.scss'

const SignBtn = ({
  active = false,
  onClick
}) => (
  <button
    className={`sign-btn${active ? '--active' : ''}`}
    onClick={onClick}
  >
    {
      active ? (
        <Fragment>
          <i className="sign-btn__icon iconfont icon-jinbi"></i>
          {'签到'}
        </Fragment>
      ) : (
        '已签到'
      )
    }
  </button>
)

SignBtn.propTypes = {
  active: PropTypes.bool
}

export default SignBtn
