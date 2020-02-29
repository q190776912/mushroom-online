import request from '../utils/request.js'

function listRequest() {
  return request({
    url: 'course/list'
  })
}

export {
  listRequest
}