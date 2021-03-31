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