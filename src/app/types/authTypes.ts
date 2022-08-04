export interface IAuthReq {
  login: string
  password: string
}
export interface IRegReq {
  login: string
  password: string
  email: string
}
export interface IAuthResp {
  token?: string
  message?: string
  status?: number
  column?: string
}
export interface IUserInfo {
  id: number
  login: string
  email: string
  name: string
  password: string
  telephone: string
  avatar: string
}
