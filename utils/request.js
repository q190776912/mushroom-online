export default function request(options) {
  const baseUrl = 'http://localhost:3000/api/'
  const token = wx.getStorageSync('token') || null
  const whiteList = [
    'user/wxlogin',
    'user/vcode',
    'user/login'
  ] 
  if (!token && whiteList.indexOf(options.url) === -1) {
    wx.showToast({
      title: '请先登录！',
      icon: 'none',
      success() {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    })
    return
  }
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `${baseUrl}${options.url}`,
      header: token ? {
        Authorization: token
      } : null,
      data: options.data || null,
      method: options.method || 'GET',
      success: (res) => {
        if (res.data.status === 0) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: '登录失败！',
          })
          console.log(res.data.message)
        }
      },
      fail: reject || null,
      complete:() => {
        wx.hideLoading()
      }
    })
  })
}