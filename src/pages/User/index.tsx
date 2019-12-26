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
  playlists: Playlist[]
}

class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      profile: {},
      detail: {},
      playlists: [],
    }
  }

  componentDidMount() {
    this.getDataByRoute()
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getDataByRoute()
    }
  }

  async getDataByRoute() {
    const numId = Number(this.props.match.params.id)
    if (!numId) {
      return console.error('无效的 user id')
    }

    const [{ profile, ...detail }, { playlist: playlists }] = await Promise.all<
      any
    >([userApi.getUserDetail(numId), userApi.getUserPlaylists(numId)])
    this.setState({ profile, detail, playlists })
  }

  render() {
    const { accountProfile } = this.props
    const { profile, detail, playlists } = this.state
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
            <UserPl {...{ isSelf, playlists }}></UserPl>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(User))
