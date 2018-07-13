 function goto(anima) {
 	// body...
 	$('html,body').animate({
 		scrollTop:$(anima).offset().top
 	}, 1000);
 }
 $(function(){
 	$(window).scroll(function(){
	 	var hei= $('html,body').scrollTop();
        console.log(hei);
        if (hei > 50) {
        	$('.navbar-fixed-top').addClass('changeNavbar');
        	console.log('entered');
        } else {
        	$('.navbar-fixed-top').removeClass('changeNavbar');
        }
	 });
 })
 $(document).ready(function(){
 	$('.button_1').click(function(event){
 		goto('.content_1')
 		return false;
 	});
 	$('.button_2').click(function(event){
 		goto('.content_2')
 		return false;
 	});
 	$('.button_3').click(function(event){
 		goto('.content_3')
 		return false;
 	});
 	$('.button_4').click(function(event){
 		goto('.content_4')
 		return false;
 	});
 	$('.button_5').click(function(event){
 		goto('.content_5')
 		return false;
 	});
 	$('.button_6').click(function(event){
 		goto('.content_6')
 		$('navbar').removeClass('.navbar-collapse')
 		return false;
 	});
   $('.button_8').click(function(){
   	goto('.content_3')
 		return false;
   })
 })
 
 