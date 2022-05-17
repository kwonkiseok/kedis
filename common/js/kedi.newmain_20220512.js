/* var cnt = 0;
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
		console.log(cnt + " " + next + " " + ((next+1) % $(".siteList .row").length) + " " + ((next+2) % $(".siteList .row").length))
	}, 5000);
};

$(document).ready(function () {
		$(".bx-controls-auto").click(function(){
				$(this).attr("tabindex", "0").focus();
		});
*/


var cnt = 0;
var loop = undefined;
$(document).ready(function () {
	loopBanner();
	$(".siteToggle").on('click', function () {
		if (!$(this).hasClass("on")) {
			clearInterval(loop);
			$(".siteList").stop().animate({ "height": 263 }, 500);
			$(this).addClass("on").attr("title", "운영사이트 목록 닫기").text("접기");
		} else {
			$(this).removeClass("on").attr("title", "운영사이트 목록 열기").text("펼치기");
			$(".siteList").stop().animate({ "height": 45 }, 500, function () {
				loopBanner();
			});
		}
	});
});


function loopBanner() {
	loop = setInterval(function () {
		var next = (cnt + 1) % $(".siteList .row").length;
		$($(".siteList .row")[cnt]).animate({ 'top': -65 }, 500, function () {
			$(this).css('top', 195);
		});
		$($(".siteList .row")[next]).animate({ 'top': 0 }, 500, function () {
			cnt = next;
		});
		$($(".siteList .row")[(next + 1) % $(".siteList .row").length]).css({ 'top': 65 });
		$($(".siteList .row")[(next + 2) % $(".siteList .row").length]).css({ 'top': 130 });
		//console.log(cnt + " " + next + " " + ((next+1) % $(".siteList .row").length) + " " + ((next+2) % $(".siteList .row").length))
	}, 5000);
};

