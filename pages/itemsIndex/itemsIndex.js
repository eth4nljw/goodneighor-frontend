// pages/itemsIndex/itemsIndex.js

let app = getApp()

Page({

  getItems: function() {
    const page = this
    this.setData({itemCategory: "全部"})
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
    *              BINDTAPS
    */


    // Bindtap for go to item show
   goToItemShow: function(e) {
        const itemId = e.currentTarget.dataset.id
        console.log(itemId)
        wx.navigateTo({
          url: `/pages/itemsShow/itemsShow?id=${itemId}`
        })
   },

  // Bindtap for go to item new
   goToItemNew: function(e) {
        wx.navigateTo({
          url: `/pages/itemsNew/itemsNew`
        })
   },
   goToItemsStudy: function(e) {
       const page = this
       this.setData({itemCategory: "学习"})
       console.log(e.currentTarget)
       console.log(e.target.data)
       wx.request({
           url: `${app.globalData.baseUrl}/items?cate=学习`,
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
    goToItemsSport: function(e) {
        const page = this
        this.setData({itemCategory: "体育"})
        wx.request({
            url: `${app.globalData.baseUrl}/items?cate=体育`,
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
     goToItemsEA: function(e) {
        const page = this
        this.setData({itemCategory: "电器"})
        wx.request({
            url: `${app.globalData.baseUrl}/items?cate=电器`,
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
     goToItemsHW: function(e) {
        const page = this
        this.setData({itemCategory: "家具"})
        wx.request({
            url: `${app.globalData.baseUrl}/items?cate=家具`,
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
     goToItemsF: function(e) {
        const page = this
        this.setData({itemCategory: "时尚"})
        wx.request({
            url: `${app.globalData.baseUrl}/items?cate=时尚`,
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

     searchName: function(e) {
      const page = this
      const name = e.detail.value
      console.log(name)
      wx.request({
          url: `${app.globalData.baseUrl}/items?query=${name}`,
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
     * Page initial data
     */
    data: {
        items: [],
        itemCategory: ""
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