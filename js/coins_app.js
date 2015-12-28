$(function (){
	$(document).on("click", ".terms-menu a", function(){
		if (!$(this).hasClass("active")) {
			$(".terms-menu a").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", ".payment-amount li", function(){
		if (!$(this).hasClass("active")) {
			$(".payment-amount li").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", ".payment-method li", function(){
		if (!$(this).hasClass("active")) {
			$(".payment-method li").removeClass("active");
			$(this).addClass("active");
		}
		if ($("#paypalPayment").hasClass("active")) {
			$("#visaPaymentForm").fadeOut(100);
			$("#paypalPaymentButton").delay(100).fadeIn(100);
		}
		else if($("#visaPayment").hasClass("active")) {
			$("#paypalPaymentButton").fadeOut(100);
			$("#visaPaymentForm").delay(100).fadeIn(100);
		}
	});

});