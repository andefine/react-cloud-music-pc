import request from '@/utils/request'

/**
 * 获取 banner( 轮播图 ) 数据
 */
export const getBanners = () =>
  request({
    url: '/banner',
  })

/**
 * 获取 推荐歌单
 *
 */
export const getPlaylist = () =>
  request({
    url: '/personalized',
  })

/**
 * 获取 独家放送
 *
 */
export const getPrivateContent = () =>
  request({
    url: '/personalized/privatecontent',
  })

/**
 * 获取 最新音乐
 *
 */
export const getLatestMusics = () =>
  request({
    url: '/personalized/newsong',
  })
