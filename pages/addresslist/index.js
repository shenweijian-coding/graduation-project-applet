// pages/addresslist/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  //右侧分类的高度累加数组
  heightArr: [],
  //记录scroll-view滚动过程中距离顶部的高度
  distance: 0,
  data: {
    curSelect: 0,
    selectId: 'item0',
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAddressInfo()
  },
  // 获取通讯录列表
  async getAddressInfo(){
    const res = await request({
      url: '/api/getAddressInfo'
    })
    if(res.erron !== 0) {
      wx.showToast({
        title: '出现错误',
        icon: 'none'
      })
      return
    }
    this.setData({ addressList: res.data })
    this.countHeight()
  },
  // 选择当前类目
  clickCurTitle(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      curSelect:index ,
      selectId: 'item'+index
    })
  },
  // 处理滚动
  handleScroll(e){
    const scrollTop = e.detail.scrollTop
    const index = this.data.curSelect
    if(scrollTop >= this.distance) {     // 向上滚动
      if(index +1 < this.heightArr.length && scrollTop >= this.heightArr[index]){
        this.setData({
          curSelect: index+1
        })
      }
    } else{ // 页面向下滚动
      if(index-1 >=0 && scrollTop < this.heightArr[index-1]){
        this.setData({
          curSelect:index-1
        })
      }
    }
    this.distance = scrollTop
  },
  // 打电话
  callUp(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success:()=>{},
      fail:()=>{}
    })
  },
  // 计算右侧列表高度
  countHeight(){
    let that = this;
    this.heightArr = [];
    let h = 0;
    const query = wx.createSelectorQuery();
    query.selectAll('.right-item').boundingClientRect()
    query.exec(function(res) {
      res[0].forEach((item) => {
        h += item.height;
        that.heightArr.push(h);
      })
      console.log(that.heightArr);
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