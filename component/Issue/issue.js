// component/issue/issue.js
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
      console.log(this.data.navPath);
      wx.navigateTo({
        url: this.data.navPath,
      })
    }
  }
})
