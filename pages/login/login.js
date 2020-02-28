// pages/login/login.js
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
      success(res) {
        if (res.code) {
          wx.showLoading({
            title: '加载中',
          })
          wx.request({
            url: 'http://localhost:3000/api/user/wxlogin',
            data: {
              code: res.code,
              nickname: userInfo.nickName,
              avatar: userInfo.avatarUrl
            },
            method: 'POST',
            success(res) {
              wx.showToast({
                title: res.data.message,
                success() {
                  console.log(res)
                  wx.navigateTo({
                    url: '/pages/home/home',
                  })
                }
              })
            },
            complete() {
              wx.hideLoading()
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})