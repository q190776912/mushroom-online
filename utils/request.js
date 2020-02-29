function request(options) {
  const baseUrl = 'http://localhost:3000/api/'
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${options.url}`,
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

function wxloginRequest({ code, nickname, avatar }) {
  return request({
    url: 'user/wxlogin',
    method: 'POST',
    data: {
      code,
      nickname,
      avatar
    }
  })
}

function vcodeRequest(phone) {
  return request({
    url: `user/vcode?phone=${phone}`
  })
}

function loginRequest({ phone, vcode }) {
  return request({
    url: 'user/login',
    method: 'POST',
    data: {
      phone,
      vcode
    }
  })
}

export {
  wxloginRequest,
  vcodeRequest,
  loginRequest
}