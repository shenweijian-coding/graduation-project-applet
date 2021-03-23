// pages/discovery/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'114.891209',
    latitude:'40.772965',
    markers:[{
      latitude:'40.772965',
      longitude: '114.891209',
      iconPath:'../../images/home/diushi.png',
      callout:{
        content:'北院东校区',
        borderWidth:3,
        padding:2,
        display:'ALWAYS'
      }
    },{
    latitude:'40.772258',
    longitude: '114.891576',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'教学楼C区',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.773021',
    longitude: '114.891990',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'食堂',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.773485',
    longitude: '114.892353',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'1号楼',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.773887',
    longitude: '114.892353',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'2号楼',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.774322',
    longitude: '114.892273',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'3号楼',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.774314',
    longitude: '114.891372',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'校园超市',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.774342',
    longitude: '114.891071',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'锅炉房园通快递',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.774391',
    longitude: '114.891200',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'韵达、零食吧、冷饮店',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.774542',
    longitude: '114.890583',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'申通、中通、理发店',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.773319',
    longitude: '114.892750',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'东门',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.771355',
    longitude: '114.889679',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'西门',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.773623',
    longitude: '114.890980',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'篮球场',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  },{
    latitude:'40.773587',
    longitude: '114.889902',
    iconPath:'../../images/home/ershou.png',
    callout:{
      content:'足球场',
      borderWidth:3,
      padding:2,
      display:'ALWAYS'
    }
  }],
  btnLocation:[
    {
      id:0,
      name:"东校区东门"
    },{
      id:1,
      name: '东校区西门'
    },{
      id:2,
      name:'男生1号楼'
    },{
      id:3,
      name:'女生2号楼'
    },{
      id:4,
      name:'女生3号楼'
    },
    {
      id:5,
      name:'食堂'
    },
    {
      id:6,
      name:'教学楼'
    },
    {
      id:7,
      name:'篮球场'
    },    {
      id:7,
      name:'足球场'
    },    {
      id:7,
      name:'锅炉房园通快递'
    },{
      id:7,
      name:'申通韵达快递'
    },{
      id:7,
      name:'韵达快递'
    },{
      id:7,
      name:'校园超市'
    }
  ]
  },
  // 定位
  changeLocation(e){
    const id = e.currentTarget.dataset.id
    const markers = this.data.markers
    this.setData({longitude:markers[id].longitude,latitude:markers[id].latitude})
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