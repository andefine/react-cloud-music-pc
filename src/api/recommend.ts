import request from '@/utils/request'

/**
 * 获取 banner( 轮播图 ) 数据
 */
export const getBanners = () =>
  request({
    url: '/banner',
  })
