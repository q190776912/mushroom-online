import { loginRequest } from '../../utils/request.js'

Page({
  data: {

  },

  onGotUserInfo(e) {
    const userInfo = e.detail.userInfo
    if (!userInfo) {
      wx.showToast({
        title: '用户授权失败',
        icon: 'none'
      })
      return
    }
    wx.login({
      //  用户授权成功
      async success(res) {
        if (res.code) {
          //  发送请求
          try {
            const data = await loginRequest({
              code: res.code,
              nickname: userInfo.nickName,
              avatar: userInfo.avatarUrl
            })
            wx.setStorageSync('token', data.token)
            wx.showToast({
              title: data.message,
              success() {
                wx.navigateTo({
                  url: '/pages/home/home',
                })
              }
            })
          } catch {
            wx.showToast({
              title: `登录失败！`,
            })
          }
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})