let container1 = document.getElementById("container1");
let container = document.getElementById("container");
let sum=0;
let checkout=document.getElementById("checkout");
let cartPro=document.getElementById("check")
    let cartData = JSON.parse(localStorage.getItem("cartitem"));
    if(cartData === null){
        cartData=[];
        
    }
    if (cartData.length>0){
        for(let i=0;i<cartData.length;i++){
            sum+=cartData[i].rupees;
        }
        console.log(typeof sum)
        
        container.innerHTML=`<h1>your cart total is :- ₹. ${sum}</h1>`
    
        checkout.innerHTML=`
        <div>
            <p>PRODUCT DETAIL</p>
            <hr>
            <div class="priceDisplay">
                <div><p>Delivery Charges: </p></div>
                <div><h3>FREE<span></h3>
            </div>
            
        </div>
        <div>
                <hr>
                <div class="priceDisplay">
                    <div><h3>Total Payable: </h3></div>
                    <div><h2>₹ ${sum}</h2></div>
                </div>
                <div><button id="continue">Continue</button></div>
        </div>
        `
    }
    let continueBtn=document.getElementById("continue");
    continueBtn.addEventListener("click",()=>{
        console.log("checkout")
    })

    displayProduct(cartData)
   function displayProduct(data){
    

    
    // container.innerHTML=;
    
    container1.innerHTML=null;


    data.forEach(element => {
            let card = document.createElement("div");
            card.classList.add("card")
            let imagecard = document.createElement("div")
            imagecard.classList.add("imagecard")
            let image = document.createElement("img");
            imagecard.append(image)
            
            image.setAttribute("src",element.img);
            let detailscard = document.createElement("div")
            detailscard.classList.add("detailscard")
            let name = document.createElement("h3");
            name.innerText = element.title.substr(0,20)+"....";

            name.classList.add("title")
            let price = document.createElement("h2");
            price.classList.add("price")
            price.innerText = "₹"+" "+element.rupees;
            let category = document.createElement("p");
            category.classList.add("category")
            category.innerText = element.category;
            let increment = document.createElement("button");
            let quantity = document.createElement("div");
            quantity.setAttribute("id","quantity")
            increment.textContent="+";
            let decrement = document.createElement("button");
            decrement.textContent="-";
            let span = document.createElement("span");
            span.textContent = 1;
            span.classList.add("span")
            increment.addEventListener("click",()=>{
                span.innerText++;
                for(let i=0;i<cartData.length;i++){
                    sum=sum+Number(span.innerText*Number(cartData[i].rupees));
                }
                container.innerHTML=`<h1>your cart total is :- ₹. ${sum}</h1>`
                console.log(typeof sum)
                checkout.innerHTML=`
                    <div>
                        <p>PRODUCT DETAIL</p>
                        <hr>
                        <div class="priceDisplay">
                            <div><p>Delivery Charges: </p></div>
                            <div><h3>FREE<span></h3>
                        </div>
                        
                    </div>
                    <div>
                            <hr>
                            <div class="priceDisplay">
                                <div><h3>Total Payable: </h3></div>
                                <div><h2>₹ ${sum}</h2></div>
                            </div>
                            <div><button id="continue">Continue</button></div>
                    </div>
                    `
                })
            decrement.addEventListener("click",()=>{
                span.innerText--;
                for(let i=0;i<cartData.length;i++){
                    sum=sum-Number(span.innerText*Number(cartData[i].rupees));
                }
                container.innerHTML=`<h1>your cart total is :- ₹. ${sum}</h1>`
                console.log(typeof sum)
                checkout.innerHTML=`
                <div>
                    <p>PRODUCT DETAIL</p>
                    <hr>
                    <div class="priceDisplay">
                        <div><p>Delivery Charges: </p></div>
                        <div><h3>FREE<span></h3>
                    </div>
                    
                </div>
                <div>
                        <hr>
                        <div class="priceDisplay">
                            <div><h3>Total Payable: </h3></div>
                            <div><h2>₹ ${sum}</h2></div>
                        </div>
                        <div><button id="continue">Continue</button></div>
                </div>
                `
            })
           
            let dltbtn = document.createElement("button");
            quantity.append(increment,span,decrement)
            dltbtn.innerText="Remove"
            dltbtn.classList.add("dltbtn");

            dltbtn.addEventListener("click",function(){
                
             let filtered = cartData.filter((elem)=>{
                if(element.id === elem.id){
                    return false
                }else{
                    return true
                }
             })

             cartData=filtered
             localStorage.setItem("cartitem",JSON.stringify(cartData))
            
             displayProduct(cartData)
            })
            
            detailscard.append(price,name,category,quantity,dltbtn)
            card.append(imagecard,detailscard)
            container1.append(card)
        })
    }


    document.querySelector("#continue").addEventListener("click",function(){
        
        document.querySelector(".popup").classList.add("active");
        window.location.href
        
    })

    document.querySelector(".btn").addEventListener("click",function(){
        document.querySelector(".popup").classList.remove("active");
    })
let formName=document.getElementById("fname");
let formEmail=document.getElementById("email");
let formAdd=document.getElementById("adr");
let formCity=document.getElementById("city");
let formState=document.getElementById("state")
let formZip=document.getElementById("zip");
let formCard=document.getElementById("cname");
let formCC=document.getElementById("ccnum");
let formExM=document.getElementById("expmonth");
let formExY=document.getElementById("expyear");
let formCvv=document.getElementById("cvv");
let sub=document.getElementById("sub");

let Btn=document.getElementsByClassName(".confirmPay");
Btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(formName.value || formEmail.value || formAdd.value || formCity.value || formState.value || formZip.value || formCard.value  || formCC.value || formExM.value || formExY.value || formCvv.value){
        alert("Please Enter Crediantial");
    }
    else{
        alert("Order Confirm")
        sub.setAttribute("href","./index.html")
    }
})
