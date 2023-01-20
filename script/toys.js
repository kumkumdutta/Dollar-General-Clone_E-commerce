let url= "https://636dca84b567eed48ac9262f.mockapi.io/product"
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
         name.textContent=el.name;
		 let price =document.createElement("p")
		 price.textContent=el.price
		 let btn= document.createElement("button")
		 btn.textContent="Add T Cart"
		div.append(img,name,price,btn)
		document.querySelector("#cont").append(div)
	})
}