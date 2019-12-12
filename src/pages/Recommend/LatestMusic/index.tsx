import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store'
import { ILatestMusic } from '@/store/recommend/types'

import './index.scss'

interface IPropsFromState {
  latestMusics: ILatestMusic[]
}

type IProps = IPropsFromState

const LatestMusic: React.FC<IProps> = ({ latestMusics }) => (
  <ul className="latest-music"></ul>
)

const mapStateToProps = ({ recommend }: RootState) => ({
  latestMusics: recommend.latestMusics,
})

export default connect(mapStateToProps)(LatestMusic)
