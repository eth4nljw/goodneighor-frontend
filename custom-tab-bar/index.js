Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      list: [{
        pagePath: "/pages/itemsIndex/itemsIndex",
        iconPath: "/image/clothes.png",
        selectedIconPath: "/image/sport.png",
        text: "主页"
      }, {
        pagePath: "/pages/index/index",
        iconPath: "/image/study.png",
        selectedIconPath: "/image/homeware.png",
        text: "测试"
      }]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })