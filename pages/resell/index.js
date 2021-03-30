// pages/resell/index.js
import {request} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resellInfo:[],
    banners:[
      '../../images/58de59d9e2be4.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  async getResellInfo(){
    const res = await request({
      url:'/api/getResellInfo'
    })
    const resellInfo = res.data.reverse()
    this.setData({
      resellInfo
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
        // 请求交易物品相关信息
        this.getResellInfo()
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