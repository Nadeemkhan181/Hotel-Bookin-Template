



  $(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(300,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
  

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


  $( function() {
    $( "#datepicker" ).datepicker();
  } );
    
  $(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $("#navbar12").css("background" , "black").css("height" , "80px").css("marginTop" , "0px").css("transition" , "1s");
       
         
          
	  }
    
	  else{
          
		  $("#navbar12").css("background" , "transparent").css("transition" , "1s");  
         
	  }
  })
})
