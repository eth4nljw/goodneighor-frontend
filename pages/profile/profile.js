// pages/profile/profile.js
let app = getApp()

Page({
    getItem: function(options) {
        const page = this
        const userId = app.globalData.user.id
        console.log("getItem")
        wx.request({
            url: `${app.globalData.baseUrl}/users/${userId}/user_items`,
            method: 'GET',
            header: app.globalData.header,
            success(res) {
                const items = res.data;
                page.setData({
                    items: items
                });
                console.log(res.data)
            }
        })  
    },

    goToBidsItem: function(e) {
        const itemId = e.currentTarget.dataset.id
        wx.navigateTo({
          url: `/pages/bidsItem/bidsItem?id=${itemId}`
        })
   },
    
    /**
     * Page initial data
     */
    data: {
        
    },
    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        const page = this
        page.getItem()
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