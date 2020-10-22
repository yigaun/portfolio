$(function(){
	var n=0;
	var total=4; // ?
	$(".keyvisual li").eq(n).addClass("current"); //n�� �ش��ϴ� keyvisual�� currentŬ���� �߰�
	$(".pagination li").eq(n).addClass("current"); //n�� �ش��ϴ� pagination�� currentŬ���� �߰�

	function intervalMoving(){ //�ð��� ������ �����̴��� �Ѿ�� �ڵ�
		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1; 
		}
		else{
			n=0; //�����̴� ���ѷ�����
		}
		$(".keyvisual li.current").removeClass("current"); //keyvisual���� currentŬ���� ����
		$(".keyvisual li").eq(n).addClass("current"); //���� keyvisual�� currentŬ���� �߰�
		$(".pagination li.current").removeClass("current"); //pagination���� currentŬ���� ����
		$(".pagination li").eq(n).addClass("current"); //���� pagination�� currentŬ���� �߰�
	}

	var id=setInterval(intervalMoving, 4000); //�ڵ����� �����̴��� �Ѿ�� �ð� ����

	$(".left").click(function(e){ //���� ȭ��ǥ Ŭ����
		e.preventDefault(); //���ΰ�ħ ���� �ڵ�

		if(n > 0){ // 0, 1, 2, 3 ȭ��ǥ ��ư Ŭ���� ���� ���ҽ� 
			n=n-1;
			$(".keyvisual li.current").removeClass("current"); //keyvisual���� currentŬ���� ����
			$(".keyvisual li").eq(n).addClass("current"); //���� keyvisual�� currentŬ���� �߰�
			$(".pagination li.current").removeClass("current"); //pagination���� currentŬ���� ����
			$(".pagination li").eq(n).addClass("current"); //���� pagination�� currentŬ���� �߰�
		}
	});
	$(".right").click(function(e){ //������ ȭ��ǥ Ŭ����
		e.preventDefault(); //���ΰ�ħ ���� �ڵ�

		if(n < (total-1)){ // 0, 1, 2, 3 ȭ��ǥ Ŭ���� ���� ����
			n=n+1;
			$(".keyvisual li.current").removeClass("current");
			$(".keyvisual li").eq(n).addClass("current");
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".pagination a").click(function(e){ //pagination Ŭ���� 
		e.preventDefault();
		var index=$(this).parent().index(); //Ŭ���� ��ġ�� ���� ��ȭ�ϴ� ����(=index) 

		if(n != index){
			n=index; //���� n=index
			$(".keyvisual li.current").removeClass("current"); //index���� �ش����� �ʴ� keyvisual���� current ����
			$(".keyvisual li").eq(n).addClass("current"); //index���� �ش��ϴ� keyvisual�� currentŬ���� �߰�
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".left, .right, .pagination a").hover( //�¿� ȭ��ǥ, pagination�� ���콺�� �÷��� �� �߻��ϴ� �̺�Ʈ
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
	video.addEventListener("ended", function(){ // JavaScript �̺�Ʈ
		$(".play").fadeIn(300);
		$(".dimmed").fadeIn(300);
		video.pause();
		video.currentTime=0;
	});
}); 
