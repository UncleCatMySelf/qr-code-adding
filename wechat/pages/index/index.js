import { Index } from 'index-model.js';
var index = new Index();
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    pass:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 登录操作
   */
  login:function(event){
    console.log(this.data);
    index.login(this.data.name, this.data.pass, (res) => {
      console.log(res);
      if(res.code == 200){
        wx.navigateTo({
          url: '../home/home?name='+res.data,
        })
      }
    })
  },

  /**
   * 注册操作
   */
  regist:function(event){
    console.log(this.data);
    index.resgist(this.data.name,this.data.pass, (res) => {
      console.log(res);
    })
  },

  /**
   * 绑定用户名称
   */
  getName:function(e){
    var name = e.detail.value;
    this.setData({
      name:name
    })
  },

  /**
   * 绑定用户密码
   */
  getPass:function(e){
    var pass = e.detail.value;
    this.setData({
      pass:pass
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