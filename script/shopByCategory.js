let url= "https://636dca84b567eed48ac9262f.mockapi.io/blog"


// let url= "https://63c6e85fd307b769674396ce.mockapi.io/childtoys"


fetch(url)
.then((res)=>{
	return res.json()
}).then((data)=>{
	display (data)
	console.log(data)
	data.forEach((ele)=>{
		console.log(ele.image)
	})
})
.catch((error)=>{
	console.log(error)
})





function display(data){
	data.forEach((el)=>{
		let div= document.createElement("div")
		
		
		let img= document.createElement("img")
		img.src=el.image
		// let image_div=document.createElement("div")
		// image_div.setAttribute("id","div_img")
		// image_div.append(img)
		let name= document.createElement("h3");
         name.textContent=el.name.substring(0,20)+"...";
		 let price =document.createElement("p")
		 price.textContent=el.price
		 let btn= document.createElement("button")
		 btn.textContent="Add T Cart"
		div.append(img,name,price,btn)
		document.querySelector("#cont").append(div)
	})
}