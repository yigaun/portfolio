$(function(){
	var n=0;
	var total=4; // ?
	$(".keyvisual li").eq(n).addClass("current"); //n에 해당하는 keyvisual에 current클래스 추가
	$(".pagination li").eq(n).addClass("current"); //n에 해당하는 pagination에 current클래스 추가

	function intervalMoving(){ //시간이 지나면 슬라이더가 넘어가는 코드
		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1; 
		}
		else{
			n=0; //슬라이더 무한루프식
		}
		$(".keyvisual li.current").removeClass("current"); //keyvisual에서 current클래스 삭제
		$(".keyvisual li").eq(n).addClass("current"); //다음 keyvisual에 current클래스 추가
		$(".pagination li.current").removeClass("current"); //pagination에서 current클래스 삭제
		$(".pagination li").eq(n).addClass("current"); //다음 pagination에 current클래스 추가
	}

	var id=setInterval(intervalMoving, 4000); //자동으로 슬라이더가 넘어가는 시간 설정

	$(".left").click(function(e){ //왼쪽 화살표 클릭시
		e.preventDefault(); //새로고침 방지 코드

		if(n > 0){ // 0, 1, 2, 3 화살표 버튼 클릭시 변수 감소식 
			n=n-1;
			$(".keyvisual li.current").removeClass("current"); //keyvisual에서 current클래스 삭제
			$(".keyvisual li").eq(n).addClass("current"); //이전 keyvisual에 current클래스 추가
			$(".pagination li.current").removeClass("current"); //pagination에서 current클래스 삭제
			$(".pagination li").eq(n).addClass("current"); //이전 pagination에 current클래스 추가
		}
	});
	$(".right").click(function(e){ //오른쪽 화살표 클릭시
		e.preventDefault(); //새로고침 방지 코드

		if(n < (total-1)){ // 0, 1, 2, 3 화살표 클릭시 변수 증가
			n=n+1;
			$(".keyvisual li.current").removeClass("current");
			$(".keyvisual li").eq(n).addClass("current");
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".pagination a").click(function(e){ //pagination 클릭시 
		e.preventDefault();
		var index=$(this).parent().index(); //클릭한 위치에 따라 변화하는 변수(=index) 

		if(n != index){
			n=index; //변수 n=index
			$(".keyvisual li.current").removeClass("current"); //index값에 해당하지 않는 keyvisual에서 current 삭제
			$(".keyvisual li").eq(n).addClass("current"); //index값에 해당하는 keyvisual에 current클래스 추가
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".left, .right, .pagination a").hover( //좌우 화살표, pagination에 마우스를 올렸을 시 발생하는 이벤트
		function(){
			clearInterval(id); // ?
		},
		function(){
			id=setInterval(intervalMoving, 5000);
		}
	);
	var n=0;
	var name="";
	//$("#content .news_feed .business li").eq(n).addClass("on");
	//$("#content .news_feed .tab").eq(n).addClass("active");

	$("#content .news_feed .business li:first-child a").click(function(e){
		e.preventDefault();
		$("#content .news_feed .business li a").removeClass("on");
		$(this).addClass("on");

		$("#content .news_feed .tab_content1").show();
		$("#content .news_feed .tab_content2").removeClass("active");
	});
	$("#content .news_feed .business li:last-child a").click(function(e){
		e.preventDefault();
		$("#content .news_feed .business li a").removeClass("on");
		$(this).addClass("on");

		$("#content .news_feed .tab_content1").hide();
		$("#content .news_feed .tab_content2").addClass("active");
	});

//		n=$(this).index();

//		name=$(this).index();
//		console.log(name);
	//	$(".description").removeClass("active");
	//	$("."+name).addClass("active");
	n=$(this).index();

	/*
	$(".control li a").click(function(e){
		e.preventDefault();
		$(".control li a").removeClass("on");
		$(this).addClass("on");
		
		$(".tab_content1 .article li").hide();
		$(".tab_content1 .article li").eq(n).show();
		console.log(n);
	});
	*/

	var feedN=0;
	$(".news_feed .control li").eq(feedN).children().addClass("on");
	$(".tab_content1 .article li").eq(feedN).addClass("active");

	$(".news_feed .control li a").click(function(e){
		e.preventDefault();
		feedN=$(this).parent().index();
		$(".news_feed .control li a").removeClass("on");
		$(this).addClass("on");
		$(".tab_content1 .article li").removeClass("active");
		$(".tab_content1 .article li").eq(feedN).addClass("active");
	});
		var feedN=0;
	$(".news_feed .control li").eq(feedN).children().addClass("on");
	$(".tab_content2 .article li").eq(feedN).addClass("active");

	$(".news_feed .control li a").click(function(e){
		e.preventDefault();
		feedN=$(this).parent().index();
		$(".news_feed .control li a").removeClass("on");
		$(this).addClass("on");
		$(".tab_content2 .article li").removeClass("active");
		$(".tab_content2 .article li").eq(feedN).addClass("active");
	});

	var n;
	var str="";

	$(".famliysite dd").hide();

	$("a[class^=check_box]").click(function(e){
		e.preventDefault();
		// $(this).toggleClass("checked");
		if($(this).hasClass("checked") == false){
			$(this).addClass("checked");
			$(this).next("input").prop("checked", true);
		}else{
			$(this).removeClass("checked");
			$(this).next("input").prop("checked", false);
		}
	});
	$(".famliysite dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
		$(".famliysite dd a").removeClass("active");
	});
	$(".famliysite dd a").click(function(e){
		e.preventDefault();
		$(".famliysite dd a").removeClass("active");
		$(this).addClass("active");

		n=$(this).parent().index();
		str=$(this).text();

		$(".famliysite dt a").html(str+"<span></span>");
		$(this).parents("dd").slideUp(300);
	});

	var video=document.getElementById("main_video");

	$(".play").click(function(e){
		e.preventDefault();
		$(this).fadeOut(300);
		$(".dimmed").fadeOut(300);
		video.play();
	});
	$("#main_video").click(function(){
		$(".play").fadeIn(300);
		$(".dimmed").fadeIn(300);
		video.pause();
	});
	video.addEventListener("ended", function(){ // JavaScript 이벤트
		$(".play").fadeIn(300);
		$(".dimmed").fadeIn(300);
		video.pause();
		video.currentTime=0;
	});
}); 
