import { vcodeRequest, loginRequest } from '../../api/user.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSendCode: false,
    phoneNumber: '15625120668',
    countNum: 10,
    vcode: ''
  },

  getPhoneNumber(event) {
    this.setData({
      phoneNumber: event.detail.value
    })
  },

  async getVcode() {
    if (this.data.isSendCode) {
      return;
    }
    //  手机校验
    const reg = /^1[3456789][0-9]{9}$/
    if (reg.test(this.data.phoneNumber)) {
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
    //  发送验证码
    try {
      const data = await vcodeRequest(this.data.phoneNumber)
      if (data.status === 0) {
        wx.showToast({
          title: `验证码：${data.vcode}`,
          icon: 'none'
        })
        this.setData({
          vcode: data.vcode
        })
      } else {
        wx.showToast({
          title: '验证码获取失败！',
          icon: 'none'
        })
        console.log(data.message)
      }
    } catch {
      wx.showToast({
        title: '验证码获取失败！',
        icon: 'none'
      })
    }
  },

  //  倒计时方法
  timeDown() {
    const COUNT_DOWN_NUM = this.data.countNum
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
  },

  async userLogin() {
    try {
      const data = await loginRequest({
        phone: this.data.phoneNumber,
        vcode: this.data.vcode
      })
      if (data.status === 0) {
        wx.setStorageSync('token', data.token)
        wx.showToast({
          title: data.message,
          success() {
            wx.reLaunch({
              url: '/pages/home/home'
            })
          }
        })
      } else {
        wx.showToast({
          title: data.message,
          icon: 'none'
        })
      }
    } catch {
      wx.showToast({
        title: '登录失败！',
        icon: 'none'
      })
    }
  },

  //  验证码输入
  setVcode(event) {
    this.setData({
      vcode: event.detail.value
    })
  }
})