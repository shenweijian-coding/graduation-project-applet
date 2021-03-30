// pages/news/index.js
import {request} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [], // 新闻列表
    recNews: {} // 顶部新闻
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList()
  },
  async getNewsList(){
    const data = await request({
      url: '/api/getNewsList'
    })
    console.log(data.data);
    this.setData({
      newsList: data.data.newsList,
      recNews: data.data.recNews
    })
  },
  // 查看详情
  navDetail(e){
    wx.navigateTo({
      url: `./detail/index?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
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