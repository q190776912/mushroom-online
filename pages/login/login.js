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
      success(res) {
        if (res.code) {
          //  发送请求
          loginRequest({
            code: res.code,
            nickname: userInfo.nickName,
            avatar: userInfo.avatarUrl
          }).then((res) => {
            wx.setStorageSync('token', res.token)
            wx.showToast({
              title: res.message,
              success() {
                wx.navigateTo({
                  url: '/pages/home/home',
                })
              }
            })
          }).catch((res) => {
            wx.showToast({
              title: `登录失败！`,
            })
            console.log(res);
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})