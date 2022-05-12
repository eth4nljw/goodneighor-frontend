// index.js
// 获取应用实例
const app = getApp()

Page({

 /** 
    * Bindtap for go to the item show
    */
   goToItemsIndex: function(e) {
    wx.reLaunch({
      url: `/pages/itemsIndex/itemsIndex`
    })
},
// goToItemsIndex:function(event){
//     wx.switchTab({
//       url: '../index/index',
//     })
// },


  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      })
      
    }


    
  },

  onReady: function () {

    //app.globalData.user.nickname = 'aaa'
    //console.log(app.globalData.user)
    
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.userInfo = res.userInfo;
        wx.reLaunch({
          url: `/pages/itemsIndex/itemsIndex`
        })
      }
    })
  },
})
