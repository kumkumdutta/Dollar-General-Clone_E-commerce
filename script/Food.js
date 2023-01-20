let diffcat = document.getElementById("diffcat");
let foodcat=[]
let abc = document.getElementById("abc")
let bfy = document.getElementById("BFY")
let alc = document.getElementById("alc")

fetch("https://mocki.io/v1/45a0c6a5-b0e9-470b-b840-f8d5e1cdc21f")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    foodcat=data;
    foodcategory(foodcat)

})
let fooddata = [];
function foodcategory(data){
    data.forEach((element)=>{
     let card = document.createElement("div");
     card.classList.add("mother");
     let imagediv = document.createElement("div");
     imagediv.classList.add("imgdiv");
     
     let image = document.createElement("img");
     image.src=element.image;
     imagediv.append(image);
let title = document.createElement("h3");
title.classList.add("name")
title.innerText = element.title;
imagediv.addEventListener("click",function(){
    abc.innerHTML=""
    abc.style.width = 0;
    abc.style.height= 0;
    bfy.innerHTML=""
    bfy.style.width = 0;
    bfy.style.height= 0;
    alc.innerHTML=""
    alc.style.width = 0;
    alc.style.height= 0;
    

       cont.innerHTML=null
    console.log(title.innerText)
    fetch("https://mocki.io/v1/255100d7-b3b6-448c-9fa6-624443e8c484")
    .then((res)=>{
        return res.json();
    })
    .then((Data)=>{
fooddata=Data
let filtered = fooddata.filter((ele,ind)=>{
        
    if(ele.category==title.innerText){
        return true
    }else{
        return false
    }
})
rendercard(filtered)
    })
    
})


     card.append(imagediv,title)

     diffcat.append(card)
    })
}



let cont = document.getElementById("container");


fetch("https://mocki.io/v1/1df01d70-b50d-42c3-820b-171e61bceb3e")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    fooddata=data
    rendercard(fooddata)
})

function rendercard(data){
    data.forEach((element)=>{
     let card = document.createElement("div");
     card.classList.add("father");
     let imagediv = document.createElement("div");
     imagediv.classList.add("imagediv");
     let image = document.createElement("img");
     image.src=element.img;
     imagediv.append(image);
let title = document.createElement("h3");
title.classList.add("title")
title.innerText = element.title.substr(0,20)+"...";
let reviews = document.createElement("p");
reviews.innerText=element.reviews;
reviews.classList.add("reviews")
let category = document.createElement("p")
category.innerText = element.category
category.classList.add("category")
let price = document.createElement("p");
price.classList.add("price")
price.innerText = "₹"+element.rupees;
let description = document.createElement("p");
description.classList.add("desc");
description.innerText=element.description;
let avail = document.createElement("h3");
avail.classList.add("avail");
avail.innerText = element.avail
let adc = document.createElement("button");
adc.innerText = "Add To Cart"
adc.classList.add("adc")

     card.append(imagediv,title,reviews,price,category,description,avail,adc)

     cont.append(card)
    })
}
