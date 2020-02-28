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
          //  展示加载中
          wx.showLoading({
            title: '加载中',
          })
          //  发送请求
          loginRequest({
            code: res.code,
            nickname: userInfo.nickName,
            avatar: userInfo.avatarUrl
          }).then((res) => {
            if (res.data.status === 0) {
              wx.setStorageSync('token', res.data.token)
              wx.showToast({
                title: res.data.message,
                success() {
                  wx.navigateTo({
                    url: '/pages/home/home',
                  })
                }
              })
            } else {
              wx.showToast({
                title: `登录失败！${res.data.message}`,
              })
            }
          }).catch((res) => {
            wx.showToast({
              title: `登录失败！`,
            })
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})