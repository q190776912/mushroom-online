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
      //  用户授权成功
      success(res) {
        if (res.code) {
          //  展示加载中
          wx.showLoading({
            title: '加载中',
          })
          //  发送请求
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
                  wx.navigateTo({
                    url: '/pages/home/home',
                  })
                }
              })
            },
            complete() {
              //  关闭加载
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