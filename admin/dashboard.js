let loginBtn=document.getElementById("login");
let email=document.getElementById("username");
let password=document.getElementById("password");
let tbody = document.getElementById("tbody");
    
let User=JSON.parse(localStorage.getItem("userdetails"))
if(User === null) User = [];
getdata(User)
function getdata(data){
    data.forEach((element)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.mail
        let td2 = document.createElement("td");
        td2.innerText = element.name
        let td3 = document.createElement("td");
        td3.innerText = element.number
        tr.append(td1,td2,td3)
        tbody.append(tr)
    })
}