import { listRequest } from '../../api/course.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    try {
      const listData = await listRequest()
      if (listData.status === 0) {
        let list = listData.message
        list.forEach((item) => {
          switch (item.level) {
            case 1:
              item.level = '初级';
              break;
            case 2:
              item.level = '中级';
              break;
            case 3:
              item.level = '高级';
              break;
          }
        })
      } else {
        wx.showToast({
          title: '获取数据失败',
          icon: 'none'
        })
      }
      this.setData({ list })
    } catch {
      wx.showToast({
        title: '获取数据失败',
        icon: 'icon'
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