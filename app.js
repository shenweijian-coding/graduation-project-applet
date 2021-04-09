// app.js
App({
  globalData: {
    // domain: 'http://127.0.0.1:3000',
    domain: 'https://yuanxiaoshen.com:3001',
    openid: '',
    userInfo: null,
    isShowIssue: true
  },
  onLaunch() {
    console.log('小程序执行');
    // 登录获取code及 openid
    this.checkSession()
    // 缓存取出用户数据
    this.getUserInfo()
  },
  checkSession() {
    const _this = this
    const domain = this.globalData.domain
    wx.checkSession({
      success(res) {
        console.log('checkSession', res);
      },
      fail(error) {
        console.log('checkSession error', error);
        // 没有需要去登录获取
        // 临时登录凭证code只能使用一次
        // 调用login时 会更新session_key，使原来的失效
        wx.login({
          success(response) {
            console.log('login success', response);
            wx.request({
              url: `${domain}/wx/login`,
              data: {
                code: response.code
              },
              success(result) {
                console.log('登录成功后返回的信息', result.data)
                // 将获取的openId存入缓存
                const { openid } = result.data.data
                _this.globalData.openid = openid
                wx.setStorageSync('openId', openid)
              },
              fail(err) {
                console.log('失败返回的信息', err);
              }
            })
          },
          fail(err) {
            console.log('login error', err);
          }
        })
      }
    })
  },
  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo') || null
    const openid = wx.getStorageSync('openId') || null
    this.globalData.userInfo = userInfo
    this.globalData.openid = openid
  }
})
