export default function request(options) {
  const baseUrl = 'http://localhost:3000/api/'
  const token = wx.getStorageSync('token') || null
  const whiteList = [
    "pages/login/login",
    "pages/phone-login/phone-login"
  ] 
  if (!token) {
    const pageList = getCurrentPages()
    const path = pageList[pageList.length - 1].route
    console.log(path)
    if (whiteList.indexOf(path) === -1) {
      wx.showToast({
        title: '请先登录！',
        icon: 'none'
      })
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  }
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${options.url}`,
      header: {
        Authorization: token || ''
      },
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