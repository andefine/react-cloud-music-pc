import React from 'react'

import styles from './index.module.scss'

interface Props {
  className?: string
}

interface State {
  placeholder: string
}

class Search extends React.Component<Props, State> {
  static defaultProps = {
    className: '',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      placeholder: '搜索音乐，视频，歌词，电台',
    }
  }

  render() {
    const { className } = this.props

    return (
      <div className={`${styles.search} ${className}`}>
        <input
          className={styles.input}
          type="text"
          placeholder={this.state.placeholder}
        />
        <i className={`iconfont icon-search ${styles.i}`}></i>
      </div>
    )
  }
}

export default Search
