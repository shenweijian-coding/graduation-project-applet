// pages/my/index.js
const app = getApp()
import { wxAppStop } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '', //头像
    name: '',
    gender: '',
    isStop: false,
  },
  submit(){
    wx.requestSubscribeMessage({
      tmplIds: ['sF1GNcIRY1koF-7kGTa5hqIqm92HHIxfoM3zqky8tkA'],
      success (res) { 
        console.log("订阅成功："+JSON.stringify(res))
      },
      fail(res){
        console.log("订阅失败："+JSON.stringify(res))
      }
    })
//注意把模板ID换为自己的
  },
  // 获取用户信息
  getUserInfo(){
    const _this = this
    wx.getUserProfile({
      desc: '用于完善资料',
      success: function(res) {
        console.log(res);
        const userInfo = res.userInfo
        app.globalData.userInfo = userInfo
        wx.setStorageSync('userInfo', userInfo)
        _this.setData({
          avatarUrl: userInfo.avatarUrl,
          name: userInfo.nickName,
          gender: userInfo.gender
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 缓存中获取用户信息
    const userInfo = wx.getStorageSync('userInfo')
    if(app.globalData.isStop){
      this.setData({
        isStop: app.globalData.isStop
      })
      wxAppStop()
    }
    this.setData({
      avatarUrl: userInfo.avatarUrl,
      name: userInfo.nickName,
      gender: userInfo.gender
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