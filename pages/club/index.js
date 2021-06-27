// pages/club/index.js
import { request } from '../../utils/request'
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
    keyword: '',
    searchInfo: null
  },
  timer: '',
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
  onChange(e) {
    this.setData({
      keyword: e.detail,
    });
  },
  // 搜索
  async searchClub(){
    const { keyword } = this.data
    if(keyword.length===0){
      this.setData({
        searchInfo: null
      })
      return
    }
    const res = await request({ url: `/api/getClubInfo?keyword=${keyword}` })
    console.log(res.data);
    const clubArr = res.data
    if(clubArr.length === 0){
      wx.showToast({
        title: '未找到任何数据',
        icon: 'none'
      })
      return
    }
    const clubMap = new Map([
      ['A','文艺类'],
      ['B','学术科技类'],
      ['C','体育类'],
      ['D','志愿公益类']
    ])
    for (let i = 0; i < clubArr.length; i++) {
      clubArr[i].type = clubMap.get(clubArr[i].type)
    }
    this.setData({
      searchInfo: clubArr,
      keyword: ''
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