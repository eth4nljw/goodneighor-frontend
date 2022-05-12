// pages/itemsShow/itemsShow.js
let app = getApp()

Page({
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
                page.setData({
                    item: item,
                });
                console.log(res.data.item)
                console.log(page.data.usernickname)
            }
        })  
    },
    
    /**
     * Page initial data
     */
    data: {
        user: null
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
        page.setData({
            user: app.globalData.user,
        });
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