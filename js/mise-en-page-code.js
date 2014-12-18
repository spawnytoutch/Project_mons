(function($){
	$(document).ready(function(){
		urlUtils.init();
		handlers.init();
		
	});
var handlers={
	init: function()
	{
		$('.btn-menu').unbind().bind({click:handlers.boxLessonClickHandler});
	},
	boxLessonClickHandler : function()
	{
		if(!$(this).hasClass('selected')){
			var idLink = $(this).attr('link-id'), urlRecup = document.location.href, urlSplit = urlRecup.split('#');
			document.location.href = urlSplit[0]+'#'+idLink;
			$('.btn-menu').removeClass('selected');
			$(this).addClass('selected');
			$('.box-lesson').hide();
			$('.box-lesson[link-id="'+idLink+'"]').fadeIn(200);
		}else{
			$('.btn-menu').removeClass('selected');
			$('.box-lesson').hide();
		}
	}
};
var urlUtils={
	init : function()
	{
		urlUtils.urlInspect();
	},
	urlInspect : function()
	{
		var urlRecup = document.location.href, urlSplit = urlRecup.split('#');
		if(urlSplit[1]){
			$('.btn-menu').removeClass('selected');
			$('.btn-menu[link-id="'+urlSplit[1]+'"]').addClass('selected');
			$('.box-lesson').hide();
			$('.box-lesson[link-id="'+urlSplit[1]+'"]').fadeIn(200);
		}else{
			$('.btn-menu[link-id="01"]').addClass('selected');
		}
	}
};
})(jQuery);