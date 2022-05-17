$(document).ready(function(){
	$(".dateclick").dateclick();	// DateClick
	$(".datepicker").datepicker({	// Datepicker
		showButtonPanel: true,
		dateFormat: "yy.mm.dd",
		beforeShow: function(input){
			setTimeout(function(){
				$(input).datepicker("widget").find(".ui-datepicker-current").hide();
				var clearButton = $(input ).datepicker("widget").find(".ui-datepicker-close");
				clearButton.unbind("click").bind("click",function(){ $.datepicker._clearDate(input); });
				
				$('.ui-state-active').removeClass('ui-state-active'); // 20170330 선택날짜를 달력에 표시 안 함 ymw
			}, 1);
		}
		
	}).attr("readonly", true);
});

// DateClick
$.fn.dateclick = function(){
	var $obj = $(this);
	$obj.click(function(){
		$(this).parent().find("input").focus();
	});
}

$(function(){
	$.datepicker.regional['ko'] = {
		//showOn: "both", 
		//buttonImage: "../images/common/btn_calendar.png",
		//buttonImageOnly: true,
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: 'yy/mm/dd',
		firstDay: 0,
		gotoCurrent: true,
		changeMonth: true,			// 월 변경가능
		changeYear: true,			// 년 변경가능
		showMonthAfterYear: true,	// 년 뒤에 월 표시
		//yearSuffix: '년',
		currentText: '오늘',
		closeText: '닫기',
		prevText: '지난달',
		nextText: '다음달'
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
});