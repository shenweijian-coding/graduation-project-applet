// pages/news/detail/index.js
import { request } from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curInfo: '',
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const curInfo = JSON.parse(options.data)
    this.getNewsInfo(curInfo.href)
    wx.setNavigationBarTitle({
      title:curInfo.title,
    })
    this.setData({ curInfo })
  },
  // 获取信息详情
  async getNewsInfo(href){
    const res = await request({
      url: `/api/getNewsInfo?href=${href}`
    })
    this.setData({...res.data})
    console.log(res);
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