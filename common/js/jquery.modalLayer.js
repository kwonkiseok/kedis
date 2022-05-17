/*
* jQuery Modal Layer- 0.9
* Copyright (c) 2013 nickname stryper http://gotoplay.tistory.com/
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function($){
	$.fn.modalLayer = function(){
		var $modals = this;
		var $focus ='a[href], area[href], input:not([disabled]), input:not([readonly]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
		var $radioCheck = "input[type='checkbox'], input[type='radio']";

		$modals.click(function(e){
			e.preventDefault();
			var $this = $(this);
			var $targetId = $($(this).attr('href'));
			var $sel_id_focus = $targetId.find($focus);
			var $focus_num = $targetId.find($focus).length;
			var $closeBtn = $targetId.find('.btnlayerClose, .popClose');
			var $checkLabel = $targetId.find($radioCheck);
			var clickAnchor = $this.attr('href');
			var hrefFocus = this;
			var $leftP = ( /*$(window).scrollLeft() +*/ ($(window).width() - $targetId.width()) / 2 );
			var $topP = ( /*$(window).scrollTop() +*/ ($(window).height() - $targetId.height()) / 2 );

			$('body').css("overflow","hidden").find("#container").append('<div class="overlay" tabindex="-1"></div>');
			$('div.overlay').fadeIn(150);

			$targetId.css({ 'top':$topP, 'left':$leftP });
			$targetId.attr('tabindex', '0').attr({ 'aria-hidden':'false', 'aria-live':'polit' }).fadeIn(150).focus();
			$targetId.on('blur', function(){ $(this).removeAttr('tabindex'); });
			setTimeout(function() {	$('div.overlay').css("height",$(document).height()); }, 10);
			$(window).on("resize", function() { $('div.overlay').css("height", $(document).height()); }).resize();

			if($(window).height() < $targetId.height() + 60) {
				$targetId.css({
					'top' : 60,
					'height' : $(window).height() - 196
				});
				$targetId.find(".cont").css("height", $(window).height() - $targetId.find(".head").outerHeight(true) - 256);
				$targetId.find(".cont").css("overflow-y","scroll");
			}

			$('#wrap').attr('aria-hidden','true');
			$(clickAnchor).siblings().find($focus).attr('tabindex','-1');
			$($targetId).find($focus).last().on("keydown", function(e){
				if (e.which == 9) {
					if(e.shiftKey) {
						$($targetId).find($focus).eq($focus_num - 1).focus();
						e.stopPropagation();
					} else {
						$($targetId).find($focus).eq(0).focus();
						e.preventDefault();
					};
				};
			});
			$($targetId).find($focus).first().on("keydown", function(e){
				if(e.keyCode == 9) {
					if(e.shiftKey) {
						$($targetId).find($focus).eq($focus_num - 1).focus();
						e.preventDefault();
					};
				};
			});
			$($targetId).on("keydown", function(e){
				if( $(this).is(":focus") ){
					if(e.keyCode == 9) {
						if(e.shiftKey) {
							$($targetId).find($focus).eq($focus_num - 1).focus();
							e.preventDefault();
						};
					};
				};
			});
			$($checkLabel).on("click", function(){ $(this).focus(); });
			$closeBtn.on("click", {msg:clickAnchor,msg2:hrefFocus},function(e){
				$.fn.hide_modal (e.data.msg,e.data.msg2);
			});
		});
		$.fn.hide_modal = function (info, hrefFocus){
			$(info).attr('aria-hidden','true').fadeOut(150);
			$('#wrap').removeAttr('aria-hidden');
			$('body').css("overflow","");
			$(info).siblings().find($focus).removeAttr('tabindex');
			$('div.overlay').fadeOut(150);
			setTimeout(function() { $('div.overlay').remove(); }, 300);
			$(info).find($radioCheck).prop('checked', false);
			$(info).find("input[type='text']").val('');
			setTimeout(function() { $(hrefFocus).focus(); }, 150);
		};
	};
})(jQuery);