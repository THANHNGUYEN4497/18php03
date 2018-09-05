 $(function(){
	 
})
 $(document).ready(function(){
$('ul.tabs li ').click(function(){
	console.log('entered');
	 	var tab_id = $(this).attr('data-tab');
	 	$('ul.tabs li ').removeClass('current');
	 	$('.tabs_content').removeClass('current');
	 	$(this).addClass('current');
	 	$("#"+ tab_id).addClass('current');
	  return false;
	 }); 
$('nav ul li a').click(function(){
	 	var item = $(this).data('class');
	 	if (item == 'all') {
           $('.filter').isotope({filter:'*'}) ; 
	 	}
	 	else{
	 		$('.filter').isotope({filter:item});
	 		 console.log("entered");
	 	}
	 	return false;
	 });
 })
/*var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn_t");
for(i = 0; i < btns.length; i++){
       btns[i].addEventListener("click",function(){
           var current =  getElementsByClassName("active");
           current[0].className = current[0].className.replace(" active", "");
           this.className += " active";
       });
}  */

 