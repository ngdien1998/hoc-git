 $(document).ready(function(){
	 
	 let fixedNavTop = $("#navbar").offset().top;
	 let fixNav = ()=>{
		 let scrollTop = $(window).scrollTop();
		 
		 if(scrollTop > fixedNavTop){
			 $("#navbar").addClass("fixed");
		 }else{
			 $("#navbar").removeClass("fixed");
		 }
	 };
	 $(window).scroll(() => fixNav());
	 
  });
