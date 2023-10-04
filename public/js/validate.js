
//validate.js
export const constraints = {
  "名稱": {
    presence: 
    {
      message: "是必填欄位"
    },
  },
  "圖片網址":{
    presence: {
      message: "是必填欄位"
    },
   
  },
  "景點地區":{
    presence: {
      message: "是必填欄位"
    },
  },
  "金額":{
    presence: {
      message: "是必填欄位"
    },
    numericality: {
      greaterThan: 0,
      message: "必須大於 0"
    }
  },
  "組數":{
    presence: {
      message: "是必填欄位"
    },
    numericality: {
      greaterThan: 0,
      message: "必須大於 0"
    }
  },
  "星級":{
    presence: {
      message: "是必填欄位"
    },
    numericality: {
      greaterThanOrEqualTo: 1,
      lessThanOrEqualTo: 10,
      message: "必須符合 1-10 的區間"
    }
  },
  "描述":{
    presence: {
      message: "是必填欄位"
    },
    length: {
      maximum: 100,
      message: "限100字"
    }
  },
};
