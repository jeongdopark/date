class ApiUrl {
  static signUp = '/auth/signup'

  static signIn = '/auth/signin'

  static userInfo = '/auth/user'

  static refreshToken = '/auth/refresh'

  static updateUserInfo = '/member'

  static userList = '/member/list'

  static like = '/affinity/like'

  static dislike = '/affinity/dislike'

  static likeList = '/affinity/list'
}

export default Object.freeze(ApiUrl)
