// pages/bidsItem/bidsItem.js
let app = getApp()
Page({
    getBids: function() {
        const page = this
        wx.request({
          url: `${app.globalData.baseUrl}/users/${app.globalData.user.id}/bids`,
          method: 'GET',
          header: app.globalData.header,
          success(res) {
          console.log('bids and items', res.data)

          // console.log(bids);
          page.setData({
            bids: res.data,
          });
        },
        
      })
      },


    getItem: function(options) {
        const page = this
        const itemId = options.id
        console.log("the current item:", itemId)
        wx.request({
            url: `${app.globalData.baseUrl}/items/${itemId}`,
            method: 'GET',
            header: app.globalData.header,
            success(res) {
                const item = res.data.item;
                // const usernickname = res.data.usernickname;
                page.setData({
                    item: item,
                   // usernickname: usernickname
                });
                console.log(res.data)
            }
        })  
    },

    selectBids: function(options) {
        let selectedItemId = options.currentTarget.dataset.id
        console.log(selectedItemId)

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
        const page = this
        page.getItem(options)
        page.getBids()
        // page.getItems()

      setTimeout(()=>{
        console.log(page.data.bids)  
        console.log(page.data.items)  
      }, 2000)
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