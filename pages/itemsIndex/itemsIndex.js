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
    *              BINDTAPS
    */


    // Bindtap for go to item show
   goToItemShow: function(e) {
        const itemId = e.currentTarget.dataset.id
        wx.reLaunch({
          url: `/pages/itemsShow/itemsShow?id=${itemId}`
        })
   },

  // Bindtap for go to item new
   goToItemNew: function(e) {
        wx.reLaunch({
          url: `/pages/itemsNew/itemsNew`
        })
   },
   goToItemsStudy: function(e) {
       const page = this
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
      console.log(page.data.items)  
      setTimeout(()=>{
        console.log(page.data.items)  
      }, 2000)
      
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