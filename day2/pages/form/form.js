// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeId:"0",
    year:{ 
      date:['2012', '2013', '2014', '2015', '2016', '2017'],
      income: [100, 200, 150, 150, 180, 170],
      pay: [120, 130, 100, 110, 120, 100],
      incomeRanks:[
        {
          name:"书籍",
          rank:"23%",
          money:"100",
        },
        {
          name: "旅行",
          rank: "23%",
          money: "100",
        },
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
      ],
      payRanks:[
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
        {
          name: "旅行",
          rank: "23%",
          money: "100",
        },
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
      ],
      },
    month:{
      date: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      income: [100, 200, 150, 150, 180, 170,100,100,100,100,100,100],
      pay: [120, 130, 100, 110, 120, 100],
      incomeRanks: [
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
        {
          name: "旅行",
          rank: "23%",
          money: "100",
        },
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
      ],
      payRanks: [
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
        {
          name: "旅行",
          rank: "23%",
          money: "100",
        },
        {
          name: "书籍",
          rank: "23%",
          money: "100",
        },
      ],
    }
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var wxCharts = require('../../wx-charts-master/wx-charts-master/dist/wxcharts-min.js')
    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: this.data.month.date,
      series: [{
        name: '收入',
        data:this.data.month.income,
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '支出',
        data: this.data.month.pay,
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '金额',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: wx.getSystemInfoSync().screenWidth,
      height: 300
    });
    new wxCharts({
      canvasId: 'lineCanvas1',
      type: 'line',
      categories: this.data.year.date,
      series: [{
        name: '收入',
        data: this.data.year.income,
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '支出',
        data: this.data.year.pay,
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '金额',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: wx.getSystemInfoSync().screenWidth,
      height: 300
    });
  },
  change:function(e){
    this.setData({
      changeId:e.target.dataset.id
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