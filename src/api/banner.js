import http from '@/utils/http'

export function getBanners () {
  return http({
    url: '/banner'
  })
}
