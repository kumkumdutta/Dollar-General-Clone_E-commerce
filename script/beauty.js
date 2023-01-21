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
    
    let alert= document.getElementById("alert");
    


    

    let fetchedData=[];

    filterbutton.addEventListener("click", function () {
      let lower= document.getElementById("lower");
      let upper= document.getElementById("upper");
      let filteredData = fetchedData.filter((element) =>{
        if(element.price >= lower.value && element.price <= upper.value) {
          return true;
        } else {
          return false;
        }
      })
      container.innerHTML=null;

      displayRestaurant(filteredData);
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
      //console.log(actualData)
      fetchedData = actualData.data;
      //console.log(fetchedData)
      displayRestaurant(fetchedData);
    })
    .catch((error) =>{
      console.log(error);
    })

    function displayRestaurant(data){
      data.forEach((element)=>{
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", element.img);

        let name = document.createElement("h2");
        name.innerText = element.title;

        let price= document.createElement("h2");
        price.innerText = ("Rs ")+(element.rupees);

        let available = document.createElement("p");
        available.innerText = element.avail;

        

        let buy = document.createElement("button");
        buy.innerText = "Add To Cart"
        

        buy.addEventListener("click", () =>{
          let cartData = JSON.parse(localStorage.getItem("buy")) || [];
          let isAllreadyInCart = false;
          for(let i=0;i<cartData.length; i++){
            if(cartData[i].id === element.id) {
              isAllreadyInCart = true;
              break;
            };
          }


          if(isAllreadyInCart === true) {
            alert.innerText="Already Placed Order"
            
          }else{
            cartData.push(element);
            localStorage.setItem("buy", JSON.stringify(cartData));
            
            alert.innerText="Successfully Placed Order"
          }
        });
        card.append(image, name, price,available, buy);
        container.append(card);
      })
    }