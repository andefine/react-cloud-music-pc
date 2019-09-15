import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '@/store/rootReducer'
import { IPrivateContent } from '@/store/recommend/types'

import PrivateContentCard from '@/components/PrivateContentCard'

import './index.scss'

interface IPropsFromState {
  privateContents: IPrivateContent[]
}

type IProps = IPropsFromState

const PrivateContent: React.FC<IProps> = ({ privateContents }) => (
  <div className="private-content">
    {privateContents.map(({ copywriter, sPicUrl }, index) => {
      return (
        <PrivateContentCard
          key={index}
          copywriter={copywriter}
          sPicUrl={sPicUrl}
        ></PrivateContentCard>
      )
    })}
  </div>
)

const mapStateToProps = ({ recommend }: IRootState) => ({
  privateContents: recommend.privateContents,
})

export default connect(mapStateToProps)(PrivateContent)
