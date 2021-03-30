// pages/club/index.js
import {request} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'A',
    clubListA: [],
    clubListB: [],
    clubListC: [],
    clubListD: [],
  },
  // tab切换
  changeClubType(e) {
    this.setData({ active: e.detail.name})
    // 先判断是否data有数据 没有则请求
    if(this.data["clubList"+e.detail.name].length) return
    // 请求数据
    this.getClubInfo(e.detail.name)
  },
  // 导航到详情
  navToetail(e) {
    console.log(e);
    wx.navigateTo({
      url: './detail/index?detailInfo=' + JSON.stringify(e.currentTarget.dataset.item),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClubInfo()
  },
  async getClubInfo(type = "A"){
    const clubInfo = await request({
      url: `/api/getClubInfo?type=${type}`
    })
    this.setData({ ["clubList"+type]: clubInfo.data })
    console.log(clubInfo);
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