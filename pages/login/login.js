// pages/login/login.js
Page({
  data: {

  },

  onGotUserInfo(e) {
    const detail = e.detail;
    if (!detail.userInfo) {
      wx.showToast({
        title: '用户授权失败',
        icon: 'none'
      })
      return
    }
  }
})