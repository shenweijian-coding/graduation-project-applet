// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    banners:[
      {
        picUrl: 'http://211.81.208.4/uploads/img1/20200406/5e956cbeb5b7e.jpg'
      }
    ],
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
    noticeList: [
      {
        title: '以 Button 组件为例，只需要在app.json或index.json中配置 Button 对应的路径即可。'
      }
    ]
  },
  // 跳转对应页面
  getCurPage(e){
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.path}/index`,
    })
  },
  onLoad() {

  },
  onShow() {
    const userInfo = wx.getStorageSync('userInfo')
    if(!userInfo){
      wx.navigateTo({
        url: '../login/index',
      })
    }
  }
})
