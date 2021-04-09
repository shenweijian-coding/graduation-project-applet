// pages/spell/index.js
import {request} from '../../utils/request'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helpInfo: [],
    isShowIssue: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ isShowIssue: app.globalData.isShowIssue})
  },
  async clickLike(e){
    const helpInfo = this.data.helpInfo
    let dbName,isLike
    let _id = e.detail
    // 本地点赞+1 -1操作
    helpInfo.map(i=>{
      if(i._id == _id){
        i.isLike = !i.isLike
        i.likeNum = i.isLike ? ++i.likeNum : --i.likeNum
        dbName = i.type
        isLike = i.isLike
      }
    })
    // 发送请求
    request({
      url: `/api/like?isLike=${isLike}&id=${_id}&dbName=${dbName}`
    })
    this.setData({ helpInfo })
  },
  async getHelpInfo(){
    const data = await request({
      url: '/api/getHelpInfo'
    })
    console.log(data);
    const helpInfo = data.data.reverse()
    this.setData({ helpInfo: helpInfo })
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
    this.getHelpInfo()
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