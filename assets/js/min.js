

     let input1=document.getElementById("inputFood");
     let button=document.getElementById("inputButton");
     let list=document.getElementById("list-group");
     let duplidiv=document.getElementById("duplicate")
//  fetch input from localstorage
document.addEventListener("DOMContentLoaded",()=>{
    let fetchedItem=[...JSON.parse(localStorage.getItem("fooditem"))]     
     fetchedItem.forEach((item) => {
          list.innerHTML += `<li class="list-item">${item.fooditem}
          <div onclick="removeitem(event)"><i class="fa-solid fa-xmark float-end"></i></div></li>`})
     })


let action=()=>{localStorage.setItem("fooditem",
          JSON.stringify([...JSON.parse(localStorage.getItem("fooditem")||"[]"),{fooditem:input1.value},]))}
               button.addEventListener("click",action)

     input1.addEventListener("keyup",()=>{
          if(event.key==="Enter")
          {
               action()
          }
          else if(event.key==="keyZ")
          {
               input1.value=""
          }
     })


     // / remove item from local storage
 function removeitem(event)
 {
     let targetlist=(event.target.parentNode.parentNode);
     targetlist.remove()
     
// from localStorage
let fetchedItem=[...JSON.parse(localStorage.getItem("fooditem"))]  

 fetchedItem.forEach((item)=>{
if(item.fooditem===targetlist.innerText)
{
    fetchedItem.splice(fetchedItem.indexOf(item),1) 
}

 })

 

 localStorage.setItem("fooditem",JSON.stringify(fetchedItem))

}

//      const FormEl=document.forms.feedbackform;
//     //  const {fullname,type,email,desc}=FormEl.elements
// const countryEl=FormEl.elements.country

// const optionEl=document.createElement("option")
// optionEl.text="dubai"
// optionEl.value="DUB"
// countryEl.add(optionEl)
// countryEl.remove(2)

// countryEl.addEventListener("change",(e)=>{
//     let index=countryEl.options.selectedIndex
//     console.log(countryEl.options[index].innerText)
// })





    
    
    

   
    
   
     // const button=document.getElementById("btn")


    
       
       

     

//      FormEl.addEventListener("submit",(event)=>{
// event.preventDefault();
// // const formData=new FormData(FormEl)
// // const stringdata= new URLSearchParams(formData).toString()
// // const jsonData= JSON.stringify(Object.fromEntries(formData))
// //  console.log(`json data is ${jsonData}`)
          
//      })


 

 

          
     








//     let span=document.querySelector("header span")
//    let handle=()=>
//     {
//          alert("msg by document alert")
         
//     }

// span.addEventListener("click",handle,{once:true})
// document.addEventListener("contextmenu",handle,{once:true})

// const form=document.querySelector("form")
// const formInput=document.querySelector("form input")
// const formButton=document.querySelector("form input[type='submit']")
// const formcheck=document.querySelector("form input[type='checkbox']")
// console.log(formInput.value)
// form.addEventListener("submit",(event)=>{
//      if(formInput.value.length>=8)
//      { alert("enter small name within 8 character")}
//      if(!formcheck.checked)
//      {alert("check terms and condition")
//      event.preventDefault();}
//      else{alert("form submitted")}})

// const tableEl=document.getElementById("table")
// let selectedItem1;
// tableEl.addEventListener("click",(event)=>{
//      let target=event.target;
// let selectedRow=target.closest("tr");
//    if(selectedItem1 != undefined)
// {selectedItem1.classList.remove("active")}
// selectedItem1=selectedRow;
// selectedRow.classList.add("active")})

// donate
// const donateButton=document.getElementById("DonateBtn")
// const submit=document.getElementById("submit")


// const formEl=document.getElementById("donateForm1")


// donateButton.addEventListener("click",()=>{
//      formEl.hidden = !formEl.hidden


// })

// const formInput=document.querySelector("form input")
// // console.log(formInput)
// submit.addEventListener("click",()=>{
//      alert(`thanks for the donation amount $ ${formInput.value}`)
// })



// document.addEventListener("mousedown",(event)=>{
// switch (event.which) {
//      case 1:
//           console.log("mouse left is clicked")
//           break;
//      case 2:
//           console.log("middle click")
//           break;
//      case 3:
//           console.log("right click")
//           break;     

//      default:
//           console.log("unknown click")
//           break;
// }
// })




