const buttonTxt=document.getElementById("buttonTxt").addEventListener("click",()=>{
    let inputTxt=document.getElementById("inputTxt").value;
    let retext=Number(inputTxt)
    fetch(`https://jsonplaceholder.typicode.com/comments`)
  .then(response => response.json())
  .then((data=>{
      let datan=data.slice(0,retext)
       calculate(datan)
  }))
})

function calculate(data) {
  
  let val=""
  data.forEach((ele)=>{
  
    val=val+`<div id="mar">
    <h2> Name: ${ele.name}</h2>
    <button class="btn btn-success " onClick="ditlesfun(${ele.id})">${ele.id} Click Detels</button>
    </div>`
    let selediv=document.getElementById("div1")
    selediv.innerHTML=val
   
    
    document.getElementById("inputTxt").value=""
   })
}

function ditlesfun(userid) {
  fetch(`https://jsonplaceholder.typicode.com/comments/${userid}`)
  .then(response => response.json())
  .then((user)=>{
    let div2=document.getElementById("div2")
    div2.innerHTML=`
    <h4>User: ${user.id}</h4>
    <h5>Email: ${user.email}</h5>
    <h6>Description: ${user.body}</h6>
    `
    
  })
        
}


