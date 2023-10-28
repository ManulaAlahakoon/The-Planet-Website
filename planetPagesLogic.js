const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa =document.querySelector(".fa-regular");
const preloader = document.querySelector(".preloader");


/*

btn.addEventListener("click",()=>{

	if(video.classList.contains("pause")){

		video.classList.remove("pause");
		video.play();
		fa.classList.remove("fa-circle-play");
		fa.classList.add("fa-circle-pause");

	}else{


		video.classList.add("pause");
		video.pause();
		fa.classList.remove("fa-circle-pause");
		fa.classList.add("fa-circle-play");

	}



});

*/
window.addEventListener("load",()=>{

	preloader.style.zIndex = "-2 ";


})











        const bar = document.querySelector(".fa-bars");
        const menu = document.querySelector(".menu");

        bar.addEventListener("click", ()=>{

        menu.classList.toggle("show-menu");

        })