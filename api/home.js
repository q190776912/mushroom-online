import request from '../utils/request.js'

function swipersRequest() {
  return request({
    url: 'home/swipers'
  })
}

export {
  swipersRequest
}
