//Page Object

import { request } from "../../utils/idnex";

Page({
  data: {},

  onLoad: function (options) {
    this.getSwiperImgList();
  },

  onShow: function () {},

  // 获取轮播图数组
  getSwiperImgList() {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     console.log(result);
    //     this.setData({
    //       swiperList:result.data.message,
    //     });
    //   },
    //   fail: () => {},
    // });
    let parameter = {
      url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    };
    request(parameter).then((result) => {
      console.log(result);
      this.setData({
        swiperList: result.data.message,
      });
    });
  },
});
