export interface Profile {
  description: string
  userId: number
  nickname: string
  birthday: number
  gender: number
  avatarUrl: string
  followeds: number
  follows: number
  eventCount: number
  [key: string]: any
}

export interface Detail {
  [key: string]: any
}
