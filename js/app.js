(function($){
	$(document).ready(function(){

		if(testUrl){
				handlers.init();
		}
		displayUtils.init();
	});

	var urlTmp = window.location.href;
	var testUrl = urlTmp.indexOf("galerie.html") > -1;
	var urlSplit, nameBuilding, buildingHistory, posMouse;
	var panelVal = 0;
	var indexImg = 0;
	var handlers = {
		init: function(){
				handlers.dataJson();
				handlers.callAjax();
				$('.arrow-up').bind({click: handlers.beforeImg});
				$('.arrow-down').bind({click: handlers.afterImg});
				$('.btn-comments').bind({click: handlers.openComments});
				$('.btn-timeline').bind({click: handlers.openTimeline});
				$('.fa-close').bind({click: handlers.closePanels});
				$('.section-galerie').bind({mousewheel: handlers.mousewheelHandlers});
				$(window).bind('keydown', function(e) {
					switch(e.keyCode) {
						case 37: // Gauche
							handlers.gestionKeyLeft(e);
						break;
						case 39: // Droite
							handlers.gestionKeyRight(e);
						break;
						case 38: // Haut
							handlers.gestionKeyUp(e);
						break;
						case 40: // Bas
							handlers.gestionKeyDown(e);
						break;
						case 13: // Enter
							handlers.gestionKeyEnter(e);
						break;
						case 27: // Echap
							handlers.gestionKeyEchap(e);
						default:
						break;
					}
				});
		},
		dataJson: function(){
			urlSplit = urlTmp.split('?');
			nameBuilding = urlSplit[1].split('=')[1];
		},
		callAjax: function(){
			$.ajax({
				url: 'js/data-buildingHistory.json',
				dataType : 'json',
				success : function(result){
					buildingHistory = result[eval('nameBuilding')];
					handlers.initializeDisplay();
				},
				error : function(xhr,status,detail){
					console.log(detail);
				}
			});
		},
		initializeDisplay: function(){
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[0]["image"] +')');
				$('.title-picture h1').text(buildingHistory[0]["titleImg"]);
				$('.comments p').text(buildingHistory[0]["comment"]);
				for (i = 0; i < buildingHistory.length; i++){
					$('.timeline ul').append('<li><a href="#">'+buildingHistory[i]["year"]+'</a></li>');
				}
				if(window.matchMedia("(max-width:1024px)").matches){
					$('.footer-nav-day').html('<span class="italic">'+buildingHistory[0]["date"]+'</span>');
					$('.footer-nav-year').html(buildingHistory[0]["year"]);
					$('.block-title h2').html(buildingHistory[0]["titleImg"]);
				}else{
					$('.block-title h2').html(buildingHistory[0]["titleImg"]+' <span class="italic">'+buildingHistory[0]["date"]+' '+buildingHistory[0]["year"]+'</span>');
				}
		},
		mousewheelHandlers: function(e){
			if(e.originalEvent.wheelDelta < 0){
						handlers.afterImg();
					}else{
						handlers.beforeImg();
					}
		},
		closePanels: function(){
			panelVal = 0;
			$('.section-galerie').bind({mousewheel: handlers.mousewheelHandlers});
			$('.overlay').removeClass('overlay-active-black').removeClass('overlay-active-color');
			if(window.matchMedia("(max-width:1024px)").matches) {
					$('.left-panel').css('left','-100%');
				}else{
					$('.left-panel').css('left','-40.66667%');
					$('.right-panel').css('right', '-17%');
			}
		},
		beforeImg: function(){
				if(indexImg === 0){
						indexImg = (buildingHistory.length-1);
					}else{
						indexImg--;
					}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[indexImg]['titleImg']+' <span class="italic">'+buildingHistory[indexImg]['date']+buildingHistory[indexImg]['year']+'</span>');
		},
		afterImg: function(){
				if(indexImg === (buildingHistory.length-1)){
						indexImg = 0;
					}else{
						indexImg++;
					}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[indexImg]['titleImg']+' <span class="italic">'+buildingHistory[indexImg]['date']+buildingHistory[indexImg]['year']+'</span>');
		},
		openComments: function(){
				$('.section-galerie').mousemove(function(e){
					posMouse = e.pageX;
					console.log(posMouse);
					if(posMouse < $('.left-panel').width()){
						$('.left-panel').mouseenter($('.section-galerie').unbind({mousewheel: handlers.mousewheelHandlers}));
					}else{
						$('.left-panel').mouseout($('.section-galerie').bind({mousewheel: handlers.mousewheelHandlers}));
					}
				});
				if(panelVal === 0){
						$('.left-panel').css('left', '0');
						$('.overlay').addClass('overlay-active-color');
						$('.right-panel').css('right', '-50%');
						$('.overlay-active-color').click(handlers.closePanels);
						panelVal = -1;
					}else if(panelVal === -1){
						handlers.closePanels();
				}
		},
		openTimeline: function(){
				if(panelVal === 0){
						$('.right-panel').css('right', '0');
						$('.overlay').addClass('overlay-active-black');
						$('.left-panel').css('left', '-50%');
						$('.overlay-active-black').click(handlers.closePanels);
						panelVal = 1;
						$('.section-galerie').unbind({mousewheel: handlers.mousewheelHandlers});
					}else if(panelVal === 1){
						handlers.closePanels();
				}
		},
		gestionKeyLeft: function(){
				if(window.matchMedia("(max-width:1024px)").matches){
						if(panelVal === -1){
								handlers.closePanels();
						}
					}else if(panelVal === 0){
						handlers.openTimeline();
					}else if(panelVal === -1){
						handlers.closePanels();
				}
		},
		gestionKeyRight: function(){
				if(panelVal === 0){
						handlers.openComments();
					}else if(panelVal === 1){
						handlers.closePanels();
				}
		},
		gestionKeyUp: function(){
				if(panelVal == 0 || panelVal == -1){
					if(indexImg == 0){
						indexImg = (buildingHistory.length-1);
					}else{
						indexImg--;
				}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[indexImg]['titleImg']+' <span class="italic">'+buildingHistory[indexImg]['date']+buildingHistory[indexImg]['year']+'</span>');
				}
		},
		gestionKeyDown: function(){
				if(panelVal == 0 || panelVal == -1){
					if(indexImg == (buildingHistory.length-1)){
						indexImg = 0;
					}else{
						indexImg++;
				}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[indexImg]['titleImg']+' <span class="italic">'+buildingHistory[indexImg]['date']+buildingHistory[indexImg]['year']+'</span>');
				}
		},
		gestionKeyEnter: function(){
				if(panelVal == 1){
					$('.timeline a').bind('keydown', function(e){
						$('.section-galerie').css('background-image', 'url('+ buildingHistory[e]['image'] +')');
					});
				}
		},
		gestionKeyEchap: function(){
				handlers.closePanels();
		},
		gestionTimeline: function(){
				console.log('poke');
		}
	};
	var displayUtils = {
		init: function(){
				$(window).load(displayUtils.resizeWindow);
				$(window).resize(displayUtils.resizeWindow);
				$('#burger-button').bind({click: displayUtils.toggleMenuBurger});
				$('#burger-button-gallery').bind({click: displayUtils.toggleMenuBurgerGallery});
		},
		resizeWindow: function(){
				var posTmpArrow = ($(window).innerHeight())-105;
				var posTmpFooterTimeline = ($(window).innerHeight())-50;
				$('.box-arrow.down').css({'top':posTmpArrow});
				$('.footer-nav').css({'top':posTmpFooterTimeline});
		},
		toggleMenuBurgerGallery: function(){
			$('.header-mobile-nav').toggleClass('display-off');
			$('.section-galerie').toggleClass('display-off');
		},
		toggleMenuBurger: function(){
			$('.header-mobile-nav').toggleClass('display-off');
			$('.section-contact').toggleClass('display-off');
			$('.section-about').toggleClass('display-off');
			$('.section-upload').toggleClass('display-off');
			if($('body').hasClass('overflow-on')){
				$('body').removeClass('overflow-on');
				$('body').addClass('overflow-off');
			}else{
				$('body').removeClass('overflow-off');
				$('body').addClass('overflow-on');
			}
		}
	};
})(jQuery);