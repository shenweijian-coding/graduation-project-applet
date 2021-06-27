// pages/resell/index.js
import {request} from '../../utils/request'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resellInfo:[],
    banners:[
      '/images/fleafair.png'
    ],
    isShowIssue: true,
    isShowEnd: false,
    pageSize: 0,
    pageNum: 8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ isShowIssue: app.globalData.isShowIssue})
  },
  async clickLike(e){
    const resellInfo = this.data.resellInfo
    let dbName,isLike
    let _id = e.detail
    // 本地点赞+1 -1操作
    resellInfo.map(i=>{
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
    this.setData({ resellInfo })
  },
  async getResellInfo(){
    const { pageNum, pageSize, resellInfo } = this.data
    const res = await request({
      url:`/api/getResellInfo?pageSize=${pageSize}&pageNum=${pageNum}`
    })
    const result = res.data
    this.setData({ resellInfo:[...resellInfo,...result] })
    if(res.data.length) {
      this.setData({ pageNum: pageNum, pageSize: pageSize + pageNum  })
    }else{
      this.setData({ isShowEnd:true })
    }
  },
    // 返回
    back(){
      // wx.navigateBack({
      //   delta: 1,
      // })
      wx.switchTab({
        url: '/pages/index/index',
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
    this.getResellInfo()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})