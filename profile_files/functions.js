//parallax effect for the hero section
function index(){
  var h =  document.querySelector('.hero'),
  arr =  document.querySelector('#arr-down');
  var hb =  document.querySelector('.hero-body'),
   hbw =  document.querySelector('.hero-body .welcome'),
   hbs =  document.querySelector('.hero-body .social') ;
  var t =  document.querySelector('.testimonials');

  window.addEventListener('scroll',function(){
     hb.style.transform = "translateY("+window.scrollY/1.85+"px)";
     h.style.backgroundColor = "rgba(0,0,0,"+Math.sin(window.scrollY*Math.PI/(2*h.offsetHeight))*0.8+")";
     t.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
     arr.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
     hbw.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
     hbs.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
  });
}
//parallax effect for the hero section
