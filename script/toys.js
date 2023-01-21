let url= "https://636dca84b567eed48ac9262f.mockapi.io/product"
 
// let  bachatoys =" https://63c6e85fd307b769674396ce.mockapi.io/childtoys"

let storeData=[]
 
fetch(url)
.then((res)=>{
	return res.json()
}).then((data)=>{
	storeData=data
	display (data)
	storeData=data
	console.log(storeData)
})



function display(data){
	document.querySelector("#cont").innerHTML=null
	data.forEach((el)=>{
		let div= document.createElement("div")
		let img= document.createElement("img")
		img.setAttribute("src",el.image)
		let name= document.createElement("h3");
         name.textContent=el.name.substr(0,10)+"...";
		 let price =document.createElement("p")

         price.textContent="₹"+el.price


		

		 

		 let btn= document.createElement("button")
		 btn.textContent="Add To Cart"
		 btn.addEventListener("click",function(){
			let cart= JSON.parse(localStorage.getItem("cartitem"))||[]
			let already=false
			for(let i=0; i<cart.length; i++){
               if(cart[i].name==el.name){
				already=true
			   }
			}
			if(already=true){
				alert("Product is Already In The Cart")
			}else{
				cart.push({...el,qty:1})
				alert("Product Is Added In The Cart")
				localStorage.setItem("cartitem",JSON.stringify(cart))
			}
		 })
		div.append(img,name,price,btn)
		document.querySelector("#cont").append(div)
	})
}
//  -------search function--------

 function search(){
	let searchedData= document.querySelector("#search").value;
	let result= storeData.filter((el)=>{
	return 	el.name.toLowerCase().includes(searchedData.toLowerCase())
	})
	display(result)
	console.log(result)

 }

//  function search(){
// 	// event.preventDefault()
	
// 		let searched =document.querySelector("#search").value;
// 		console.log(searched) 
// 		 let searchedData= storeData.filter(function(el){
// 			 return el.name.toLowerCase().includes(searched.toLowerCase())
// 		 })
// 	   display(searchedData)
// 	   console.log(searchedData)
// 	   }
