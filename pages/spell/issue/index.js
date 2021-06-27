// pages/spell/issue/index.js
import { request, uploadFile } from '../../../utils/request'
import { formatTime } from '../../../utils/util'
const app = getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desc: '',
    fileList: []
  },
  getDesc(e){
    this.setData({ desc:e.detail.value })
  },
  
  // 上传图片
  async afterRead(event){
    const { file } = event.detail;
    const res = await uploadFile({ url: file.url })
    const { fileList = [] } = this.data;
    fileList.push({ ...file, url: res });
    this.setData({ fileList });
  },
  // 确认发布
  async submit(){
    const domain = app.globalData.domain
    const desc = this.data.desc
    if(desc===''){
      wx.showToast({
        title: '详细信息不能为空',
        duration: 0,
        icon: none,
      })
      return
    }
    const img = this.data.fileList.map(i=>`${domain}/${i.url}`)
    const res = await request({
      url: '/api/issueNeedInfo',
      method: 'POST',
      data:{
        type: 'help',
        img:img,
        desc:desc,
        createTime:formatTime(),
        disNum:0,
        likeNum:0
      }
    })
    if(res.erron === 0){
      wx.navigateTo({
        url: '../../releasesuccess/index?path=spell',
      })
    }else{
      wx.showToast({
        title: '出现错误',
        icon: 'none'
      })
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