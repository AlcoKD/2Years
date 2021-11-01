//owl-carousel for blog

const responsive={
	0:{
		items:1
	},
	320: {
		items: 1
	},
	560: {
		items: 2
	},
	960: {
		items: 3
	}
}

	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay:false,
		autoplayTimeout:3000,
		dots:false,
		nav:true,
		navText:[$('.owl-nav-prev'),$('.owl-nav-next')],
		responsive:responsive
	});



	//AOS instance
AOS.init();


//toggleonclick

const popup = document.querySelector('.button');
const hide = document.querySelector('.hide');
popup.addEventListener('click', onClick);
function onClick (){
	hide.classList.toggle('popup');
	popup.textContent='TI AMO <3';
	popup.scrollIntoView('.popup');
}