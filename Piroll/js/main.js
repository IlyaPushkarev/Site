// PROGRESS BAR
function random(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
};

setTimeout(function() {
	document.querySelectorAll('progress').forEach((item)=>item.value = random(10, 100));
}, 0);
/////////////////////////////////LOAD WORKS/////////////////////
(function(){
	let cover = document.createElement('div');
	cover.className="photo-cover";
	cover.innerHTML='<span class="icon-magic-wand"></span>';
	cover.position="relative";
	cover.style.display="none";
	cover.style.background="rgba(0,0,0,.55)";
	cover.style.width="100%";
	cover.style.height="100%";

	function showCover(arr){
		const mouseOverCover = function(){
			cover.style.display="block";
			this.append(cover);
		};

		const mouseOutCover = function(){cover.style.display="none"};

		arr.forEach(function(item){
			for (let i = 0; i < item.length; i++) {
				item[i].addEventListener("mouseover", mouseOverCover);
				item[i].addEventListener("mouseout", mouseOutCover);
			}	
		});
	}

	const photos = Array(document.getElementsByClassName("photo"));

	showCover(photos);

	let count = 0;

	document.getElementById('btn-load').addEventListener("click", function(){
		let gallery__row = document.createElement("div");
		
		if(count==0){
			const deleteBtn = document.getElementById('btn-delete')
			deleteBtn.style.display="block";
			this.style.width="48%";
			deleteBtn.style.width="48%";
		}

		if(count%2!=0){
			gallery__row.className="gallery__row__revers";
		}else{
			gallery__row.className="gallery__row";
		}

		gallery__row.innerHTML='<div class=" photo photo-1"></div><div class=" photo photo-2"></div><div class=" photo photo-3"></div><div class=" photo photo-4"></div>';
		document.getElementsByClassName("gallery__works")[0].append(gallery__row);

		count++;

		showCover(Array(gallery__row.children));

		this.scrollIntoView(false)
	});

	document.getElementById('btn-delete').addEventListener("click", function(){
		document.getElementsByClassName("gallery__works")[0].lastChild.remove();
		
		count--;

		if(count==0){
			this.style.display="none";
			document.getElementById('btn-load').style.width="100%";
		}
		
		this.scrollIntoView(false)
	});
})()

///////////////////////////VIDEO PLAYER (OUR WORK PROCCESS)////////////////////
const vid = document.getElementById('vid');
const pauseBtn = document.getElementsByClassName('pause-btn')[0];

pauseBtn.addEventListener('click',function(){
	pauseBtn.style.display = 'none';
	vid.play();
})

vid.addEventListener('pause',function () {
	pauseBtn.style.display = 'block';
})

vid.addEventListener('play',function () {
	if(!vid.hasAttribute('controls')){//когда нету атр. controls	
		vid.setAttribute('controls','');
	}
	pauseBtn.style.display = 'none';
})

///////////////////////SLIDER-COMMENTS//////////////////////////////////////
$(document).ready(function(){
	$('.slider-comments').slick({
		arrows:false,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
});

///////MENU////////////////////
const menuWrapper = document.getElementsByClassName('menu')[0]
const menuBurger = document.getElementsByClassName('menu-burger')[0]
const menuList = document.getElementsByClassName('menu-list')[0]

menuBurger.addEventListener('click',function (e){
	if(menuWrapper.classList.toggle("adaptive")){
		menuList.style.display = 'flex';
		document.body.style.overflowY = 'hidden';
	}else{
		menuList.style.display = "";
		document.body.style.overflowY = '';
	}
})

menuWrapper.addEventListener('click',function (e) {
	if(e.target.tagName === 'A'){
		document.body.style.overflowY = '';
		menuWrapper.classList.remove("adaptive");
		menuList.style.display = "";
	}
})

/*///////SCROLL-UP BTN/////////////////////////////// */
const htmlEl = document.documentElement;
const clientHeigth = htmlEl.clientHeight;
const scrollUp = htmlEl.querySelector('.scrollup');

function displayScrollUp () {
	clientHeigth < htmlEl.scrollTop ?
	scrollUp.style.display = 'block' :
	scrollUp.style.display = '';
}

window.onload = function () {
	window.addEventListener('scroll',function (e) {
		displayScrollUp()
	})

	scrollUp.addEventListener('click',function (e) {
		htmlEl.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	})
}