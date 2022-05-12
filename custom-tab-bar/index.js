Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      list: [{
        pagePath: "/pages/itemsIndex/itemsIndex",
        iconPath: "/image/index.png",
        selectedIconPath: "/image/indexb.png",
      }, {
        pagePath: "/pages/profile/profile",
        iconPath: "/image/mineb.png",
        selectedIconPath: "/image/mine.png",
        // text: "我的bids"
      },{
        pagePath: "/pages/itemsNew/itemsNew",
        iconPath: "/image/addb.png",
        selectedIconPath: "/image/add.png",
      },{
            pagePath: "/pages/bids/bids",
            iconPath: "/image/bidsb.png",
            selectedIconPath: "/image/bids.png",
        }]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.reLaunch({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })