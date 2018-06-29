$(function() {
	    console.log($('.oursevices').offset().top);
	    console.log($('.content1').offset().top);
	    console.log($('.n1').offset().top);
	    console.log($('.bridges').offset().top);
});
function goto(obj){
	$('html,body').animate({
		scrollTop: $(obj).offset().top}, 1100);
	
}
			  
$(document).ready(function() {
   $('.n7').click(function(event) {
   	goto('.oursevices')/* Act on the event */
   	return false;
   });
   $('.n1').click(function(event) {
   	goto('.intro-header')/* Act on the event */
   	return false;
   });
   $('.n2').click(function(event) {
   	goto('.content1')/* Act on the event */
   	return false;
   });
   $('.n3').click(function(event) {
   	goto('.bridges')/* Act on the event */
   	return false;
   });
   $('.n4').click(function(event) {
   	goto('.IoT')/* Act on the event */
   	return false;
   });
   $('.n5').click(function(event) {
   	goto('.event')/* Act on the event */
   	return false;
   });
    $('.n6').click(function(event) {
   	goto('.cliclk')/* Act on the event */
   	return false;
   });
});

				var prevScrollpos = window.pageYOffset;
                    window.onscroll = function() {
                    var currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                    } else {
                     document.getElementById("navbar").style.top = "-80px";
                    }
                    prevScrollpos = currentScrollPos;
                  } 
		

