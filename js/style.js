$(document).ready(function() {

 // 	hieuungload = new TimelineMax({}); 
 // 	hieuungload
 // 	.from($('.loading'),0.7,{opacity:0})
 // 	.from($('.khoiload'),1,{scale:2,opacity:0})

 // 	//lap lai
 // 	.to($('.khoiload'),1,{scale:0.3,ease:Power4.easeOut})
 // 	.to($('.khoiload'),1,{scale:1,ease: Elastic.easeOut.config(1, 0.3)})
	// .to($('.khoiload'),1,{scale:0.3,ease:Power4.easeOut})
 // 	.to($('.khoiload'),1,{scale:1,ease: Elastic.easeOut.config(1, 0.3)})

 // 	//ket thuc 
 // 	.to($('.khoiload'),1,{scale:7,opacity:0,ease:Power4.easeOut})
 // 	.to($('.loading'),1,{x:-2200,ease:Power1.easeOut})






 	 // hieuungnoidung = new TimelineMax({paused:true}); 

 	 // hieuungnoidung
 	 // .from($('.logo'),0.7,{scale:3,opacity:0,ease:Elastic.easeOut})
 	 // .from($('.tieude'),0.7,{scale:2,opacity:0,ease:Elastic.easeOut},"+=0.1")
 	 // .from($('.gioithieu'),0.7,{y:200,opacity:0,ease:Elastic.easeOut},"+=0.1")
 	 // .from($('.keduoi'),2,{x:-2200,opacity:0,ease:Power4.easeOut},"+=1")
 	 // .staggerFrom($('.motkhoi'),0.8,{scale:2,opacity:0,ease:Elastic.easeOut},0.2 )

 	 // $('.kichhoat').click(function(event) { 	 	
 	 // 	hieuungnoidung.play();
 	 // });;

 	// function noidungvaodi()
 	// {
 	// 	hieuungnoidung.play();
 	// }

 	$('.navbar ul li:nth-child(2) a').on('click', function(event) {
 		event.preventDefault();
 		 // Act on the event 
 		 $('body,html').animate({
 		 	scrollTop: $('#course').offset().top
 		 },
 		 1000,"easeInOutExpo");
 		});
 	$('.navbar ul li:nth-child(3) a').on('click', function(event) {
 		event.preventDefault();
 		 // Act on the event 
 		 $('body,html').animate({
 		 	scrollTop: $('#features').offset().top
 		 },
 		 1000,"easeInOutExpo");
 		});
 	$('.navbar ul li:nth-child(4) a').on('click', function(event) {
 		event.preventDefault();
 		 // Act on the event 
 		 $('body,html').animate({
 		 	scrollTop: $('#resources').offset().top
 		 },
 		 1000,"easeInOutExpo");
 		});
 	$('.navbar ul li:nth-child(5) a').on('click', function(event) {
 		event.preventDefault();
 		 // Act on the event 
 		 $('body,html').animate({
 		 	scrollTop: $('#clients').offset().top
 		 },
 		 1000,"easeInOutExpo");
 		});
 	$('.navbar ul li:nth-child(6) a').on('click', function(event) {
 		event.preventDefault();
 		 // Act on the event 
 		$('body,html').animate({
 		scrollTop: $('#contact').offset().top
 		},
 		1000,"easeInOutExpo");
 		});


 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var vitri = $('body,html').scrollTop();
 		if (vitri >=400) {
 			$('nav').addClass('bienhinh')
 		}
 		else {
 			$('nav').removeClass('bienhinh')
 		}
 	});
 	new WOW().init();
 });