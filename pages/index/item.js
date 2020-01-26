// pages/index/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    var url = "https://douban.uieee.com/v2/movie/subject/".concat(options.id)
    app.request(url)
      .then(data => {
        console.log(data)
        this.setData({ movie: data, loading: false});
        wx.setNavigationBarTitle({ title: data.title})
      }).catch(exception => {
        console.error(exception)
      })
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