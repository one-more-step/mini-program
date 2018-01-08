//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{ title: 'jQ源码解析', owner: 'luffy', summary: '此次话题是围绕jQ源码来逐步展开的，其中包括基础架构解读和部分DOM源码', date: '2017-02-04' }, { title: 'jQ源码解析', owner: 'Simon', summary: 'sdfsdfsdfsdfsdf', date: '2017-02-04' }, { title: 'jQ源码解析', owner: 'luffy', summary: 'sdfsdfsdfsdfsdf', date: '2017-02-04' }],
    motto: 'Hello World!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe:function(){
    console.log('------')
    this.setData({motto: 'hahaha'})
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
