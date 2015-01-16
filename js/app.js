(function($){
	$(document).ready(function(){

		if(testUrl){
				handlers.init();
		}
		displayUtils.init();
	});

	var urlTmp = window.location.href;
	var testUrl = urlTmp.indexOf("galerie.html") > -1;
	var urlSplit, nameBuilding, buildingHistory, posMouse, truc;
	var panelVal = 0;
	var indexImg = 0;
	var overLeftPanel = false;
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
					$('.timeline ul').append('<li><p>'+buildingHistory[i]["year"]+'</p></li>');
				}
				$('.timeline p:eq(0)').addClass('timeline-p-hover');
				if(window.matchMedia("(max-width:1024px)").matches){
					$('.footer-nav-day').html('<span class="italic">'+buildingHistory[0]["date"]+'</span>');
					$('.footer-nav-year').html(buildingHistory[0]["year"]);
					$('.block-title h2').html(buildingHistory[0]["titleImg"]);
				}else{
					$('.block-title h2').html(buildingHistory[0]["titleImg"]+' <span class="italic">'+buildingHistory[0]["date"]+' '+buildingHistory[0]["year"]+'</span>');
				}
		},
		mouseClick: function(){
				$('.timeline p').removeClass('timeline-p-hover');
				$('.timeline li').each(function(indexLi){
					$(this).click(function(){
						indexImg = indexLi;
						handlers.changeImg();
						handlers.closePanels();
					});
				});
		},
		mousewheelHandlers: function(e){
			$('.section-galerie').unbind();
			if(panelVal === 1){
				if(e.originalEvent.wheelDelta < 0){
					if(indexImg === (buildingHistory.length-1)){
						indexImg = 0;
					}else{
						indexImg++;
					}
				}else{
					if(indexImg === 0){
						indexImg = (buildingHistory.length-1);
					}else{
						indexImg--;
					}
				}
				handlers.changeHoverTimeline();
			}else if(!overLeftPanel){
				if(e.originalEvent.wheelDelta < 0){
					handlers.afterImg();
				}else{
					handlers.beforeImg();
				}
			}
			var stopFunction = setTimeout(function(){
				$('.section-galerie').unbind().bind({'mousewheel': handlers.mousewheelHandlers});
			}, 300);
		},
		closePanels: function(){
			panelVal = 0;
			$('.section-galerie').unbind().bind({'mousewheel': handlers.mousewheelHandlers});
			$('.overlay').removeClass('overlay-active-black').removeClass('overlay-active-color');
			if(window.matchMedia("(max-width:1024px)").matches) {
					$('.left-panel').css('left','-100%');
				}else{
					$('.left-panel').css('left','-40.66667%');
					$('.right-panel').css('right', '-17%');
			}
		},
		changeHoverTimeline: function(){
				$('.timeline p').removeClass('timeline-p-hover');
				$('.timeline p:eq('+indexImg+')').addClass('timeline-p-hover');
		},
		changeImg: function(){
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[indexImg]['titleImg']+' <span class="italic">'+buildingHistory[indexImg]['date']+buildingHistory[indexImg]['year']+'</span>');
		},
		beforeImg: function(){
				if(indexImg === 0){
						indexImg = (buildingHistory.length-1);
					}else{
						indexImg--;
					}
				handlers.changeHoverTimeline();
				handlers.changeImg();
		},
		afterImg: function(){
				if(indexImg === (buildingHistory.length-1)){
						indexImg = 0;
					}else{
						indexImg++;
					}
				handlers.changeHoverTimeline();
				handlers.changeImg();
		},
		openComments: function(){
			if(panelVal === 0){
				$('.left-panel').css('left', '0');
				$('.overlay').addClass('overlay-active-color');
				$('.right-panel').css('right', '-50%');
				$('.overlay-active-color').click(handlers.closePanels);
				panelVal = -1;
				$('.left-panel').unbind().bind({'mouseover':handlers.overLeftPanelOpenHandler, 'mouseout':handlers.outLeftPanelOpenHandler});
			}else if(panelVal === -1){
				handlers.closePanels();
			}
		},
		overLeftPanelOpenHandler: function()
		{
			overLeftPanel = true;
		},
		outLeftPanelOpenHandler: function()
		{
			overLeftPanel = false;
		},
		openTimeline: function(){
				if(panelVal === 0){
						panelVal = 1;
						$('.timeline ul li p').removeClass('timeline-p-hover');
						$('.timeline ul li:nth-child('+(indexImg+1)+') p').addClass('timeline-p-hover');
						$('.right-panel').css('right', '0');
						$('.overlay').addClass('overlay-active-black');
						$('.left-panel').css('left', '-50%');
						$('.overlay-active-black').click(handlers.changeImg).click(handlers.closePanels);
						$('.timeline p').bind({click: handlers.mouseClick});
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
				if(panelVal == 1){
						if(indexImg == 0){
								indexImg = (buildingHistory.length-1);
							}else{
								indexImg--;
						}
						handlers.changeHoverTimeline();
					}else{
						if(indexImg == 0){
								indexImg = (buildingHistory.length-1);
							}else{
								indexImg--;
						}
						handlers.changeHoverTimeline();
						handlers.changeImg();
				}
		},
		gestionKeyDown: function(){
				if(panelVal == 1){
						if(indexImg == (buildingHistory.length-1)){
								indexImg = 0;
							}else{
								indexImg++;
						}
						handlers.changeHoverTimeline();
					}else{
						if(indexImg == (buildingHistory.length-1)){
								indexImg = 0;
							}else{
								indexImg++;
						}
						handlers.changeHoverTimeline();
						handlers.changeImg();
				}
		},
		gestionKeyEnter: function(){
				if(panelVal == 1){
						handlers.changeImg();
						handlers.closePanels();
				}
		},
		gestionKeyEchap: function(){
				handlers.closePanels();
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