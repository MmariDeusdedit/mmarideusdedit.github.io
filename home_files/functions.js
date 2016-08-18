function index(){
//parallax effect for the hero section
  var h =  document.querySelector('.hero'),
  arr =  document.querySelector('#arr-down');
  var hb =  document.querySelector('.hero-body'),
   hbw =  document.querySelector('.hero-body .welcome'),
   hbs =  document.querySelector('.hero-body .social') ;
  var t =  document.querySelector('.testimonials');

  window.addEventListener('scroll',function(){
     hb.style.transform = "translateY("+window.scrollY/1.70+"px)";
     h.style.backgroundColor = "rgba(0,0,0,"+Math.sin(window.scrollY*Math.PI/(2*h.offsetHeight))*0.8+")";
     t.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
     arr.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
     hbw.style.transform = "translateY("+(window.scrollY/h.offsetHeight)*55+"px)";
     hbw.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
     hbs.style.transform = "translateY("+(window.scrollY/h.offsetHeight)*-100+"px)";
     hbs.style.opacity = 1 -(window.scrollY/h.offsetHeight)*2.5;
  });
  //parallax effect for the hero section

  var testimonials = {
    phrases : [
      'Collaborate on projects that would have otherwise been difficult on your own',
      'Meet great people, make great friends and build lasting alliances',
      'Get the help you need from people you can trust'
    ],
    interval : 6000,
    str: 1
  };
  var curphrase = testimonials.str, lim = testimonials.phrases.length;

  setInterval(function () {
    $('.testimony')
    .fadeOut(250, function(){
      $(this).html(testimonials.phrases[curphrase])
      .fadeIn(200)
    });
    if (curphrase >= lim - 1)
      curphrase = 0;
    else
      curphrase++;
  }, testimonials.interval);

}
