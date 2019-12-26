export interface UserDetail {
  level: number
  listenSongs: number
  mobileSign: boolean
  pcSign: boolean
  profile: UserProfile
  peopleCanSeeMyPlayRecord: boolean
  createTime: number
  createDays: number
  [key: string]: any
}

export interface UserProfile {
  nickname: string
  // 生日是以时间戳表示
  birthday: number
  // 0: 未知，1: 男，2：女
  gender: number
  avatarUrl: string
  city: number
  backgroundUrl: string
  createTime: number
  province: number
  // 是否关注了
  followed: boolean
  userId: number
  // 个人介绍
  signature: string
  // 粉丝数量
  followeds: number
  // 关注数量
  follows: number
  blacklist: boolean
  // 动态数量
  eventCount: number
  [key: string]: any
}
