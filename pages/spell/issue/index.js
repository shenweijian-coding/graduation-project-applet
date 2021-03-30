// pages/spell/issue/index.js
import { request, uploadFile } from '../../../utils/request'
import { formatTime } from '../../../utils/util'
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
    const desc = this.data.desc
    const img = this.data.fileList.map(i=>`http://127.0.0.1:3000/${i.url}`)
    const res = await request({
      url: '/api/issueNeedInfo',
      method: 'POST',
      data:{
        img:img,
        desc:desc,
        createTime:formatTime(),
        disNum:0,
        likeNum:0
      }
    })
    wx.showToast({
      title: res.message,
      success:()=>{
        wx.navigateBack({
          delta: 1,
        })
      }
    })
    console.log(res);
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