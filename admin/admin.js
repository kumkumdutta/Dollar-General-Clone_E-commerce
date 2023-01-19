let loginBtn=document.getElementById("login");
let email=document.getElementById("username");
let password=document.getElementById("password");
    let add=[
        {
        email:"mrunalibind123@gmailcom",
        password:"Pass@123"
        }
    ]
let adminUser=[]
loginBtn.addEventListener("submit",(e)=>{
    e.preventDefault()
    // let admin={
    //     email:email.value,
    //     password:password.value
    // }
    // if(admin.email==add[0].email && admin.password==add[0].password){
    //     adminUser.push(admin)
    //     console.log(adminUser)
    // }
})