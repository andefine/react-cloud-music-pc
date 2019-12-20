import React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import Playlist from '@/types/Playlist'
import * as playlistApi from '@/api/playlist'

import Info from './components/Info'
import Tab from './components/Tab'
import Table from './components/Table'

import styles from './index.module.scss'

interface OwnProps {}

type Props = OwnProps & RouteComponentProps<{ id: string }>

interface State {
  playlist: Partial<Playlist>
}

class Detail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      playlist: {},
    }
  }

  async componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    const numId = Number(id)
    if (!numId) {
      return console.error('无法识别的歌单id')
    }

    const { playlist } = await playlistApi.getPlaylist(numId)
    this.setState({ playlist })
  }

  render() {
    const { location } = this.props
    const { playlist } = this.state
    const { pathname, search } = location
    const tab = new URLSearchParams(search).get('t') || ''
    const tabProps = {
      tab,
      pathname,
    }

    return Object.keys(playlist).length === 0 ? (
      <div className="">正在获取歌单详情...</div>
    ) : (
      <div className={styles.root}>
        <Info playlist={playlist as Playlist}></Info>
        <Tab {...tabProps}></Tab>
        {tab === '' && <Table tracks={(playlist as Playlist).tracks}></Table>}
      </div>
    )
  }
}

export default withRouter(Detail)
