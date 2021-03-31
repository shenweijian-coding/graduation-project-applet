// pages/love/issue/index.js
import { request, uploadFile } from '../../../utils/request'
import { formatTime } from '../../../utils/util'
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    name: '',
    desc: ''
  },
  // 获取名称
  getName(e){
    this.setData({ name: e.detail.value })
  },
  // 获取详细信息
  getDesc(e){
    console.log(e);
    this.setData({ desc: e.detail.value })
  },
  // 上传图片
  async afterRead(event){
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    const res = await uploadFile({ url: file.url })
    console.log(res);
    const { fileList = [] } = this.data;
    fileList.push({ ...file, url: res });
    this.setData({ fileList });
  },
  // 确认发布
  async submit(){
    const domain = app.globalData.domain
    const data = this.data
    const img = data.fileList.map(i => `${domain}/${i.url}`)
    const reqData = {
      name:data.name,
      desc: data.desc,
      createTime: formatTime(),
      img:img,
      disNum:0,
      likeNum:0
    }
    const res = await request({
      url: '/api/issueLoveInfo',
      method: 'POST',
      data: reqData
    })
    console.log(res);
    wx.showToast({
      title: res.message,
      success: ()=>{
        wx.navigateBack({
          delta: 1,
        })
      }
    })
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