$(function (){
	$(document).on("click", ".payment-amount li", function(){
		if (!$(this).hasClass("active")) {
			$(".payment-amount li").removeClass("active");
			$(this).addClass("active");
		}
	});
});