//原始資料
let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];

//新增套票input,btn
const ticketName=document.querySelector("#ticketName")
const ticketImgUrl=document.querySelector("#ticketImgUrl")
const ticketRegion=document.querySelector("#ticketRegion")
const ticketPrice=document.querySelector("#ticketPrice")
const ticketNum=document.querySelector("#ticketNum")
const ticketRate=document.querySelector("#ticketRate")
const ticketDescription=document.querySelector("#ticketDescription")
const addTicketBtn=document.querySelector(".addTicketBtn")
const addTicketForm=document.querySelector(".addTicketForm")
const inputs = document.querySelectorAll("input[type=text],input[type=number],textarea,#ticketRegion");
//卡片區
const card=document.querySelector(".card")
//塞選地區選擇
const regionSearch=document.querySelector(".regionSearch")
const searchResultText=document.querySelector(".searchResultText")
//找不到網頁卡片區
const cantFindArea=document.querySelector(".cantFind-area")

//SweetAlert22
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

//validate.js
const constraints = {
  "名稱": {
    presence: {
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

//input監聽
inputs.forEach((input)=>{
  input.addEventListener("change", inputHandler)
})

addTicketForm.addEventListener("submit",addTicketHandler)  //新增套票監聽
regionSearch.addEventListener("change",regionSearchHandler) //地區塞選監聽

//初始化
init()
function init(){
  renderData()
}

//新增套票
function addTicketHandler(e){
  e.preventDefault();
  let dataObj={};
  if(!ticketName.value || !ticketImgUrl.value ||!ticketRegion.value||!ticketPrice.value||!ticketNum.value||!ticketRate.value||!ticketDescription.value){
    Swal.fire(
        "新增套票失敗", //標題 
        "您所輸入的資料不完整!", //訊息內容(可省略)
        "error" 
    );
  }else{
    dataObj={
      id:new Date().getTime(),
      name:ticketName.value,
      imgUrl:ticketImgUrl.value,
      area:ticketRegion.value,
      price:ticketPrice.value,
      group:ticketNum.value,
      rate:ticketRate.value,
      description:ticketDescription.value
    }
    data.push(dataObj)
    renderData()
    addTicketForm.reset();
    Toast.fire({
      icon: 'success',
      title: '新增套票成功'
      })
  }
}

//畫面渲染
function renderData(newData=data){
  searchResultText.textContent=newData.length
  if(newData.length===0){
    cantFindArea.classList.remove("hidden")
  }else{
    cantFindArea.classList.add("hidden")
  }
  const html=newData.map((item)=>
  `<li class="col-span-12 sm:col-span-6 md:col-span-4 shadowCard" >
    <div class="relative">
      <a href="#1" class="overflow-hidden"><img src="${item.imgUrl}" alt="" class="h-[180px] object-cover w-full"></a>
      <p class="borderCardTag ticketCardRegion">${item.area}</p>
      <p class="borderCardTag ticketCardRank">${item.rate}</p>
      <i class="fa-regular fa-circle-xmark delete delete-btn" data-id=${item.id}></i>
    </div>
    <div class="flex flex-col justify-between h-[296px] px-4 pt-4 pb-3">
      <div class="">
          <h3 class="pb-1 border-b-2 border-travel-sixth  mb-3.5"><a href="" class="ticketCardName ">${item.name}</a></h3>
        <p class="text-travel-second">${item.description}</p>
      </div>
      <div class="flex justify-between font-bold">
        <div class="flex items-center">
          <i class="fas fa-exclamation-circle mr-1.25"></i>
          <h4>剩下最後<span>${item.group}</span>組</h4>
        </div>
        <p class="flex items-center">TWD<span class="text-4xl ml-1">$${item.price}</span></p>
      </div>
    </div>
  </li>
  `).join("")
  card.innerHTML=html;
  deleteCard()
}

//地區塞選
function regionSearchHandler(){
  const newData=data.filter((item)=>{
    if(item.area===this.value){
      return item
    }else if(!this.value){
      return item
    }
  })
  renderData(newData)
}

//inputHandler
function inputHandler(){
  this.nextElementSibling.textContent="";
  let errors =validate(addTicketForm,constraints)
  if(errors){
    Object.keys(errors).forEach((item)=>{
      document.querySelector(`.${item}`).textContent=errors[item]
    })
  }
}

//刪除卡片
function deleteCard(){
  //deleteBtn監聽
  const deleteBtn=document.querySelectorAll(".delete")
  deleteBtn.forEach((item)=>{
  item.addEventListener("click",deleteBtnHandler)
  })

  function deleteBtnHandler(e){
    Swal.fire({
    title: '你確定要刪除嗎?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        '刪除成功',
        'success'
      )
      let deleteId=Number(e.target.dataset.id);
      const findIDindex=data.findIndex((item)=>item.id===deleteId)
      const newData=data.filter((item)=>item.id!==deleteId)
      data.splice(findIDindex,1)
      renderData(newData)
    }
  })
  }
}