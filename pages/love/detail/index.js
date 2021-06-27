// pages/love/detail/index.
import {request} from '../../../utils/request'
import { formatTime } from '../../../utils/util'
const app = getApp()
const globalData = app.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:['https://img.zcool.cn/community/019ff36056c05d11013fb117ce6d25.jpg@260w_195h_1c_1e_1o_100sh.jpg'],
    curImgBg: 'https://img.zcool.cn/community/019ff36056c05d11013fb117ce6d25.jpg@260w_195h_1c_1e_1o_100sh.jpg',
    curLoveInfo: '',
    comment: '',
    commentList: ''
  },
  back(){
    wx.navigateBack({
      delta: 1
    })
  },
  async changeComment(e){
    this.setData({ comment:e.detail })
  },
  // 发布评论
  async submit(){
    const userInfo = globalData.userInfo
    const desc = this.data.comment
    const {_id, type} = this.data.curLoveInfo
    const avatarUrl = userInfo.avatarUrl
    const name = userInfo.nickName
    const createTime = formatTime()
    const res = await request({
      url: '/api/issueComment',
      method: 'POST',
      data: {
        dbName: type,
        id: _id,
        commentInfo:{
          desc,avatarUrl,name,createTime
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
  // 获取评论列表
  async getCommentList(){
    const id = this.data.curLoveInfo._id
    const res = await request({
      url: `/api/getCommentList?id=${id}`
    })
    if(!res.hasOwnProperty('data')){
      return
    }
    // 反转数组
    const commentList = res.data.commentList
    this.setData({ commentList })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log();
    this.setData({ curLoveInfo: JSON.parse(options.data) })
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
    this.getCommentList()
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