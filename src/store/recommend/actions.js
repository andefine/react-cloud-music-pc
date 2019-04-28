export const GET_BANNERS_BEGIN = 'GET_BANNERS_BEGIN'
export const GET_BANNERS_SUCCESS = 'GET_BANNERS_SUCCESS'
export const GET_BANNERS_FAILURE = 'GET_BANNERS_FAILURE'

export function getBanners () {
  return {
    type: GET_BANNERS_BEGIN
  }
}

export function receiveBanners (banners) {
  return {
    type: GET_BANNERS_SUCCESS,
    banners
  }
}
