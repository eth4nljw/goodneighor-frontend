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
          const bids = res.data;
          // console.log(bids);
          page.setData({
            bids: res.data,
          });
        },
        
      })
      },

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let page = this;
     
        page.getBids()

       

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
        console.log(this.data.bids)
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