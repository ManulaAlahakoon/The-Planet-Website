const openButtonTT = document.querySelector('#open-button-TT')
const closeButtonTT = document.querySelector('.close-button-TT')
const modalTT = document.querySelector('#modalTT')
const overlayTT = document.querySelector("#overlayTT")

openButtonTT.addEventListener('click',()=>{

	//if(modal == null) return
	modalTT.classList.add("active")
	overlayTT.classList.add("active")
	overlayModalClose();


})

closeButtonTT.addEventListener('click',()=>{
	
	modalTT.classList.remove("active")
	overlayTT.classList.remove("active")


})


function overlayModalClose(){

	overlayTT.addEventListener("click",()=>{
	
	modalTT.classList.remove("active")
	overlayTT.classList.remove("active")


	})


}