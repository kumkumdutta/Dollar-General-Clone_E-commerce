

let cont = document.getElementById("container");
let fooddata = [];
fetch("https://mocki.io/v1/255100d7-b3b6-448c-9fa6-624443e8c484?_limit=10&_page=1")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    rendercard(data)
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
title.innerText = element.title;
let reviews = document.createElement("p");
reviews.innerText=element.reviews;
reviews.classList.add("reviews")
let category = document.createElement("p")
category.innerText = element.category
let price = document.createElement("p");
price.classList.add("price")
price.innerText = "₹"+element.rupees;
let description = document.createElement("p");
description.classList.add("desc");
description.innerText=element.description;
let avail = document.createElement("h3");
avail.classList.add("avail");
avail.innerText = element.avail

     card.append(imagediv,title,reviews,price,category,description,avail)

     cont.append(card)
    })
}