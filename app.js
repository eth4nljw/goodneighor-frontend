// app.js

import event from "./utils/event"
wx.event = event

App({
  onLaunch() {
      const app = this
    // // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        if (res.code) {
            wx.request({
              url: `${app.globalData.baseUrl}/login`,
              method: 'post',
              data: {
                code: res.code
              },
              success(res) {
                app.globalData.header = res.data.headers // save JWT to be used when making a request
                app.globalData.user = res.data.user
                console.log("login success", app.globalData.user)
                wx.event.emit("loginsuccess")
                
              }
            })
          } else {
            console.log("wx login failed")
          }
      }
    })
  },
  globalData: {
    userInfo: null,
    // baseUrl: "http://localhost:3000/api/v1",
    baseUrl: "https://haolinju-api.wogengapp.cn/api/v1",
    header: null,
    user: null,
    items: null
  }
})

