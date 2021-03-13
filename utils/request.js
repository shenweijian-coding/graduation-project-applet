
export default  function request({ url, method, data }){
  const app = getApp()
  const domain = app.globalData.domain
  let openid = app.globalData.openid
  if(!openid) {
    openid = wx.getStorageSync('openId')
  }
  return new Promise((resolve,reject)=>{
    wx.request({
      url: domain + url,
      method: method || 'GET',
      data: data || {},
      header:{
        Cookie:openid
      },
      success: res=>resolve(res.data),
      fail: reject
    })
  })
}