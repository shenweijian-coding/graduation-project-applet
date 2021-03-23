// pages/love/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ani: ''
  },
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
  navToDetail(){
    wx.navigateTo({
      url: './detail/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.start()
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