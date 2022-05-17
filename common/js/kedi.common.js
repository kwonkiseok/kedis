$(function(){
	uiTitle();			// Title
	uiGnbMove();		// GNB
	uiLnbMenu();		// LNB
	uiQuick();			// Quick Menu
	uiFaq();			// FAQ
	uiSimpleToggle();	// Toggle
	uiTab();			// Tab
	uiLocation();		// Location
	uiSiteLayer();		// Footer Button Toggle
});

var uiTitle = function(){
	var titVal = $("#content .contTit").text();

	if(titVal.length > 0) {
		document.title = titVal + " | " + "한국교육개발원";
	} else {
		document.title = "한국교육개발원";
	}
	
	// 웹접근성 처리(공통 팝업 title 출력)
	var popupVal = $(".layerPopShow #tit").text();
	if(popupVal.length > 0) {
		document.title = popupVal;
	}
},

uiGnbMove = function() {
	var $gnbFocusCheck = false;
	var $obj = $(".menu .innerBox"), 
		$od = $obj.find("> ul > li"), 
		$oda = $od.find("> a"), 
		$sub = $obj.find(".submenu"),
		tdH;

	/* 2017-04-24*/
	//$obj.parent().parent().on("mouseleave", function() {
	$obj.parent().on("mouseleave", function() {
		$gnbFocusCheck = false;
		setTimeout(function() {
			if ($gnbFocusCheck == false) {
				$od.removeClass("on");
				//$sub.stop().slideUp(300, "swing");
				/* 2017-07-26 수정_01 [s] */
				$sub.slideUp(300, "swing");
				/* 2017-07-26 수정_01 [e] */
			}
		}, 10);
	});

	$od.each(function() {
		$(this).on("mouseover", function() {
			$od.removeClass("on");
			$(this).addClass("on");
			$od.find(".submenu").hide();
			$(this).find(".submenu").show();
			
			tdH = $(this).find(".subDeptWrap").height();
			$(this).find(".submenu .subDeptWrap").css({
				height : tdH
			});
		});
	});

	$od.find(" > a").on("focusin", function() {
		$od.removeClass("on");
		$(this).parent().addClass("on");
		$od.find(".submenu").hide();
		$(this).parent().find(".submenu").show();

		tdH = $(this).parent().find(".subDeptWrap").height();
		$(this).parent().find(".submenu .subDeptWrap").css({
			height : tdH
		});
	});

	$("#container a, .mainWrap a").on("focusin",function(){
		$gnbFocusCheck = false;
		setTimeout(function() {
			if ($gnbFocusCheck == false) {
				$od.removeClass("on");
				$sub.stop().slideUp(300, "swing");
			}
		}, 10);
	});
},

uiLnbMenu = function() {
	var menuover = false;
	var t = $(".lnb ul"),
		e = t.find("ul");
	
		/* 2017-07-26 추가_01 [s] */
		if(!($(".lnb > ul > li.active").has("ul").length > 0)) {
			$(".lnb > ul > li.active").addClass("noimage");
		}
		/* 2017-07-26 추가_01 [e] */

	t.find("ul").addClass("hide");
	t.each(function() {
		$(this).find("a").on("click focusin", function() {
			
			/* 2017-07-26 수정_02 [s] */
			if ($(this).parent().has("ul").length > 0) {
				/*$(this).parent().addClass("active").siblings().removeClass("activeNodep active");*/
				
				/* 2017-08-18 수정_01 [s]*/

				$(this).parent().addClass("active").siblings().removeClass("active");

				/* 2017-08-18 수정_01 [e]*/
				
				menuover = true;
				/* 2017-04-24*/
				//return false;
			} else {
				/*$(this).parent().addClass("activeNodep noimage").siblings().removeClass("active");*/
				
				/* 2017-08-18 수정_02 [s]*/

				$(this).parent().addClass("active noimage").siblings().removeClass("active");

				/* 2017-08-18 수정_02 [e]*/
				
				menuover = true;
			}
			/* 2017-07-26 수정_02 [e] */
			
			/*if ($(this).parent().has("ul").length) {
				$(this).parent().addClass("active").siblings().removeClass("active");
				menuover = true;
				//return false;
			}*/
			
		});
	});
},

