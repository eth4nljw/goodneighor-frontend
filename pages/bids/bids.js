// pages/bids/bids.js
let app = getApp()
Page({

    getBids: function() {
        const page = this
        wx.request({
          url: `${app.globalData.baseUrl}/users/${app.globalData.user.id}/bids`,
          method: 'GET',
          header: app.globalData.header,
          success(res) {
             console.log('bids and items！！')
            console.log(res.data)
            page.setData({
                bids: res.data,
                user_id: app.globalData.user.id,
            });
            console.log(page.data.bids)
        },
        
      })
      },

      getItems: function() {
        const page = this
        wx.request({
          url: `${app.globalData.baseUrl}/items`,
          method: 'GET',
          header: app.globalData.header,
          success(res) {
          const items = res.data;
          page.setData({
            items: items,
            user: app.globalData.user
          });
          
        }
        
      })
    
    
      },



    /**
     * 页面的初始数据
     */
    data: {
      user: app.globalData.user
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let page = this;
      
        page.getBids()  
        page.getItems()
        setTimeout(() => {
          console.log(page.data.user.id);
      }, 2000) // 等待后跳转页面
        
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})