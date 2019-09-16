import React from 'react'

interface IProps {
  text?: string
}

const EmptyPage: React.FC<IProps> = ({ text }) => (
  <div className="empty-page">
    oops ~ empty page <br></br>
    {text}
  </div>
)

export default EmptyPage
