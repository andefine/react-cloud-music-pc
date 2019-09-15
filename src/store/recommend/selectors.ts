let flag: number = 0

export const getShowPlaylists = (playlists: any[]) => {
  const firstTwo = playlists.slice(0, 2)
  const rest = playlists.slice(2)

  const start = flag % 4
  const end = (flag % 4) + 7

  const result = [...firstTwo, ...rest.slice(start, end)]

  flag++

  return result
}
