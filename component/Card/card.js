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
      console.log(e);
      wx.navigateTo({
        url: `./detail/index?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
      })
    }
  }
})
