/* menu_script.js */

$(function(){
	$("#main_nav > ul > li").mouseenter(function(){
		$("#main_nav > ul > li").removeClass("active");
		$(this).addClass("active");
	});

	$("#main_nav > ul > li").mouseleave(function(){
		$("#main_nav > ul > li").removeClass("active");
		$("#main_nav > ul > li.select").addClass("active");
	});
});