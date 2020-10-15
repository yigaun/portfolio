$(function(){
    var swiper=new Swiper(".swiper-container", {
      /* navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, */
	pagination: {
        el: ".swiper-pagination",
      },
	  	on: {
			init: function(){
				// console.log("start!!");
				descriptionFunction();
			},
			transitionEnd: function(){
				// console.log("transition end!!");
				descriptionFunction()
			}
		}
	});
	function descriptionFunction(){
		$(".slider .swiper-slide").each(function(){
			if($(this).hasClass("swiper-slide-active")){
				$(this).find(".description").fadeIn(300);
			}
			else{
				$(this).find(".description").fadeOut(300);
			}
		});
	};
	$(function(){
		$("#gnb > ul > li").hover(
			function(){
				//$("#header").stop().animate({height:200}, 400);
				$("#header").stop().addClass("active");
				//$(".menu_shadow").stop().animate({height:100}, 400);
				$(".menu_shadow").stop().addClass("active");
			});
		$("#gnb > ul > li").mouseleave(
			function(){
				//$("#header").stop().animate({height:100}, 400);
				$("#header").stop().removeClass("active");
				//$(".menu_shadow").stop().animate({height:0}, 400);
				$(".menu_shadow").stop().removeClass("active");
			});
		$("#gnb > ul > li").focusin(function(){
				$("#header").stop().addClass("active");
				$(".menu_shadow").stop().addClass("active");
			});
		$("#gnb > ul > li").focusout(function(){
				$("#header").stop().removeClass("active");
				$(".menu_shadow").stop().removeClass("active");
		});
	});
	$(function(){
		$("#content .rooms li").focusin(function(){
			$("#content .rooms li .dimmed").hide();
			$(this).find(".dimmed").show();
		});
	});
});