import * as actionTypes from './constants'


export const getAllNews = (res) => ({
  type: actionTypes.GET_ALL_NEWS,
  topBanners: res.banners
})