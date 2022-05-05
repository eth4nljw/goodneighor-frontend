// pages/itemsIndex/itemsIndex.js

let app = getApp()

Page({

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
      });
    }
  })
  },
  
    /** 
    * Bindtap for go to the item show
    */
   goToItemShow: function(e) {
        const itemId = e.currentTarget.dataset.id
        wx.navigateTo({
          url: `/pages/itemsShow/itemsShow?id=${itemId}`
        })
   },
    /**
     * Page initial data
     */
    data: {
        items: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
      let page = this;
      if (!app.globalData.header) {
        wx.event.on("loginsuccess", page, page.getItems)
      } else {
        page.getItems()
      }           
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})