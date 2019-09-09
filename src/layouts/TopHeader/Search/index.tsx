import React from 'react'

import './index.scss'

interface Props {
  className?: string
}

interface State {
  placeholder: string
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      placeholder: '搜索音乐，视频，歌词，电台'
    }
  }

  render() {
    return (
      <div
        className={ this.props.className ? `search ${this.props.className}` : 'search' }
      >
        <input
          className="search__input"
          type="text"
          placeholder={this.state.placeholder}
        />
        <i className="search__i iconfont icon-search"></i>
      </div>
    )
  }
}

export default Search
