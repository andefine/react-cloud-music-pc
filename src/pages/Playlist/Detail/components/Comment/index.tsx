import React from 'react'

interface OwnProps {
  id: number
}

type Props = OwnProps

class Comment extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.id !== prevProps.id) {
      console.log('componentDidUpdate', this.props.id, prevProps.id)
    }
  }

  render() {
    return <div className="">歌单评论</div>
  }
}

export default Comment
