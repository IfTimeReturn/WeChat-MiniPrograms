// pages/add/add.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    payList: ['吃饭', '打车', '购物', '零食', '住房', '旅游', '办公', '学习', '水电'],
    incomeList: ['吃饭', '打车', '购物', '零食', '住房', '旅游', '办公', '学习', '吃饭', '打车', '购物', '零食'],
    date:'',
    itemId:'',
    nowItem:'',
    money:'',
    tips:''
    
  },
  change: function (e) {
    this.setData({
      changeId: e.target.dataset.id,
      itemId:'',
      nowItem:''
    })
  },
  
  changeDate: function (e) {
    
    this.setData({
      date: e.detail.value
    })
  },

  
  getDate:function(){
    var nowDate =new Date();
    var y=nowDate.getFullYear();
    var m=nowDate.getMonth()+1;
    var d=nowDate.getDate();
    var date=y+"-"+m+"-"+d
    this.setData({
      date:date
    })

  },
  pick:function(e){
    
    if(this.data.changeId==0){
      //pay
      let item = this.data.payList[e.target.dataset.id]
      this.setData({
        nowItem: item
      })
    }else{
      //income
     
      this.setData({
        nowItem: this.data.incomeList[e.target.dataset.id]
      })
    }
    this.setData({
      itemId: e.target.dataset.id
    })
  },
  formsubmit:function(e){
    if (this.data.nowItem != '' && e.detail.value.money != ''){
      if(this.data.changeId==0){
        console.log("send cost",sendData)
      }else{
        console.log("send income",sendData)
      }
      let sendData={
        money:e.detail.value.money,
        tips:e.detail.value.tips,
        date:this.data.date,
        name:this.data.nowItem
      }   
    }
    
    var that=this
    wx.showModal({
      title:'提示',
      content:'success',
      showCancel:false,
      success:function(res){
        if(res.confirm){

          that.setData({
            nowItem:'',
            tips:'',
            money:'',
            itemId:''

          })
        }
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDate()
  },

  
})