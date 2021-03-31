// component/Show/show.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type: Array,
      value:[]
    },
    path:{
      type:String,
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
    delete(e){
      this.triggerEvent('delete',e.currentTarget.dataset.id)
    },
    navDetail(e){
      wx.navigateTo({
        url: `${this.data.path}?data=${JSON.stringify(e.currentTarget.dataset.item)}`,
      })
    },
  }
})
