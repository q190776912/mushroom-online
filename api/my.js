import request from '../utils/request.js'

function infoRequest() {
  return request({
    url: 'my/info'
  })
}

export {
  infoRequest
}