// pages/my/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '', //头像
    name: '',
    gender: ''
  },
  // 获取用户信息
  getUserInfo(){
    const _this = this
    wx.getUserInfo({
      success: function(res) {
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