// pages/my/issue/index.js
import {request} from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trade: [],
    love: [],
    help:[],
    lostandfound:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // tab切换
  changeTab(e){
    console.log(e);
    this.getUserIssueInfo(e.detail.name)
  },
  // 导航到详情
  navDetail(e){
    console.log(e);
    wx.navigateTo({
      url: `${e.currentTarget.dataset.path}?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUserIssueInfo('trade')
  },
  // 获取个人发布信息
  async getUserIssueInfo(type){
    const res = await request({
      url: `/api/getIssueInfo?type=${type}`
    })
    this.setData({ [type]: res.data })
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