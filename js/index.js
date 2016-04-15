$(function(){
	$('.portal').click(function(){
		$(this).siblings('.portal').find('.body').css('display', 'none');
		$(this).find('.body').toggle(500);
	});
});
