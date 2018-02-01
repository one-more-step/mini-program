//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    currentTab:'meets',
    list: [{ id: 1, title: 'jQ源码解析', owner: 'luffy', summary: '此次话题是围绕jQ源码来逐步展开的，其中包括基础架构解读和部分DOM源码', date: '2017-02-04' }, { id: 2, title: 'jQ源码解析', owner: 'Simon', summary: 'sdfsdfsdfsdfsdf', date: '2017-02-04' }, { id: 3, title: 'jQ源码解析', owner: 'luffy', summary: 'sdfsdfsdfsdfsdf', date: '2017-02-04' }, { id: 4, title: 'jQ源码解析', owner: 'luffy', summary: 'sdfsdfsdfsdfsdfsdfsdfsdfsd', date: '2017-02-04' }],
    motto: 'Hello World!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // openPic:function(){
  //   wx.chooseImage({
  //     count:1,
  //     sizeType:['original','compressed'],
  //     sourceType:['album','camera'],
  //     success:function(res){
  //       console.log(res);
  //     }
  //   })
  // },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  cutBar:function(event){
    //to do add or remove class
    let name = event.currentTarget.dataset.name;
    this.setData({ currentTab:  name=='meets'?'meets':'mine'})
  },
  jumpDetail:function(){
      wx.navigateTo({
        url: '../detail/detail'
      })
  },
  clickMe:function(){
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
    console.log('onload ready,request data all');
    wx.request({
      url: 'http://luffying.com/welcome/get_more_shows?offset=3',
      data: {
      },
      success: function (res) {
        console.log('request data successfully1');
        console.log(res);
        // that.setData({
        //   banners: banners
        // });
      }
    })
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
