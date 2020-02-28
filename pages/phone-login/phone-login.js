const COUNT_DOWN_NUM = 10;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSendCode: false,
    phoneNumber: '15625120668',
    countNum: COUNT_DOWN_NUM
  },

  getPhoneNumber(event) {
    this.setData({
      phoneNumber: event.detail.value
    })
  },

  getVcode() {
    if (this.data.isSendCode) {
      return;
    }
    const reg = /^1[3456789][0-9]{9}$/
    if (this.data.phoneNumber && reg.test(this.data.phoneNumber)) {
      this.setData({
        isSendCode: true
      })
      this.timeDown();
    } else {
      wx.showToast({
        title: '请输入正确格式的手机号码',
        icon: 'none'
      })
    }
  },

  timeDown() {
    const timer = setInterval(() => {
      let countNum = this.data.countNum;
      if (--countNum) {
        this.setData({ countNum })
      } else {
        clearInterval(timer);
        this.setData({
          countNum: COUNT_DOWN_NUM,
          isSendCode: false
        })
      }
    }, 1000)
  }
})