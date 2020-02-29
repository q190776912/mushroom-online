import { swipersRequest, courseRequest, videoRequest } from '../../api/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipersList: [],
    courseList: [],
    videoList: []
  },

  getSwipersData: async function () {
    try {
      const swipersData = await swipersRequest()
      this.setData({
        swipersList: swipersData.message
      })
    } catch {
      wx.showToast({
        title: '获取数据失败',
        icon: 'none'
      })
    }
  },

  getCourseData: async function () {
    try {
      const courseData = await courseRequest()
      this.setData({
        courseList: courseData.message
      })
    } catch {
      wx.showToast({
        title: '获取数据失败',
        icon: 'none'
      })
    }
  },

  getVideoData: async function () {
    try {
      const videoData = await videoRequest()
      this.setData({
        videoList: videoData.message
      })
    } catch {
      wx.showToast({
        title: '获取数据失败',
        icon: 'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwipersData()
    this.getCourseData()
    this.getVideoData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})