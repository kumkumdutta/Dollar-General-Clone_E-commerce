let container1 = document.getElementById("container1");
let container = document.getElementById("container");

    let cartData = JSON.parse(localStorage.getItem("cartitem"));
    if(cartData === null) cartData = [];
    if (cartData.length>0){
        container.innerHTML=`<h1>your cart total is :-</h1>`
    }

    

    // }else {
    //     // 
    // }
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
