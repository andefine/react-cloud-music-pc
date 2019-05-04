import http from '@/utils/http'

/**
 * 获取 banner( 轮播图 ) 数据
 *
 */
export const getBanners = () => http({
  url: '/banner'
})

/**
 * 获取推荐歌单
 *
 */
export const getRecommendPlaylist = () => http({
  url: '/personalized'
})

/**
 * 获取独家放送
 *
 */
export const getPrivateContents = () => http({
  url: '/personalized/privatecontent'
})
