// 这个 playlist 是当前被显示的某个歌单的具体信息。

const initialState = {
  // 这个值主要是表示是否在请求，来决定在请求中时是否显示 loading
  isFetching: false,
  // api 返回的 playlist 中的信息将都会放到这里
  data: {}
}

const playlist = (state = initialState) => {}

export default playlist
