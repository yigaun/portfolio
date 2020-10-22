$(function(){
	var goPage;
	var topPos;
	var n;
	var t;
	var scrollSpeed=1000;

	$(".nav a").click(function(e){
		e.preventDefault();
		$(".nav a").removeClass("on");
		$(this).addClass("on");

		goPage=$(this).attr("href");
		// console.log("goPage : "+goPage);
		topPos=$(goPage).offset().top;
		// console.log("topPos : "+topPos);
		$("html, body").animate({scrollTop:topPos}, 800);
	});
	$(".fixed_nav a").click(function(e){
		e.preventDefault();
		$(".fixed_nav a").removeClass("on");
		$(this).addClass("on");

		goPage=$(this).attr("href");
		topPos=$(goPage).offset().top;
		$("html, body").animate({scrollTop:topPos}, 800);
	});
	$(window).scroll(function(){
		t=$(this).scrollTop();
		// console.log("t : "+t);

		if(t < $("#area2").offset().top){
			n=0;
		}
		else if(t < $("#area3").offset().top){
			n=1;
		}
		else if(t < $("#area4").offset().top){
			n=2;
		}
		else if(t < $("#area5").offset().top){
			n=3;

			if(t == Math.ceil($(document).height()-$(window).height())){
				n=4;
			}
		}
	/*	else if(t < $("#area6").offset().top){
			n=4;
		}
		else if(t < $("#area7").offset().top){
			n=5;
		}
		else if(t < $("#area8").offset().top){
			n=6;

			if(t == Math.ceil($(document).height()-$(window).height())){
				n=7;
			}
		}*/
		else{
			n=7;
		}
		// console.log("n : "+n);

		if(t > 80){
			if($(".fixed_nav").hasClass("show") == false){
				$(".fixed_nav").addClass("show");
			}
		}
		else{
			$(".fixed_nav").removeClass("show");
		}

		$(".nav a").removeClass("on");
		$(".nav li").eq(n).find("a").addClass("on");
		$(".fixed_nav a").removeClass("on");
		$(".fixed_nav li").eq(n).find("a").addClass("on");
	});
	$(window).trigger("scroll");

	$(".next a").click(function(e){
		e.preventDefault();
		$(".project2").slideDown(2000);
		$(".next a").hide();
	});
	$(function(){
		var agent=navigator.userAgent.toLowerCase();
		var path="";

		if(agent.indexOf("android") != -1 || agent.indexOf("iphone") != -1 || agent.indexOf("ipad") != -1){
			// Mobile URL입니다.
			path="project1/mobile/index.html";
		}
		else{
			// PC URL입니다.
			path="project1/pc/index.html";
		}

		$("#project1").attr({href:path});
	});
	$(function(){
		var agent=navigator.userAgent.toLowerCase();
		var path="";

		if(agent.indexOf("android") != -1 || agent.indexOf("iphone") != -1 || agent.indexOf("ipad") != -1){
			// Mobile URL입니다.
			path="project2/mobile/index.html";
		}
		else{
			// PC URL입니다.
			path="project2/pc/index.html";
		}

		$("#project2").attr({href:path});
	});
});