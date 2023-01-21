// let container = document.getElementById("beauty-container")
// let filter= document.getElementById("filter")
// let filteredData=[]
// filter.addEventListener("change", ()=>{
//     let filtered = filteredData.filter((e)=>{
//         if(e.category === filter.value){
//             return true
//         }
//         return false
//     })
//     displayProducts(filtered)
// })

// fetchData()

// function fetchData(){
//     let promise= fetch("https://mocki.io/v1/4def05dd-55bf-4304-807f-bf4a0d991073")
//     promise.then((responseObj)=>{
//         return responseObj.json();
//     })

//     .then((acctualData)=>{
//         let myNeededData= acctualData.map((element)=>{
//             let obj={
//                 image : element.img,
//                 name : element.name,
//                 price : element.price,
//                 currency : element.currency,
//                 category : element.category,
//             }
//             return obj;

//         })
//         filteredData=myNeededData;
//         displayProducts(myNeededData);
//     })
//     .catch((Error)=>{
//         console.log(Error);
//     })
// }

// function displayProducts(data){
//     container.innerHTML=null;
//     data.forEach((element) => {
//         let card=document.createElement("div")
//         let image =document.createElement("img")
//         image.setAttribute("src", element.image)
//         let name=document.createElement("h2")
//         name.innerText=element.name
//         let price = document.createElement("h5");
//         price.innerText=element.price;
//         let currency = document.createElement("p");
//         currency.innerText=element.currency;
//         let category = document.createElement("p")
//         category.innerText = element.category;
//         let bag= document.createElement("button")
//         bag.innerText = "Add To Cart"
//         bag.addEventListener("click", () => {
//             alert("Added to the bag")
//             let bagdata=JSON.parse(localStorage.getItem("cart")) || []
//             bagdata.push(element)
//             localStorage.setItem("cart",JSON.stringify(bagdata))
//         })
//         card.append(image,name,price,currency,category,bag)
//         container.append(card);

//     });
// }





const url = `https://mocki.io/v1/4def05dd-55bf-4304-807f-bf4a0d991073`;
    let container = document.getElementById("beauty-container");
    let filterbutton = document.getElementById("filter-btn");
    
    
    


    

    let fetchedData=[];

    filterbutton.addEventListener("click", function () {
      let lower= document.getElementById("lower");
      let upper= document.getElementById("upper");
      let filteredData = fetchedData.filter((element) =>{
        if(element.rupees >= lower.value && element.rupees <= upper.value) {
          return true;
        } else {
          return false;
        }
      })
      container.innerHTML=null;

      displayEcommerce(filteredData);
    })


    // sort.addEventListener("change", function () {
    //   container.innerHTML=null;
    //   if(sort.value=="asc"){
    //     fetch("https://mocki.io/v1/4def05dd-55bf-4304-807f-bf4a0d991073")
    // .then((res) =>{
    //   return res.json();
    // })
    // .then((actualData) =>{
    //   sortData = actualData.data;
    //   console.log(sortData)
    //   displayRestaurant(sortData);
    // })
    // .catch((error) =>{
    //   console.log(error);
    // })
    
    //   }else if(sort.value=="desc"){
    //     fetch("https://mocki.io/v1/4def05dd-55bf-4304-807f-bf4a0d991073")
    // .then((res) =>{
    //   return res.json();
    // })
    // .then((actualData) =>{
    //   sortData = actualData.data;
    //   console.log(sortData)
    //   displayRestaurant(sortData);
    // })
    // .catch((error) =>{
    //   console.log(error);
    // })
    
    //   }
    //   else{
    //     fetch("https://mocki.io/v1/4def05dd-55bf-4304-807f-bf4a0d991073")
    // .then((res) =>{
    //   return res.json();
    // })
    // .then((actualData) =>{
    //   //console.log(actualData)
    //   fetchedData = actualData.data;
    //   //console.log(fetchedData)
    //   displayRestaurant(actualData.data);
    // })
    // .catch((error) =>{
    //   console.log(error);
    // })
    //   }


      
    // })

    


    fetch("https://mocki.io/v1/4def05dd-55bf-4304-807f-bf4a0d991073")
    .then((res) =>{
      return res.json();
    })
    .then((actualData) =>{
      
      fetchedData = actualData.data;
      displayEcommerce(fetchedData);
    })
    .catch((error) =>{
      console.log(error);
    })

    function displayEcommerce(data){
      data.forEach((element)=>{
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.classList.add("akg")
        image.setAttribute("src", element.img);


        let name = document.createElement("h3");
        name.classList.add("name")
        name.innerText = element.title.substr(0,20)+"....";
        let imgDiv=document.createElement("div");
        image.setAttribute("src",element.img);
        imgDiv.append(image)

       

        let price= document.createElement("h3");
        price.classList.add("price")
        price.innerText = ("₹")+(element.rupees);

        let available = document.createElement("p");
        available.classList.add("avail")
        available.innerText = element.avail;

        

        let button = document.createElement("button");
        button.classList.add("ATC")
        button.innerText = "Add To Cart"

        

        button.addEventListener("click", () =>{
          let cartData = JSON.parse(localStorage.getItem("cartitem")) || [];
          let isAllreadyInCart = false;
          for(let i=0;i<cartData.length; i++){
            if(cartData[i].id === element.id) {
              isAllreadyInCart = true;
              break;
            };
          }


          if(isAllreadyInCart === true) {
            alert("Your Item is Already in Cart")
            
          }else{
            cartData.push(element);
            localStorage.setItem("cartitem", JSON.stringify(cartData));
            
            alert("Item Added to Cart🛍")
          }
        });

        card.append(image, name, price,available, button);

        container.append(card);
      })
    }