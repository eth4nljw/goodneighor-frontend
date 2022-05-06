// pages/itemsNew/itemsNew.js
let app = getApp()
Page({
    bindSubmit(e) {
        let name = e.detail.value.name;
        let category = this.data.itemCategory[e.detail.value.category];
        let image_url = e.detail.value.image_url;
        let is_freebie = e.detail.value.is_freebie;
        let value = e.detail.value.value;
        let request = e.detail.value.request;
        let condition = this.data.itemCondition[e.detail.value.condition];
        let description = e.detail.value.description;
        let item = {
            name: name,
            category: category,
            image_url: image_url,
            is_freebie: is_freebie,
            value: value,
            request: request,
            condition: condition,
            description:  description
        }

        const page = this
        wx.request({
            url: `${app.globalData.baseUrl}/items`,
            method: 'POST',
            header: app.globalData.header,
            data: item,
            success() {
                //TODO redirect to item bids when done'
                wx.redirectTo({
                    url: '/pages/itemsIndex/itemsIndex'
                })
            }
            })  
        
    },
    
    /**
     * Page initial data
     */

    categoryBindPickerChange: function(e) {
        this.setData({
            category_index: e.detail.value
        })
      },

      conditionBindPickerChange: function(e) {
        this.setData({
            condition_index: e.detail.value
        })
      },


    data: {
        pickerHidden: true,
        chosen: '',
        itemCondition: ["Brand New", "In Working Condition", "Broken"],
        itemCategory: ["运动", "电器", "家具", "时尚"]
      },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {

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