uiQuick = function() {
	var i = $("#quick");
	var e;

	if($("body").hasClass("main")){
		e = 124;
	} else {
		e = 20;
	}
	i.css("top", $(window).height);
	i.animate({"top": $(document).scrollTop() + e + "px"}, 300);

	$(window).scroll(function(){
		i.stop();
		i.animate({"top" : $(document).scrollTop() + e + "px"}, 500);
	});
},

uiFaq = function() {
	var t = 300,
		i = $(".uiFaqWrap"),
		e = i.find(".question a, .question button");
	$answer = i.find(".answer"), e.on("click", function(i) {
		$(this).parents("li").is(".active") ? ($answer.stop(!0, !0).slideUp(t), $answer.parent("li").removeClass("active")) : ($(this).parent().next($answer).stop(!0, !0).slideDown(t).parent("li").siblings().find($answer).stop(!0, !0).slideUp(t), $(this).parents("li").addClass("active").siblings().removeClass("active")), i.preventDefault()
	});
},

/* 2017-04-19 [s] */
uiSimpleToggle = function() {
	var t = $("ul.uiAccordion"),
		i = t.find(".toggleBtn"),
		$target = i.next(".targetCont");
	
	/* 2017-07-26 수정_03 [s] */
	var $offset = i.offset();
	i.on("click", function(e) {
		i.find(" > span > img").attr("src", "/images/ico_arr_dn.png"); //다른 리스트 클릭시 이미지 초기화
		$(window).scrollTop($offset.top);

		if(!$(this).hasClass("active")) {
			i.removeClass("active");
			$target.filter(":visible").slideUp("fast");
			$(this).find(" > span > img").attr("src", "/images/ico_arr_up.png");
			$(this).addClass("active").next().stop(true,true).slideDown("fast");
		} else {
			$(this).removeClass("active");
			$(this).next().focus().stop(true,true).slideUp("fast");
		}

		e.preventDefault();
	});
	/* 2017-07-26 수정_03 [e] */
	/*var $offset = i.offset();
	i.on("click", function(e) {
		$(window).scrollTop($offset.top);

		if(!$(this).hasClass("active")) {
			i.removeClass("active");
			$target.filter(":visible").slideUp("fast");
			$(this).addClass("active").next().stop(true,true).slideDown("fast");
		} else {
			$(this).removeClass("active");
			$(this).next().focus().stop(true,true).slideUp("fast");
		}

		e.preventDefault();
	});*/
},
/* 2017-04-19 [e] */

uiTab = function(){
	var $obj = $(".uiTab > li");

	$obj.filter(".on").find("a, button").each(function(){
		var hash = this.hash;
		$(hash).show();
	});
	$obj.find("a, button").on("click", function(e){
		e.preventDefault();
		$(".uiTab li").removeClass("on");
		$(".tabCont").hide();
		$(this).parent().addClass("on");
		$(".tabCont."+$(this).attr("class")).show();
	});

	/* function setHeight(){
		$(".tabCont").css({
			height : $(window).height() - 30
		});
		$(".tabCont").css({
			height : $(window).height() - 80
		});
	};

	setHeight(); */
},

uiLocation = function() {
	var t = $("#breadcrumb"),
		i = t.find("> ul > li"),
		e = i.find(".locBtn"),
		n = e.next(".depthList");

	n.hide(), e.on("click", function(el) {
		if(!$(this).hasClass("active")) {
			e.removeClass("active");
			n.filter(":visible").slideUp("fast");
			$(this).addClass("active").next().stop(true,true).slideDown("fast");
		} else {
			$(this).removeClass("active");
			$(this).next().stop(true,true).slideUp("fast");
		}
		el.preventDefault();
	});
},
/* 2017-04-18 [s] */
uiSiteLayer = function() {
	var t = $("#footer"),
		i = t.find(".siteBtn"),
		e = i.next(".kediSite"),
		state = false;

	$siteClose = e.find(".closeBtn"), i.on("click", function(t) {
		state = true,
		h = e.outerHeight(),
		e.css("bottom", "46px"),
		$(this).addClass("active"),
		e.slideToggle().attr("tabindex", "0").focus(),
		t.preventDefault()
	}), $siteClose.on("click", function(t) {
		state = false,
		i.removeClass("active").focus(),
		i.focus(),
		e.slideToggle(),
		t.preventDefault()
	});
}
/* 2017-04-18 [e] */