import request from '@/utils/request'

/**
 * 获取 banner( 轮播图 ) 数据
 */
export const getBanners = () => request.get('/banner')

/**
 * 获取 推荐歌单
 *
 */
export const getPlaylist = () => request.get('/personalized')

/**
 * 获取 独家放送
 */
export const getPrivateContent = () =>
  request.get('/personalized/privatecontent')

/**
 * 获取 最新音乐
 */
export const getLatestMusics = () => request.get('/personalized/newsong')
