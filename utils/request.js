
function request({ url, method, data }){
  wx.showLoading({
    title: '请求中...',
  })
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
      fail: reject,
      complete:()=>{
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  })
}
function uploadFile({ url }){
  wx.showLoading({
    title: '上传中...',
  })
  const app = getApp()
  const domain = app.globalData.domain
  let openid = app.globalData.openid
  if(!openid) {
    openid = wx.getStorageSync('openId')
  }
  return new Promise((resolve,reject)=>{
    wx.uploadFile({
      filePath: url,
      name: 'file',
      url: domain + '/api/upload',
      header:{
        Cookie:openid
      },
      success:res=>resolve(res.data),
      fail:reject,
      complete:()=>{
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  })
}
module.exports = {
  request,
  uploadFile
}