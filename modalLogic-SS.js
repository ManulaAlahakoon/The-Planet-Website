const openButtonSS = document.querySelector('#open-button-SS')
const closeButtonSS = document.querySelector('.close-button-SS')
const modalSS = document.querySelector('#modalSS')
const overlaySS = document.querySelector("#overlaySS")

openButtonSS.addEventListener('click',()=>{

	//if(modal == null) return
	modalSS.classList.add("active")
	overlaySS.classList.add("active")
	overlayModalClose();


})

closeButtonSS.addEventListener('click',()=>{
	
	modalSS.classList.remove("active")
	overlaySS.classList.remove("active")


})


function overlayModalClose(){

	overlaySS.addEventListener("click",()=>{
	
	modalSS.classList.remove("active")
	overlaySS.classList.remove("active")


	})


}