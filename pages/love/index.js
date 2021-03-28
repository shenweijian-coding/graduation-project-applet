// pages/love/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ani: '',
    loveInfo: []
  },
  // 循环动画
  start:function(){
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
      delay: 0,
    });
    let next = true;
    setInterval(() => {
      if(next){
        animation.opacity(0.2).step()
        next = !next
      }else{
        animation.opacity(1).step()
        next = !next
      }
      this.setData({
        ani:  animation.export()
      })
    }, 1000);
  },
  // 返回
  back(){
    wx.navigateBack({
      delta: 1,
    })
  },
  // 详细
  navToDetail(e){
    console.log(e);
    wx.navigateTo({
      url: `./detail/index?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.start()
  },
  // 获取表白信息
  async getLoveInfo(){
    const data = await request({
      url: '/api/getLoveInfo'
    })
    const loveInfo = data.data.reverse()
    this.setData({ loveInfo: loveInfo  })
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
    // 获取表白信息
    this.getLoveInfo()
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