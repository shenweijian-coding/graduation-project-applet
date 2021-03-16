// pages/resell/issue/index.js
import request from '../../../utils/request'
import { formatTime } from '../../../utils/util'
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
  afterRead(event){
    const _this = this
    const { file } = event.detail;
    console.log(file);
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'http://127.0.0.1:3000/api/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      header:{
        Cookie:'o287n5Kl94AHt2kGM6ycmalUW2oY'
      },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = _this.data;
        fileList.push({ ...file, url: res.data });
        _this.setData({ fileList });
      },
    });
  },
  // 物品价格
  changePrice(e){
    this.setData({ price:e.detail })
  },
  // 发布需求
  async submit() {
    const data = this.data
    const img = data.fileList.map(i=>`http://127.0.0.1:3000/${i.url}`)
    const reqData = {
      price: data.price,
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