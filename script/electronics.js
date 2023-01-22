    let cart_data=JSON.parse(localStorage.getItem("cartitem"))||[]
    let container=document.getElementById("container")
    let count=document.getElementById("count");
    let filter=document.getElementById("filterSelect");
    let promise=fetch("https://639c1ac842e3ad6927272409.mockapi.io/electronics")
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res)
        display(res)
    })
    function display(data){
        container.innerHTML="";
        data.forEach((element) => {
            let box=document.createElement("div");
            let imgDiv=document.createElement("div");
            let image=document.createElement("img");
            image.setAttribute("src",element.img);
            imgDiv.append(image)

            let title=document.createElement("h3");
            title.innerText=element.title.substr(0,20)+"...";
            let reviews=document.createElement("h4");
            reviews.innerText=element.reviews;
            let rupees=document.createElement("h3");
            rupees.innerText=`Rs. ${element.rupees}`;
            let description=document.createElement("p");
            description.innerText=element.description;
            let avail=document.createElement("p");
            avail.innerText=element.avail;
            let button=document.createElement("button");
            button.innerText="Add To Cart"

            button.addEventListener("click",()=>{

                let favouriteData = JSON.parse(localStorage.getItem("cartitem"));
                if(favouriteData===null) favouriteData = [];
                 
                  let alreadyaddedinfavourites = false;
                    for(let i=0; i<favouriteData.length; i++){
                    if(favouriteData[i].id === element.id){
                    alreadyaddedinfavourites = true;
                    break;
                    };
                    }
                    if(alreadyaddedinfavourites === true){
                    alert(" Your Item is Already in Cart")
                    }else{
                    
                    favouriteData.push({...element,});
                    localStorage.setItem("cartitem",JSON.stringify(favouriteData));
                    alert("Item Added to cart🛍️") 
                    }
            })
        

            filter.addEventListener("change",()=>{
                
                if(filter.value=="Low To High"){
                    data.sort((a,b)=>a.rupees-b.rupees)
                    display(data);
                }
                if(filter.value=="High To Low"){
                    data.sort((a,b)=>b.rupees-a.rupees)
                    display(data);
                }
                // display(data);
                
            }) 

            count.innerText=`${data.length} results`
            
            box.append(imgDiv,title,reviews,rupees,description,avail,button);
            container.append(box)
        });
    }
    

    
