// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:{
      Y:"",
      M:"",
      
    },
    zhangdan: [
      {
        date: "11-02",
        day: "星期二",
        pay: "100元",
        income: "200元",
        xiangmu:[
          {        
            id:1,
            name: "礼金",
            tips: "生日",
            money: "100元"
          }, {
            id:2,
            name: "礼金",
            tips: "购物",
            money: "100元"
          }, {
            id:3,
            name: "礼金",
            tips: "看电影",
            money: "100元"
          }, {
            id:4,
            name: "礼金",
            tips: "吃饭",
            money: "100元"
          }
        ]
      },
      {
        date: "11-02",
        day: "星期二",
        pay: "100元",
        income: "200元",
        xiangmu: [
          {
            id: 4,
            name: "礼金",
            tips: "生日",
            money: "100元"
          }, {
            id:5,
            name: "礼金",
            tips: "购物",
            money: "100元"
          }, {
            id:6,
            name: "礼金",
            tips: "看电影",
            money: "100元"
          }, {
            id:7,
            name: "礼金",
            tips: "吃饭",
            money: "100元"
          }
        ]
      },
      {
        date: "11-02",
        day: "星期二",
        pay: "100元",
        income: "200元",
        xiangmu: [
          {
            id: 8,
            name: "礼金",
            tips: "生日",
            money: "100元"
          }, {
            id:8,
            name: "礼金",
            tips: "购物",
            money: "100元"
          }, {
            id:9,
            name: "礼金",
            tips: "看电影",
            money: "100元"
          }, {
            id:10,
            name: "礼金",
            tips: "吃饭",
            money: "100元"
          }
        ]
      }     
    ],
    monthAccount:{
      monthpay: "200元",
      monthincome: "200元",
      blance: "100元",
    },
    
    nowPick:'',
    pickId:''
  },
  bindDateChange: function (e) {
    var str = e.detail.value.split("-");
    console.log(str)
    this.setData({
      date: {
        Y:str[0],
        M:str[1]
      }
    })
  },
  getdate: function () {
    var nowDate = new Date();
    console.log(nowDate)
    var y = nowDate.getFullYear();
    var m = nowDate.getMonth() + 1;
    this.setData({
      date: {
        Y: y,
        M: m
      }
    })
  },
  touchM:function(e){
    var pickId = this.data.nowPick.xiangmu[e.currentTarget.dataset.id].id;
    var nowPick = this.data.nowPick.xiangmu[e.currentTarget.dataset.id]

    this.setData({
      pickId:pickId
    })

  },
  bigtouchS:function(e){
    var i = e.currentTarget.dataset.listid;
    var nowPick = this.zhangdan[i]
    this.setData({
      nowPick:nowPick
    })
  },
  delete:function(e){
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认是否删除',
      success:function(res){
        if(res.confirm){
          console.log(this.data.nowPick)
        }
      }
    })
  },
  clear:function(e){
    this.setData({
      pickId:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdate()
    //implement
  },

  
  
})