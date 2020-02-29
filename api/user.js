import request from '../utils/request.js'

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

function vcodeRequest({ phone }) {
  return request({
    url: 'user/vcode',
    data: { phone }
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
