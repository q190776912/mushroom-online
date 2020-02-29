import request from '../utils/request.js'

function swipersRequest() {
  return request({
    url: 'home/swipers'
  })
}

function courseRequest() {
  return request({
    url: 'home/course'
  })
}

function videoRequest() {
  return request({
    url: 'home/video'
  })
}

export {
  swipersRequest,
  courseRequest,
  videoRequest
}
