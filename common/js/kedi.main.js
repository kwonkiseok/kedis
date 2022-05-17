var cnt = 0;
var loop = undefined;
$(document).ready(function(){
	loopBanner();
	$(".siteToggle").on('click', function(){
		if(!$(this).hasClass("on")){
			clearInterval(loop);
			$(".siteList").stop().animate({"height": 384}, 500);
			$(this).addClass("on").attr("title","운영사이트 목록 닫기").text("접기");
		}else{
			$(this).removeClass("on").attr("title","운영사이트 목록 열기").text("펼치기");
			$(".siteList").stop().animate({"height": 96}, 500, function(){
				loopBanner();
			});
		}
	});
 });

function loopBanner(){
	loop = setInterval(function(){
		var next = (cnt + 1) % $(".siteList .row").length;
		$($(".siteList .row")[cnt]).animate({'top':-95}, 500, function(){
			$(this).css('top', 285);
		});
		$($(".siteList .row")[next]).animate({'top':0}, 500, function(){
			cnt = next;
		});
		$($(".siteList .row")[(next+1) % $(".siteList .row").length]).css({'top':95});
		$($(".siteList .row")[(next+2) % $(".siteList .row").length]).css({'top':190});
		//console.log(cnt + " " + next + " " + ((next+1) % $(".siteList .row").length) + " " + ((next+2) % $(".siteList .row").length))
	}, 5000);
};

$(document).ready(function () {
    $(".bx-controls-auto").click(function(){
        $(this).attr("tabindex", "0").focus();
    });

	//$(".siteList").siteToggle();
});
/*
$.fn.siteToggle = function(){
	var $obj = $(this),
		$lst = $obj.find(">ul"),
		$btn = $obj.find(".siteToggle");

	$lst.find(">li:gt(5)").hide();
	$btn.click(function() {
		var target = $(this).closest("div");

		$(this).attr("tabindex","0").focus();
		if (target.hasClass("on")) {
			target.removeClass("on");
			$(this).attr("aria-pressed","false").attr("title","운영사이트 목록 열기").text("펼치기");
			$(this).closest("div").find(">ul li:gt(5)").hide();
			$lst.css("height","auto");
		} else {
			target.addClass("on");
			$(this).attr("aria-pressed","true").attr("title","운영사이트 목록 닫기").text("접기");
			$(this).closest("div").find(">ul li:gt(5)").show();
		}
		return false;
	});
}
*/
$(function(){
	// [S] 메인롤링
	var $vsSlider = $("#visualBnnr .imgArea").bxSlider({
		mode: "fade",
		auto: true,
		pause: 5000,
		autoControls: true,
		autoHover: true,
		infiniteLoop: true,
		pager: false,
		controls: true,
		speed: 1000
	});
	// [E] 메인롤링

	$(".bx-controls-direction .bx-prev").attr("title", "이전배너 보기");
	$(".bx-controls-direction .bx-next").attr("title", "다음배너 보기");
	$(".bx-controls-auto .bx-start").attr("title", "배너 재생하기");
	$(".bx-controls-auto .bx-stop").attr("title", "배너 정지하기");

	$("#researchForm").slidesjs({
		width: 386,
		height: 240,
		navigation: {
			active: true,
			effect: "slide"
		}
	});

	$("#journalForm").slidesjs({
		width: 386,
		height: 240,
		navigation: {
			active: true,
			effect: "slide"
		}
	});

	var _btnPage    = $(".slideNavi .page");
	var _rollList = $(".visualDiv2").find(".rollWrap");
	var _rollImg = _rollList.find("li");
	_btnPage.bind({
		"mouseover" : function(event) {
			_btnPage.each(function(){
				$(this).removeClass("on");
			});
			$(this).addClass("on");
			var bNum = $(this).attr("num")-1;
			_rollImg.hide();
			$(_rollImg[bNum]).show();
		}
	});
});