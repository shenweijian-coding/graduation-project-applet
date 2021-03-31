// pages/lose/index.js
import {request} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lostInfo:[],
    foundInfo: [],
    banners: ['https://img.zcool.cn/community/01f6725d89119da801211d536e7e81.png@1280w_1l_2o_100sh.png']
  },
  navIssuePage(){
    wx.navigateTo({
      url: './issue/index',
    })
  },
  navDeatil(e){
    console.log(e);
    wx.navigateTo({
      url: `./detail/index?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
    })
  },
  // tab切换
  changeTab(e){
    console.log(e);
    this.getLostInfo(e.detail.name)
  },
  // 查询物品信息
  async getLostInfo(role){
    const lostInfo = await request({
      url: `/api/getLostInfo?role=${role}`
    })
    console.log(lostInfo);
    if(role==1){
      this.setData({ lostInfo: lostInfo.data.reverse() })
    }else{
      this.setData({ foundInfo: lostInfo.data.reverse() })
    }
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getLostInfo('1')
    this.getLostInfo('2')
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