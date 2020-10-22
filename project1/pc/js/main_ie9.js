$(function(){
	var n=0;
	var total=4;
	$(".keyvisual li").eq(n).animate({opacity:1}, 600, function(){
		$(this).addClass("current");
	});
	$(".pagination li").eq(n).addClass("current");

	function intervalMoving(){
		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1;
		}else{
			n=0;
		}
		$(".keyvisual li.current").animate({opacity:0}, 600, function(){
			$(this).removeClass("current");
		});
		$(".keyvisual li").eq(n).animate({opacity:1}, 600, function(){
			$(this).addClass("current");
		});
		$(".pagination li.current").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	}

	var id=setInterval(intervalMoving, 5000);

	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){ // 0, 1, 2, 3
			n=n-1;
			$(".keyvisual li.current").animate({opacity:0}, 600, function(){
				$(this).removeClass("current");
			});
			$(".keyvisual li").eq(n).animate({opacity:1}, 600, function(){
				$(this).addClass("current");
			});
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".right").click(function(e){
		e.preventDefault();

		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1;
			$(".keyvisual li.current").animate({opacity:0}, 600, function(){
				$(this).removeClass("current");
			});
			$(".keyvisual li").eq(n).animate({opacity:1}, 600, function(){
				$(this).addClass("current");
			});
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".pagination a").click(function(e){
		e.preventDefault();
		var index=$(this).parent().index();

		if(n != index){
			n=index;
			$(".keyvisual li.current").animate({opacity:0}, 600, function(){
				$(this).removeClass("current");
			});
			$(".keyvisual li").eq(n).animate({opacity:1}, 600, function(){
				$(this).addClass("current");
			});
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".left, .right, .pagination a").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(intervalMoving, 5000);
		}
	);
});