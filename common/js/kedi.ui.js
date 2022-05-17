$(document).ready(function(){
	$(".btnlayerPop").modalLayer();	// Layer Popup
	$(".switchView").switchControl();
	$(".srchWord").moreControl();
	$(".boardSrch").srchControl();
	$(".dateclick").dateclick();	// DateClick
	$(".datepicker").datepicker({	// Datepicker
		showButtonPanel: true,
		dateFormat: "yy-mm-dd",
		beforeShow: function(input){
			setTimeout(function(){
				$(input).datepicker("widget").find(".ui-datepicker-current").hide();
				var clearButton = $(input ).datepicker("widget").find(".ui-datepicker-close");
				clearButton.unbind("click").bind("click",function(){ $.datepicker._clearDate(input); });
			}, 1);
		}
	})/*.attr("readonly", true) //키보드 조작 방지 */;

	close_Control();
	layer_Control();
	videoControl();
	verControl();
});

$.fn.switchControl = function(){
	return this.each(function() {
		var $obj = $(this),
			$btn = $obj.find(".btnSwitch");
		$obj.find(".length:first-child").addClass("first");
		$obj.find(".length").not(".first").hide();

		$btn.on("click", function(){
			if(!$(this).hasClass("on")) {
				$(this).addClass("on");
				$(this).html('<span class="ico on">리스트 접기</span>');
				$obj.find(".length").not(".first").stop().slideDown("fast", function(){ $obj.find(".length").removeAttr("style"); });
			} else {
				$(this).removeClass("on");
				$(this).html('<span class="ico">리스트 펼치기</span>');
				$obj.find(".length").not(".first").stop().slideUp("fast");
			}
		});
	});
}

$.fn.moreControl = function(){
	var i = $(this),
		e = i.find(".more"),
		t = i.find(".wordList");
	t.css({ "height":"23px" });

	e.click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on").html("닫기");
			t.removeAttr('style');
		}else{
			$(this).removeClass("on").html("더보기");
			t.css({ "height":"23px" });
		}
		return false;
	});
}

$.fn.srchControl = function(){
	var i = $(this),
		e = i.find(".btnDetail"),
		t = $(".detailWrap"),
		f = t.find(".btnClose");

	t.hide();
	e.on("click", function(){
		if(!$(this).hasClass("on")) {
			$(this).addClass("on");
			t.stop().slideDown("fast", function(){ t.removeAttr("style"); });
		} else {
			$(this).removeClass("on");
			t.stop().slideUp("fast");
		}
	});
	f.on("click", function(){
		t.stop().slideUp("fast");
		e.removeClass("on").focus();
	});
}

// DateClick
$.fn.dateclick = function(){
	var $obj = $(this);
	$obj.click(function(){
		$(this).parent().find("input").focus();
	});
}

$(function(){
	$.datepicker.regional['ko'] = {
		closeText: '닫기',
		prevText: '이전달',
		nextText: '다음달',
		currentText: '오늘',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		gotoCurrent: true,
		changeMonth: true,			// 월 변경가능
		changeYear: true,			// 년 변경가능
		showMonthAfterYear: true,	// 년 뒤에 월 표시
		weekHeader: '주',
		dateFormat: 'yymmdd',
		firstDay: 0,
		isRTL: false,
		yearSuffix: '년',
		showAnim: 'slideDown'
	};

	$.datepicker.setDefaults($.datepicker.regional['ko']);

	// 시작일, 종료일 이전날짜 선택 막기
	$('#startDate').datepicker();
	$('#startDate').datepicker("option", "maxDate", $("#endDate").val());
	$('#startDate').datepicker("option", "onClose", function(selectedDate) {
		$("#endDate").datepicker("option", "minDate", selectedDate);
	});

	$('#endDate').datepicker();
	$('#endDate').datepicker("option", "minDate", $("#startDate").val());
	$('#endDate').datepicker("option", "onClose", function(selectedDate) {
		$("#startDate").datepicker("option", "maxDate", selectedDate);
	});

	//레이어 팝업 오늘 하루 보지 않기
	//layer_control();


	//2017-11-23 Tab 로딩기능
	uiTab();
	scrollTop();
});

var uiTab = function(){
	var $tablist = $(".uiTabs > li");

	$tablist.filter(".active").find("a").each(function(){
		var hash = this.hash;
		$(hash).show();
	});
	$tablist.find("a").on("click", function(e){
		var hash = this.hash;

		$(this).parent("li").addClass("active").siblings().removeClass("active");
		$(".newtabCont").hide();
		$(hash).show();
		e.preventDefault();
	});
},
scrollTop = function(){
	var $obj = $("#top");

	$("#top").hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$obj.show();
		} else {
			$obj.hide();
		}
	});

	$("#top a").click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 10);
		return false;
	});
},
// 2017-11-23 Tab 로딩기능

//popup 공지 닫기
close_Control = function(){
	// $(document).on('ready',function(){

	// });
	if($('.notice_pop.none').length){
			$('.notice_pop').removeClass('none');
		}
	$('.notice_pop .btn_close').on('click kepress',function(){
		$(this).parent().parent().addClass('none');
		$(this).parent().parent().delay("slow").fadeOut();
		return false;
	});
},

layer_Control = function(){
	// getCookie / setCookie
	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	    }
	    return "";
	};
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString() + ";";
		document.cookie = cname + "=" + cvalue + "; " + expires;
//		d.setDate(d.getDate()  + exdays);
//		document.cookie = cname + "=" + cvalue + "; expires=" + d.toUTCString() + ";";
	};
	function layerClose(){
		$("#dayClose").click(function(obj){
			obj.attr("checked",true);
		});
	    if($("#dayClose").is(":checked") ==true){
	        setCookie("close","Y",1);
	    }
	    $("#notice_pop").addClass('none');
	};
	var cookiedata = document.cookie;
    if(cookiedata.indexOf("close=Y")<=0 && cookiedata.indexOf("close=Y") != -1){
        $("#notice_pop").removeClass('none');
		$("#notice_pop").css("display", "none");
    }else{
        $("#notice_pop").addClass('none');
    }
    $("#notice_pop .btn_close").click(function(){
        layerClose();
    });
},

// 비디오 플레이어
videoControl = function(){
	$('.videoBox video').on('mouseover keyup',function(){
		$(this).attr('controls','ture');
	});
	$('.videoBox').on('mouseout',function(){
		$('.videoBox video').removeAttr('controls','ture');
	});
}

//개인정보처리방침 버전 확인
verControl = function(){
	$("#verCheck").on('change', function(){
		var verData = $(this).val();
		// console.log("Value: " + verData);
		$.ajax({
            type : "GET", 
            url : verData,
            dataType : "html",
            // error : function(){
            //     alert("준비중입니다.");
            // },
            success : function(old_Data){
                $("#oldVer").html(old_Data);
            }
        });
        
        $("#oldVer").addClass('active');
        $('.closeBtn').addClass('active');
        return false;
	});
	$('.closeBtn').on('click keypress',function(){
		$("#oldVer").removeClass('active');
		$('.closeBtn').removeClass('active');
		return false;
	});
}