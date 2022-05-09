// pages/itemsShow/itemsShow.js
let app = getApp()

Page({
    getItem: function(options) {
        const page = this
        const itemId = options.id
        wx.request({
            url: `${app.globalData.baseUrl}/items/${itemId}`,
            method: 'GET',
            header: app.globalData.header,
            success(res) {
                const item = res.data.item;
                const usernickname = res.data.usernickname;
                page.setData({
                    item: item,
                    usernickname: usernickname
                });
                console.log(res.data)
                console.log(page.data.usernickname)
            }
        })  
    },
    
    /**
     * Page initial data
     */
    data: {

    },

    goToBidsNew: function(e) {
        const itemId = e.currentTarget.dataset.id
        wx.reLaunch({
          url: `/pages/bidsNew/bidsNew?id=${itemId}`
        })
   },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        const page = this
        page.getItem(options)
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