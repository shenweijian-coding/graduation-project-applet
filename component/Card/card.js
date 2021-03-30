// component/Card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:[],
      value: ''
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
    // 导航到详情
    navToDetail(e){
      wx.navigateTo({
        url: `/pages/detail/index?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
      })
    },
    onShareAppMessage: function () {
      return {
       title: '弹出分享时显示的分享标题',
       desc: '分享页面的内容',
       path: '/page/user?id=123' // 路径，传递参数到指定页面。
      }
     }
  }
})
