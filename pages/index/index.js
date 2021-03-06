// index.js
// 获取应用实例
const app = getApp()
import { wxAppStop } from '../../utils/util'
import { request } from '../../utils/request'
Page({
  data: {
    banners:[],
    categories: [
      {
        icon: "/images/home/news.png",
        name: "校园新闻",
        path: "news"
      },
      {
        icon: "/images/home/phone.png",
        name: "校园通讯",
        path: "addresslist"
      },
      {
        icon: "/images/home/shetuan.png",
        name: "校园社团",
        path: "club"
      },
      {
        icon: "/images/home/xiaoli.png",
        name: "校历",
        path: "calendar"
      },
      {
        icon: "/images/home/ershou.png",
        name: "二手转卖",
        path: "resell"
      },
      {
        icon: "/images/home/pin.png",
        name: "拼一拼",
        path: "spell"
      },
      {
        icon: "/images/home/diushi.png",
        name: "失物招领",
        path: "lose"
      },
      {
        icon: "/images/home/love.png",
        name: "告白墙",
        path: "love"
      }
    ],
    notice:'',
    recommendInfo:[],
    pageSize:0,
    pageNum:8,
    isShowEnd: false,
    isStop: false
  },
  // 跳转对应页面
  getCurPage(e){
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.path}/index`,
    })
  },
  async onLoad() {
    const res = await request({
      url: '/api/getUserInfo'
    })
    app.globalData.userInfo2 = res.data
  },
  async getHomeInfo(){
    const data = await request({
      url: '/api/getHomeInfo'
    })
    app.globalData.isShowIssue = data.data.isShowIssue
    app.globalData.isStop = data.data.isMaintain
    if(data.data.isMaintain) {
      wxAppStop()
      this.setData({
        isStop: true
      })
    }
    this.setData({ banners: data.data.banners, notice:data.data.notice })
  },
  // 点赞
  async clickLike(e){
    const recommendInfo = this.data.recommendInfo
    let dbName,isLike
    let _id = e.detail
    // 本地点赞+1 -1操作
    recommendInfo.map(i=>{
      if(i._id == _id){
        i.isLike = !i.isLike
        i.likeNum = i.isLike ? ++i.likeNum : --i.likeNum
        dbName = i.type
        isLike = i.isLike
      }
    })
    // 发送请求
    request({
      url: `/api/like?isLike=${isLike}&id=${_id}&dbName=${dbName}`
    })
    this.setData({ recommendInfo })
  },
  // 获取最近发布的数据
  async getRecommendInfo(){
    const { pageNum, pageSize, recommendInfo } = this.data
    const res = await request({
      url: `/api/getRecommendInfo?pageSize=${pageSize}&pageNum=${pageNum}`
    })
    this.setData({recommendInfo:[ ...recommendInfo,...res.data ]})
    if(res.data.length) {
      this.setData({ pageNum: pageNum, pageSize: pageSize + pageNum  })
    }else{
      this.setData({ isShowEnd:true })
    }
    console.log(res);
  },
  onShow() {
    const userInfo = wx.getStorageSync('userInfo')
    if(!userInfo){
      wx.navigateTo({
        url: '../login/index',
      })
    }
    // 获取首页banner 校园公告信息
    this.getHomeInfo()
    this.getRecommendInfo()
    
  },
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getRecommendInfo()
  },
})
