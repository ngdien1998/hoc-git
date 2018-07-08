 $(document).ready(function(){
    $('.collapsible').collapsible();
	$('.dropdown-trigger').dropdown();
	 //Lấy vị trí hiện tại của thanh sticker cac top x px
	 
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
