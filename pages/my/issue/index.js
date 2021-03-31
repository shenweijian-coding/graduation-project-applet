// pages/my/issue/index.js
import {request} from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTab:'trade',
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
    this.setData({ curTab: e.detail.name })
  },
  // 删除记录
  async delete(e) {
    const _this = this
    const curTab = this.data.curTab
    wx.showModal({
      title: '删除操作',
      content: '确定删除么，删除不可恢复！',
      success: async (res) =>{
        if (res.confirm) {
          const res = await request({
            url:`/api/del?id=${e.detail}&dbName=${curTab}`
          })
          wx.showToast({
            title: res.message,
            icon: 'none',
            mask: true,
            success: (res) => {
              _this.getUserIssueInfo(curTab)
            }
          })
        } else if (res.cancel) {
        }
      }
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