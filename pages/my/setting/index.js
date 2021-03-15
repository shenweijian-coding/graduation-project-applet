// pages/my/setting/index.js
import request from '../../../utils/request'
const app = getApp()
const globalData = app.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      name:'',
      college:'',
      grade:'',
      major: '',
      email: '',
      wxName: ''
    },
  },
  // 提交用户信息
  async submitUserInfo() {
    const { userInfo } = this.data
    for (const key in userInfo) {
      if(userInfo[key] === '') {
        wx.showToast({
          title: '请填写完整',
        })
        return
      }
    }
    // 加入头像和性别
    userInfo.avatar = globalData.userInfo.avatarUrl
    userInfo.gender = globalData.userInfo.gender
    const res = await request({
      url: '/api/addUserInfo',
      method: 'POST',
      data: userInfo
    })
    wx.showToast({
      title: res.message,
      icon: 'none'
    })
  },
  // 输入信息监控
  onChange(e){
    const tag = e.target.dataset.type
    const userInfo = this.data.userInfo
    userInfo[tag] = e.detail
    this.setData({userInfo})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
  },
  // 获取用户信息
  async getUserInfo() {
    const res = await request({
      url: '/api/getUserInfo'
    })
    if(res.erron!==0) {
      return
    }
    this.setData({
      userInfo: { ...res.data.contactWay, ...res.data.schoolInfo  }
    })
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