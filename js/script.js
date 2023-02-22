const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
// Skills
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function(){
	if(window.scrollY >= section.offsetTop - 200){
		spans.forEach((span)=>{
			span.style.width = span.dataset.width
		})
	}
}