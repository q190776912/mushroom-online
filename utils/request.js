const baseUrl = 'http://localhost:3000/api/'

function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      method: options.method || 'GET',
      success: (res) => {
        resolve(res)
      },
      fail: (res) => {
        reject(res)
      },
      complete: () => {
        if (options.complete) {
          options.complete()
        }
      }
    })
  })
}

function loginRequest(data) {
  wx.showLoading({
    title: '加载中',
  })
  return request({
    url: `${baseUrl}user/wxlogin`,
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