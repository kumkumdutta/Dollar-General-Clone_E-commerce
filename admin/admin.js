let username = document.getElementById("username");
let password = document.getElementById("password");

// let anchr = document.getElementById("anchr")
// let form = document.getElementById("myform")
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
  
    
    if(username.value==="admin" && password.value === "admin"){
      console.log("y")
      anchr.setAttribute("href","./dashboard.html")
    }else{
        alert("wrong credential")
    }
})


