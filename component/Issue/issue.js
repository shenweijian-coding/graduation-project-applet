// component/issue/issue.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navPath:{
      type: String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navIssuePage(){
      console.log(app.globalData.userInfo2)
      const userInfo = app.globalData.userInfo2
      if(userInfo === null){
        wx.showModal({
          title: '提示',
          content: '请先填写个人信息在发布哦~',
          success (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/my/setting/index',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        return
      }
      wx.requestSubscribeMessage({
        tmplIds: ['sF1GNcIRY1koF-7kGTa5hqIqm92HHIxfoM3zqky8tkA'],
        success (res) { 
          console.log("订阅成功："+JSON.stringify(res))
        },
        fail(res){
          console.log("订阅失败："+JSON.stringify(res))
        }
      })
      console.log(this.data.navPath);
      wx.navigateTo({
        url: this.data.navPath,
      })
    }
  }
})
