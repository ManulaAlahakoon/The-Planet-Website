const openButton = document.querySelector('#open-button')
const closeButton = document.querySelector('.close-button')
const modal = document.querySelector('#modal')
const overlaySignIn = document.querySelector("#overlay")

openButton.addEventListener('click',()=>{

	//if(modal == null) return
	modal.classList.add("active")
	overlaySignIn.classList.add("active")
	overlayModalClose();


})

closeButton.addEventListener('click',()=>{
	
	modal.classList.remove("active")
	overlaySignIn.classList.remove("active")


})


function overlayModalClose(){

	overlaySignIn.addEventListener("click",()=>{
	
	modal.classList.remove("active")
	overlaySignIn.classList.remove("active")


	})


}