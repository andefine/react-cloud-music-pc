import React from 'react'
import { connect, DispatchProp } from 'react-redux'

import { loadData } from '@/store/recommend/actions'

import './index.scss'

interface IProps {}

type Props = IProps & DispatchProp

class Recommend extends React.Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadData())
  }

  render() {
    return <div className="recommend">Recommend</div>
  }
}

export default connect()(Recommend)
