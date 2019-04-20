import http from '@/utils/http'

export function getBanner () {
  return http({
    url: '/banner'
  })
}
