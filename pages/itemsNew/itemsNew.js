// pages/itemsNew/itemsNew.js
let app = getApp()
Page({
    bindSubmit(e) {
        let name = e.detail.value.name;
        let category = this.data.itemCategory[e.detail.value.category];
        let is_freebie = e.detail.value.is_freebie;
        let request = e.detail.value.request;
        let condition = this.data.itemCondition[e.detail.value.condition];
        let description = e.detail.value.description;
        if (!name || this.data.category_index == 0 || !condition || !description || this.data.imgSrc == '/image/photo.png'
        ){
          wx.showToast({
            title: '输入信息不完整',
            icon: 'error',
            duration: 2000
          })
          return
        }
        let item = {
            name: name,
            category: category,
            is_freebie: is_freebie,
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
            success(res) {
                console.log('INSIDE UPLOAD.JS', res.data.id)
                const itemId = res.data.id
                //TODO redirect to item bids when done'
                wx.uploadFile({
                    url: `${app.globalData.baseUrl}/items/${itemId}/upload`,
                    filePath: page.data.imgSrc,
                    name: 'file',
                    header: app.globalData.header,
                    success(res) {
                        wx.reLaunch({
                            url: `/pages/profile/profile`,
                          })
                    },
                    fail(err) {
                      console
                      console.log(err)
                    }
                  })
            }
        })  
        
    },
    
    chooseImg() {
        const page = this;
        // console.log('page', page);
        wx.chooseMedia({
          count: 1,
          mediaType: ['image'],
          sourceType: ['album', 'camera'],
          maxDuration: 30,
          camera: 'back',
          success(res) {
            // console.log('res', res)
            const imgInfo = res.tempFiles[0];
            console.log(imgInfo);
            page.setData ({
              imgSrc: res.tempFiles[0].tempFilePath,
            })
            console.log(page.data.imgSrc);
            wx.showToast({
              title: "uploaded",
              icon: 'success',
              duration: 1000
          });
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

      bindBack: function(){
        console.log('pressed')
        wx.switchTab({
          url: `/pages/itemsIndex/itemsIndex`
        })
      },

      conditionBindPickerChange: function(e) {
        this.setData({
            condition_index: e.detail.value
        })
      },

      freebieBindPickerChange: function(e){
          console.log(e.detail.value);
        this.setData({
            is_freebie_state: e.detail.value
        })
      },
    data: {
        pickerHidden: true,
        chosen: '',
        itemCondition: ["选择", "全新", "二手", "损坏"],
        itemCategory: ["选择", "运动", "电器", "家具", "时尚","学习"],
        is_freebie_state: false,
        // is_freebie_state: true,
        imgSrc: '/image/photo.png',
        category_index: 0,
        condition_index: 0
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