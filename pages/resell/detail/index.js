// pages/resell/detail/index.js
import request from '../../../utils/request'
import { formatTime } from '../../../utils/util'
const app = getApp()
const globalData = app.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTradeInfo: {},
    comment: '',
    commentList: []
  },
  // 保存评论
  async changeComment(e){
    this.setData({ comment:e.detail })
  },
  async submit(){
    const userInfo = globalData.userInfo
    const desc = this.data.comment
    const tradeId = this.data.curTradeInfo._id
    const avatarUrl = userInfo.avatarUrl
    const gender = userInfo.gender
    const name = userInfo.nickName
    const createTime = formatTime()
    console.log(globalData);
    const res = await request({
      url: '/api/issueComment',
      method: 'POST',
      data: {
        tradeId,
        commentInfo:{
          desc,avatarUrl,gender,name,createTime
        }
      }
    })
    wx.showToast({
      title: res.message,
      icon: res.erron ? 'none' : 'success'
    })
    this.setData({ comment: '' })
    this.getCommentList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const curTradeInfo = JSON.parse(options.data)
    this.setData({ curTradeInfo })
    // 查询评论信息
    this.getCommentList()
  },
  async getCommentList(){
    const tradeId = this.data.curTradeInfo._id
    const res = await request({
      url: `/api/getCommentList?tradeId=${tradeId}`
    })
    if(!res.hasOwnProperty('data')){
      return
    }
    // 反转数组
    const commentList = res.data.commentList.reverse()
    this.setData({ commentList })
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