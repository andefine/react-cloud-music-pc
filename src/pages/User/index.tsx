import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import { RootState } from '@/store'
import * as userApi from '@/api/user'
import { UserDetail, UserProfile } from '@/types/User'
import { Playlist } from '@/types/Playlist'

import Info from './components/Info'
import UserPl from './components/UserPl'

import styles from './index.module.scss'

const mapStateToProps = ({ account }: RootState) => ({
  accountProfile: account.profile,
})

type StateProps = ReturnType<typeof mapStateToProps>

interface OwnProps {}

type Props = OwnProps & RouteComponentProps<{ id: string }> & StateProps

interface State {
  profile: Partial<UserProfile>
  detail: Partial<UserDetail>
  createdPlaylists: Playlist[]
  subscribedPlaylists: Playlist[]
}

class User extends React.Component<Props, State> {
  id: number

  constructor(props: Props) {
    super(props)

    this.id = -1
    this.state = {
      profile: {},
      detail: {},
      createdPlaylists: [],
      subscribedPlaylists: [],
    }
  }

  componentDidMount() {
    this.id = Number(this.props.match.params.id) || -1
    this.initData()
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.initData()
    }
  }

  async initData() {
    await Promise.all([this.getUser(), this.appendPlaylists()])
  }

  async getUser() {
    const { profile, ...detail } = await userApi.getUserDetail(this.id)
    this.setState({ profile, detail })
  }

  async appendPlaylists() {
    const { playlist: playlists } = await userApi.getUserPlaylists({
      uid: this.id,
      limit: 1000,
    })

    const acc = playlists.reduce<{ c: Playlist[]; s: Playlist[] }>(
      (pre, item) => {
        item.creator.userId === this.id ? pre.c.push(item) : pre.s.push(item)
        return pre
      },
      { c: [], s: [] },
    )
    this.setState({ createdPlaylists: acc.c, subscribedPlaylists: acc.s })
  }

  render() {
    const { accountProfile } = this.props
    const {
      profile,
      detail,
      createdPlaylists,
      subscribedPlaylists,
    } = this.state
    const isSelf = profile.userId === accountProfile.userId

    return (
      <div className={styles.root}>
        {Object.keys(profile).length <= 0 ? (
          <div>加载中...</div>
        ) : (
          <React.Fragment>
            <Info
              profile={profile as UserProfile}
              detail={detail as UserDetail}
            ></Info>
            <UserPl
              {...{
                isSelf,
                profile: profile as UserProfile,
                createdPlaylists,
                subscribedPlaylists,
              }}
            ></UserPl>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(User))
