// pages/resell/issue/index.js
import { request, uploadFile } from '../../../utils/request'
import { formatTime } from '../../../utils/util'
const app = getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList:[],
    checked: '',
    desc: '',
    price:'',
    type: ''
  },
  onChange(e){
    this.setData({checked:e.detail})
  },
  // 物品介绍
  getDesc(e){
    this.setData({desc:e.detail.value})
  },
  // 上传图片
  async afterRead(event){
    const { file } = event.detail;
    console.log(file);
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    const res = await uploadFile({ url: file.url })
    const { fileList = [] } = this.data;
    fileList.push({ ...file, url: res });
    this.setData({ fileList });
  },
  // 物品价格
  changePrice(e){
    this.setData({ price:e.detail })
  },
  // 发布需求
  async submit() {
    const domain = app.globalData.domain
    const data = this.data
    if(data.desc == ''){
      wx.showToast({
        title: '请输入介绍',
        icon: 'none',
      })
      return
    }
    const img = data.fileList.map(i=>`${domain}/${i.url}`)
    const reqData = {
      type: 'trade',
      price: data.price == '' ? '0' : data.price,
      desc: data.desc,
      isNew: data.checked ? true : false,
      img: img,
      createTime: formatTime(),
      disNum: 0,
      likeNum:0
    }
    const res = await request({
      url: '/api/postTrade',
      method: 'POST',
      data: reqData
    })
    wx.showToast({
      title: res.message,
      icon: 'none',
      success:()=>{
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