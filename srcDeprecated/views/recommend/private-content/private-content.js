import React from 'react'
import { connect } from 'react-redux'
import './private-content.scss'
import PrivateContentCard from '@/components/private-content-card/private-content-card'

const PrivateContent = ({ privateContents }) => {
  return (
    <div className="private-content">
      {
        privateContents.map(({ id, copywriter, sPicUrl }) => {
          return (
            <PrivateContentCard
              key={id}
              copywriter={copywriter}
              sPicUrl={sPicUrl}
            ></PrivateContentCard>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({ recommend }) => ({
  privateContents: recommend.privateContents
})

export default connect(
  mapStateToProps
)(PrivateContent)
