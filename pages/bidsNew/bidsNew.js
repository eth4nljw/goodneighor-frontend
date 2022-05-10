// pages/bidsNew/bidsNew.js
let app = getApp()
Page({
    bindSubmit(e) {

        let note = e.detail.value.note;
        let myItemId = e.detail.value.myItem;
        let bid = {

        owner_item_id: this.data.itemId,
        taker_item_id: myItemId,
        "status": "pending",
        "note": note,
        }


        wx.showToast({
            title: "提交成功", // 提示的内容
            icon: "success", // 图标，默认success
            image: "", // 自定义图标的本地路径，image 的优先级高于 icon
            duration: 3000, // 提示的延迟时间，默认1500
            mask: false, // 是否显示透明蒙层，防止触摸穿透
            success: function () {
                console.log("接口调用成功的回调函数");
            },
            fail: function () {
                console.log("接口调用失败的回调函数");
            },
            complete: function () {
                console.log("接口调用结束的回调函数（调用成功、失败都会执行）");
            }
        })

        const page = this


        wx.request({
            url: `${app.globalData.baseUrl}/users/${app.globalData.user.id}/bids`,
            method: 'POST',
            header: app.globalData.header,
            data: bid,
            success() {
                //TODO redirect to item bids when done'
                setTimeout(() => {
                    wx.navigateTo({
                        url: `/pages/bids/bids`
                    })
                }, 2000) // 等待后跳转页面
            }
        })



    },

    myItems: function() {
        const page = this
        wx.request({
          url: `${app.globalData.baseUrl}/users/${app.globalData.user.id}/user_items`,
          method: 'GET',
          header: app.globalData.header,
          success(res) {
          const myItems = res.data;
          page.setData({
            myItems: myItems,
          });
        }
      })
      },




    getItem: function (options) {
        const page = this
        const itemId = options.id
        const userId = app.globalData.user.id
        
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
     * 页面的初始数据
     */
    data: {
        user: app.globalData.user,
        itemId: 0

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const page = this
        const itemId = options.id
        page.setData({
            itemId: itemId
        });
        console.log(itemId)
        page.getItem(options)
        page.myItems(options)
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