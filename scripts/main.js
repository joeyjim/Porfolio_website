/*document.getElementsByClassName('menutoggle')[0].onclick = function () {
	var menu = document.getElementById('menu');
	if(menu.className == "active"){
		menu.className = "inactive";
	} else {
		menu.className = "active";
	}
}*/

// selected elements
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var labels = document.getElementsByClassName('nav-label');

// sizing
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight*0.1;
  
  for(var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize+'px';
    labels[i].style.height = fontSize+'px';
    labels[i].style.marginTop = '-'+fontSize*0.6+'px';
  }
}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0); 
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

window.onload = resize;