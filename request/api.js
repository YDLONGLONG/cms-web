import request from './request'

export const NavApi = () => request.get('/nav')

export const BannerApi = () => request.get('/banner')

export const ArticleListApi = () => request.get('/list')

export const ArticleIdApi = (params) => request.get('/article',{params})