$(document).ready(function () {
	$(".bx-controls-auto").click(function () {
		$(this).attr("tabindex", "0").focus();
	});
	$(".rollWrap").keyup(function () {
		// $(this).attr("tabindex", "0").focus();
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
$(function () {
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


	//KEDI 알림 배너
	var _btnPage = $(".slideNavi .page");
	var _rollList = $(".visualDiv2").find(".rollWrap");
	var _rollImg = _rollList.find("li");
	_btnPage.bind({
		"mouseover keypress": function (event) {
			_btnPage.each(function () {
				$(this).removeClass("on");
			});
			$(this).addClass("on");
			var bNum = $(this).attr("num") - 1;
			_rollImg.hide();
			$(_rollImg[bNum]).show();
		}
	});

	//KEDI 소식 통계 배너
	var _btnPage1 = $(".slideNum button");
	var _rollList1 = $(".stats_banner").find(".rollWrap");
	var _rollImg1 = _rollList1.find("li");
	_btnPage1.bind({
		"mouseover keypress": function (event) {
			_btnPage1.each(function () {
				$(this).removeClass("on");
			});
			$(this).addClass("on");
			var bNum = $(this).attr("title") - 1;
			_rollImg1.hide();
			$(_rollImg1[bNum]).show();
		}
	});
});

/* 추가 */
$(function(){
	
	// Gnb
	const $gnbGlobal = $('#gnb--global'),
		  $gnbGlobalSub = $('.gnb--global__submenu'),
		  $gnbGlobalList = $('.gnb--global__list'),
		  $gnbGlobalChild = $('.gnb--global__child'),
		  $gnbActiveBar = $('.active--bar'),
		  gnbGlobalHeight = $gnbGlobal.outerHeight(),
		  gnbGlobalSubHeight = $gnbGlobalSub.outerHeight();

	// GNB Mouse Event
	$gnbGlobal.on('mouseenter', function(){
		$gnbGlobalSub.stop(true, false).fadeIn(200);
		$(this).addClass('active');
		$(this).stop(true, false).animate({
			'height': gnbGlobalHeight + gnbGlobalSubHeight
		}, {
			duration: 500,
			easing: 'easeOutExpo'
		});
	});

	$gnbGlobal.on('mouseleave', function(){
		$gnbGlobalSub.stop(true, false).fadeOut(200);
		$gnbActiveBar.css({ 'opacity': 0, });
		$(this).removeClass('active');
		$(this).stop(true, false).animate({
			'height': gnbGlobalHeight
		}, {
			duration: 500,
			easing: 'easeOutExpo'
		});
		$gnbGlobalList.find('> li').removeClass('gnb__bg');
	});

	// Gnb Mouse
	$gnbGlobalList.find('> li').on('mouseenter', function(){
		let childWidth = $(this).find($gnbGlobalSub).outerWidth() - 1;
		let calc = $(this).position().left;

		$gnbActiveBar.css({
			'opacity': 1,
			'transform': 'translateX(' + calc + 'px)',
			'width': childWidth
		});
		$(this).addClass('gnb__bg');
	});

	$gnbGlobalList.find('> li').on('mouseleave', function(){
		$(this).removeClass('gnb__bg');
	});

	// GNB Focus(keyboard) Event	
	$gnbGlobalList.find('> li > a')
		.add($gnbGlobalSub.find('> li > a'))
		.add($gnbGlobalChild.find('> li > a'))
		.on('focus', function(){
		$gnbGlobalSub.stop(true, false).fadeIn(200);
		$gnbGlobal.addClass('active');
		$gnbGlobal.stop(true, false).animate({
			'height': gnbGlobalHeight + gnbGlobalSubHeight
		}, {
			duration: 500,
			easing: 'easeOutExpo'
		});

		let $topParent = $(this).closest('.gnb--global__list > li');
		let childWidth = $topParent.find($gnbGlobalSub).outerWidth() - 1;
		let calc = $topParent.position().left;

		$gnbActiveBar.css({
			'opacity': 1,
			'transform': 'translateX(' + calc + 'px)',
			'width': childWidth
		});
		
		$topParent.addClass('gnb__bg').siblings().removeClass('gnb__bg');
	});

	const $gnbPrevFocusable = $('.header--util').find(':focusable').last(),
		  $gnbNextFocusable = $('#container').find(':focusable').first(),
		  $quickFocusable = $('.quick--menu').find(':focusable').first(),
		  $seachFavoriteLink = $('.search--input__favorite').find('a');

	$gnbPrevFocusable
	.add($gnbNextFocusable)
	.add($quickFocusable)
	.add($seachFavoriteLink)
	.on('focus', function(){
		$gnbGlobalSub.stop(true, false).fadeOut(200);
		$gnbActiveBar.css({ 'opacity': 0, });
		$gnbGlobal.removeClass('active');
		$gnbGlobal.stop(true, false).animate({
			'height': gnbGlobalHeight
		}, {
			duration: 500,
			easing: 'easeOutExpo'
		});
		$gnbGlobalList.find('> li').removeClass('gnb__bg');
	});

	$quickFocusable.on('focus', function(){
		globarSearchHide();
	});

	// Header Search 
	const $globarSearch = $('.header--search'),
		  $globarSearchBtn = $('.header--global__search .btn--search');

	$globarSearchBtn.on('click', function(e){
		let txt = $globarSearch.hasClass('active') ? '통합검색 열기' : '통합검색 닫기';
		$(this).text(txt).attr('title', txt).toggleClass('active');
		$globarSearch.toggleClass('active').stop().slideToggle(300, 'easeOutExpo');
		e.preventDefault();
	});

	let globarSearchHide = function(){
		$globarSearch.removeClass('active').stop().slideUp(300, 'easeOutExpo');
		$globarSearchBtn.text('통합검색 열기').attr('title', '통합검색 열기');
	}

	// Banner Slide First
	const $bannerFirst = $('.banner__first'),
		  $bannerFirstSlide = $bannerFirst.find('.banner__slide'),
		  $bannerFirstPrev = $bannerFirst.find('.banner__prev'),
		  $bannerFirstNext = $bannerFirst.find('.banner__next'),
		  $bannerFirstAuto = $bannerFirst.find('.banner__auto');
	
	if($bannerFirstSlide.length != 0){
		$bannerFirstSlide.slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000
		});
	}

	$bannerFirstPrev.on('click', function(e){
		$bannerFirstSlide.slick('slickPrev');
		e.preventDefault();
	});

	$bannerFirstNext.on('click', function(e){
		$bannerFirstSlide.slick('slickNext');
		e.preventDefault();
	});

	$bannerFirstAuto.on('click', function(e){
		if( $(this).hasClass('active') ) {
			$bannerFirstSlide.slick('slickPlay');
		} else {
			$bannerFirstSlide.slick('slickPause');
		}
		let txt = $(this).hasClass('active') ? '메인배너 정지' : '메인배너 시작';
		$(this).text(txt).attr('title', txt)
		$(this).toggleClass('active');
		e.preventDefault();
	});

	// Banner Slide Second
	const $bannerSecond = $('.banner__second'),
		  $bannerSecondSlide = $bannerSecond.find('.banner__slide'),
		  $bannerSecondAuto = $bannerSecond.find('.banner__auto');

	$bannerSecondSlide.on('init afterChange', function(event, slick, currentSlide, nextSlide){
		$(this).find('.slick-slide a').attr('tabindex', -1);
		$(this).find('.slick-current a').attr('tabindex', 0);
	});

	if($bannerSecondSlide.length != 0){
		$bannerSecondSlide.slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			dots: true,
			accessibility: false,
			appendDots: $bannerSecond.find('.banner__paging'),
			customPaging : function(slider, i) {
				return '<button type="button" class="dot" title="'+ parseInt(i+1) +'번 50주년배너 보기">'+ parseInt(i+1) +'번 5주년배너 보기</button>';
			}
		});
	}

	$bannerSecondAuto.on('click', function(){
		if( $(this).hasClass('active') ) {
			$bannerSecondSlide.slick('slickPlay');
		} else {
			$bannerSecondSlide.slick('slickPause');
		}
		let txt = $(this).hasClass('active') ? '50주년배너 정지' : '50주년배너 시작';
		$(this).text(txt).attr('title', txt)
		$(this).toggleClass('active');
	});

	// 교육데이터 배너 Slide
	const $bannerEdu = $('.banner__navigation'),
		  $bannerEduSlide = $bannerEdu.find('.banner__slide'),
		  $bannerEduAuto = $bannerEdu.find('.banner__auto');

	$bannerEduSlide.on('init afterChange', function(event, slick, currentSlide, nextSlide){
		$(this).find('.slick-slide a').attr('tabindex', -1);
		$(this).find('.slick-current a').attr('tabindex', 0);
	});

	if($bannerEduSlide.length != 0){
		$bannerEduSlide.slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			dots: true,
			accessibility: false,
			appendDots: $bannerEdu.find('.banner__paging'),
			customPaging : function(slider, i) {
				return '<button type="button" class="dot" title="'+ parseInt(i+1) +'번 교육데이터 배너 보기">'+ parseInt(i+1) +'번 교육데이터 배너 보기</button>';
			}
		});
	}

	$bannerEduAuto.on('click', function(){
		if( $(this).hasClass('active') ) {
			$bannerEduSlide.slick('slickPlay');
		} else {
			$bannerEduSlide.slick('slickPause');
		}
		let txt = $(this).hasClass('active') ? '교육데이터 배너 정지' : '교육데이터 배너 시작';
		$(this).text(txt).attr('title', txt)
		$(this).toggleClass('active');
	});
	

	// 간행물 Slide
	var publicationSlide = {
		1: { slider : '#publication__slide-1', title: 'NEW' },
		2: { slider : '#publication__slide-2', title: '연구보고서' },
		3: { slider : '#publication__slide-3', title: 'KEDI Brief'},
		4: { slider : '#publication__slide-4', title: '교육개발'},
		5: { slider : '#publication__slide-5', title: '교육정책포럼'},
		6: { slider : '#publication__slide-6', title: '뉴스레터'},
	};

	$.each(publicationSlide, function() {
		if($(this.slider).length != 0){
			$(this.slider).slick({
				infinite: false,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow: '<button type="button" class="slick-prev" title="이전 '+ this.title +' 간행물 목록">이전 '+ this.title +' 간행물 목록</button>',
				nextArrow: '<button type="button" class="slick-next" title="다음 '+ this.title +' 간행물 목록">다음 '+ this.title +' 간행물 목록</button>'
			});
		}
	});

	// 간행물 Tab
	const $publicationTab = $('.publication__tab'),
		  $publicationSlide = $publicationTab.find('.publication__slide'),
		  $tabToggle = $publicationTab.find('.tab__toggle');

	$tabToggle.on('click', function(e){
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		$publicationSlide.css({ 'opacity': 0, 'visibility': 'hidden' });
		$(this).parent('li').find('.publication__slide').css({ 'opacity': 1, 'visibility': 'visible' });
		e.preventDefault();
	});

	$tabToggle.on('keyup', function(e){
		let idx = $(this).parent().index(),
			chk;

		if( e.keyCode === 37 ) {
			chk = idx === 0 ? 0 : idx - 1;
			$publicationTab.find('li').eq(chk).find('> a').focus();
		} else if( e.keyCode === 39 ) {
			$publicationTab.find('li').eq(idx + 1).find('> a').focus();
		}
	});

	// Issue, 보도자료  Slide
	const $releaseSlide = $('.release__slide');

	if($releaseSlide.length != 0){
		$releaseSlide.slick({
			infinite: false,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<button type="button" class="slick-prev" title="이전 보도자료 목록">이전 보도자료 목록</button>',
			nextArrow: '<button type="button" class="slick-next" title="다음 보도자료 목록">다음 보도자료 목록</button>'
		});
	}

	// 운영사이트 Scroll
	const $siteList = $('.site__list .site__scroll');
	/* 22-05-11 수정 */
	let defaultDuration = 15000,
		per = 0,
		scrollPct = 0,
		perCalc;

	const scrollDown = function(value){
		$siteList.addClass('scrollDown').removeClass('scrollUp');
		per = 100 - value;
		perCalc = defaultDuration * per / 100;
		setTimeout(function(){
			$siteList.mCustomScrollbar('scrollTo', 'last',{
				scrollInertia: perCalc,
				scrollEasing: 'linear',
				callbacks: true
			});
		}, 500);
	}

	const scrollUp = function(value){		
		$siteList.addClass('scrollUp').removeClass('scrollDown');
		per = 0 + value;
		perCalc = defaultDuration * per / 100;
		setTimeout(function(){
			$siteList.mCustomScrollbar('scrollTo', 'top',{
				scrollInertia: perCalc,
				scrollEasing: 'linear',
				callbacks: true
			});
		}, 500);
	}

	$siteList.mCustomScrollbar({
		autoHideScrollbar: false,
		advanced:{ updateOnContentResize: true },
		callbacks:{
			onInit: function(){
				scrollDown(0);
			},
			onScroll: function(){
				scrollPct = parseInt(this.mcs.topPct);
			},
			onTotalScroll: function(){
				scrollUp(scrollPct);
			},
			onTotalScrollBack: function(){
				scrollDown(scrollPct);
			},
			onUpdate: function(){
				if( $siteList.hasClass('scrollDown') ) {
					scrollDown(scrollPct);
				} else {
					scrollUp(scrollPct);
				}
			}
	  	}
	});

	$siteList.find(':focusable').on('focus', function(){
		$siteList.mCustomScrollbar('stop');
	});

	$siteList.on('mouseover', function(){
		$siteList.mCustomScrollbar('stop');
	});

	$('.event__more').add('.footer--link__list > li:first-child a').on('focus', function(){
		dummyFunc();
	});

	$siteList.on('mouseleave', function(){		
		dummyFunc();
	});

	let dummyFunc = function(){
		var $dummyEl = '<div class="dummyElement" style="height: 200px;" />';
		$siteList.append($dummyEl);
		setTimeout(function(){
			$('.dummyElement').remove();
		}, 100);
	}
	/* //22-05-11 수정 */

	// Quick menu
	let $quickMenu = $('.quick--menu'),
		quickHeight = $quickMenu.outerHeight(true),
		windowScrollTop,
		scrollBottom;

	let quickFixed = function() {
		let quickFixedInit = 195; // 2022-05-11 수정

		$(window).on('scroll resize', function() {
			windowScrollTop = $(this).scrollTop();
			scrollBottom = $(document).height() - $(window).height() - windowScrollTop;

			let headerSearchActive = $('.header--search').hasClass('active') ? 200 : 0;

			if( $(this).scrollTop() >= (quickFixedInit + headerSearchActive) ) {
				$quickMenu.addClass('fixed');
			} else {
				$quickMenu.removeClass('fixed');
			}
			
			let documentH = $(document).height(),
				footerH = $('#footer--wrap').height() + 65,
				bottomFixedInitCalc = documentH - footerH,
				quickPos = windowScrollTop + quickHeight + 20,
				bottomFixedClac = footerH - scrollBottom;

			if( quickPos >= bottomFixedInitCalc ) {
				$quickMenu.addClass('fixedBottom');
				$quickMenu.css({
					'bottom': bottomFixedClac
				});
			} else {
				$quickMenu.removeClass('fixedBottom').removeAttr('style');
			}

		}).resize();
	}

	const $quickTop = $('.quick--top');

	let quickTopFunc = function(){
		$quickTop.on('click', function(e){
			e.preventDefault();
			var completeCalled = false;
			$('html, body').animate({ scrollTop: 0 }, {
				asing: 'swing',
     			duration: 500,
				complete : function(){
					if(!completeCalled){
						completeCalled = true;
						e.target.blur();
						$('#wrap').focus();		
					}
				}
			});
		});
	}
	
	quickTopFunc();
	quickFixed();  

});