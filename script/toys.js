let url= "https://636dca84b567eed48ac9262f.mockapi.io/product"
 
let  bachatoys =" https://63c6e85fd307b769674396ce.mockapi.io/childtoys"

// let shopbychild= document.querySelector("#fetchData")
// shopbychild.addEventListener("click",child)

// function child(){
// 	fetch(bachatoys)
// .then((res)=>{
// 	return res.json()
// }).then((data)=>{
// 	display (data)
// })

// }
 
fetch(url)
.then((res)=>{
	return res.json()
}).then((data)=>{
	display (data)
})



function display(data){
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
		div.append(img,name,price,btn)
		document.querySelector("#cont").append(div)
	})
}