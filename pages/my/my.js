import { infoRequest } from '../../api/my.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    phoneNumber: '15625120668'
  },

  makeCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    try {
      const infoData = await infoRequest()
      this.setData({
        info: infoData.message
      })
    } catch {
      wx.showToast({
        title: '获取数据失败',
        icon: 'none'
      })
    }
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