const baseUrl = 'http://localhost:3000/api/'

function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${options.url}`,
      data: options.data,
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
      complete: options.complete || null
    })
  })
}

function loginRequest(data) {
  wx.showLoading({
    title: '加载中',
  })
  return request({
    url: 'user/wxlogin',
    method: 'POST',
    data,
    complete: () => {
      wx.hideLoading()
    }
  })
}

export {
  loginRequest
}