// pages/itemsShow/itemsShow.js
let app = getApp()

Page({

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
        const page = this
        const itemId = options.id
        const item = `app.globalData.baseUrl}/items/${itemId}`
        this.setData(item)
        console.log("item:" + item)

        wx.request({
            url: `${app.globalData.baseUrl}/items/${itemId}`,
            method: 'GET',
            header: app.globalData.header,
            success(res) {
            console.log("res:", res)
            const item = res.data;
            page.setData({
                item: item,
               });
            }
        })
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