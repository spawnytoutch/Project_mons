 (function($){
	$(document).ready(function(){

		displayUtils.init();
		if(testUrl){
				handlers.init();
		}

	});

	var urlTmp = window.location.href;
	var testUrl = urlTmp.indexOf("galerie.html") > -1;
	var urlSplit, nameBuilding, buildingHistory, elem, mc;
	var panelVal = 0;
	var indexImg = 0;
	var overLeftPanel = false;

	var handlers = {
		init: function(){
				elem = document.getElementById('section-gallery');
				mc = new Hammer(elem);

				handlers.dataJson();
				handlers.callAjax();
				mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL});
				mc.on("swipeleft swiperight swipeup swipedown", handlers.hammerHandlers);
				$('.arrow-up').bind({click: handlers.beforeImg});
				$('.arrow-down').bind({click: handlers.afterImg});
				$('.btn-comments').bind({click: handlers.openComments});
				$('.btn-timeline').bind({click: handlers.openTimeline});
				$('#leftBtnClose').bind({click: handlers.closePanels});
				$('#rightBtnClose').bind({click: handlers.closePanels});
				$('#section-gallery').bind({mousewheel: handlers.mousewheelHandlers});
				$('.footer-nav-year').bind({click: handlers.toggleMiniNav});
				$(window).bind({keydown: handlers.keyDownHandlers});
		},
		keyDownHandlers: function(e){
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
		},
		hammerHandlers: function(e){
			switch(e.type) {
						case 'swiperight':
						//alert('r');
						handlers.openComments();
						break;
						case 'swipeleft':
						//alert('l');
						if(window.matchMedia("(max-width:1024px)").matches){
							handlers.closePanels();
						}else{
							handlers.openTimeline();
						}
						break;
						case 'swipeup':
						//alert('u');
						handlers.beforeImg();
						break;
						case 'swipedown':
						//alert('d');
						handlers.afterImg();
						break;
						default:
						break;
					}
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
			$('#gallery-photo').css('background-image', 'url('+ buildingHistory[0]["image"] +')');
			$('.title-picture h1').text(buildingHistory[0]["titleImg"]);
			$('.comments p').text(buildingHistory[0]["comment"]);
			for (i = 0; i < buildingHistory.length; i++){
				$('.timeline ul').append('<li><p>'+buildingHistory[i]["year"]+'</p></li>');
				$('.timeline-mobile ul').append('<li><p>'+buildingHistory[i]["year"]+'</p></li>');
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
		pressMiniTimeline: function(){
			$('.timeline-mobile p').removeClass('timeline-mobile-p-hover');
			$('.timeline-mobile li').each(function(indexLi){
				$(this).click(function(){
					indexImg = indexLi;
					handlers.changeImg();
					$('.footer-nav-day').html('<span class="italic">'+buildingHistory[indexLi]["date"]+'</span>');
					$('.footer-nav-year').html(buildingHistory[indexLi]["year"]);
					handlers.closePanels();
				});
			});
		},
		mousewheelHandlers: function(e){
			$('#section-gallery').unbind();
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
				$('#section-gallery').unbind().bind({'mousewheel': handlers.mousewheelHandlers});
			}, 300);
		},
		closePanels: function(){
			panelVal = 0;
			$('#section-gallery').unbind().bind({'mousewheel': handlers.mousewheelHandlers});
			$('.overlay').removeClass('overlay-active-black').removeClass('overlay-active-color');
			$('.timeline-mobile').addClass('display-off');
			$('.box-position').removeClass('display-off');
			$('.cross-left-panel').addClass('display-off');
			if(window.matchMedia("(max-width:1024px)").matches) {
					$('.left-panel').css('left','-100%');
					//$('.footer-nav').toggleClass('display-off');
				}else{
					$('.left-panel').css('left','-40.66667%');
					$('.right-panel').css('right', '-17%');
			}
		},
		changeHoverTimeline: function(){
				$('.timeline p').removeClass('timeline-p-hover');
				$('.timeline p:eq('+indexImg+')').addClass('timeline-p-hover');
		},
		changeBackground: function(){
			var cssFunction = setTimeout(function(){
				$('#gallery-photo').css('background-image', 'url('+ buildingHistory[indexImg]['image'] +')').fadeIn(500);
			}, 600);
		},
		changeImg: function(){
				$('#gallery-photo').fadeOut(500, handlers.changeBackground());
				$('.title-picture h1').text(buildingHistory[indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[indexImg]['comment']);
				if(window.matchMedia("(min-width:1024px)").matches) {
					$('.block-title h2').html(buildingHistory[indexImg]['titleImg']+' <span class="italic">'+buildingHistory[indexImg]['date']+buildingHistory[indexImg]['year']+'</span>');
				}else{
					$('.footer-nav-day').html('<span class="italic">'+buildingHistory[indexImg]["date"]+'</span>');
					$('.footer-nav-year').html(buildingHistory[indexImg]["year"]);
				}
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
				if(window.matchMedia("(max-width:1024px)").matches) {
					//$('.cross-left-panel').removeClass('display-off');
					$('#section-gallery').unbind();
					$('.box-position').toggleClass('display-off');
				}
				$('.cross-left-panel').removeClass('display-off');
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
		overLeftPanelOpenHandler: function(){
			overLeftPanel = true;
		},
		outLeftPanelOpenHandler: function(){
			overLeftPanel = false;
		},
		toggleMiniNav: function(){
			if(panelVal === -1){
				handlers.closePanels();
			}
			$('.timeline-mobile').toggleClass('display-off');
			$('.box-position').toggleClass('display-off');
			$('.timeline-mobile').unbind().bind({'mouseover':handlers.overDownMiniTimeline, 'mouseout':handlers.outDownMiniTimeline});
			$('.timeline-mobile ul li p').removeClass('timeline-mobile-p-hover');
			$('.timeline-mobile ul li:nth-child('+(indexImg+1)+') p').addClass('timeline-mobile-p-hover');
			$('.timeline-mobile p').bind({click: handlers.pressMiniTimeline});
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
				$('#btn-pop-in').bind({click: displayUtils.showInstructions});
				$('#btn-close-pop-in').bind({click: displayUtils.showInstructions});
				$('.overlay-popin').bind({click: displayUtils.showInstructions});
				$('.key1').bind({mouseenter: displayUtils.showTextInstructionsKeyLeft, mouseleave: displayUtils.showTextInstructionsKeyLeft});
				$('.key2').bind({mouseenter: displayUtils.showTextInstructionsKeyDown, mouseleave: displayUtils.showTextInstructionsKeyDown});
				$('.key3').bind({mouseenter: displayUtils.showTextInstructionsKeyUp, mouseleave: displayUtils.showTextInstructionsKeyUp});
				$('.key4').bind({mouseenter: displayUtils.showTextInstructionsKeyRight, mouseleave: displayUtils.showTextInstructionsKeyRight});
				$('.mouse').bind({mouseenter: displayUtils.showTextInstructionsMouse, mouseleave: displayUtils.showTextInstructionsMouse});
				$('#burger-button').bind({click: displayUtils.toggleMenuBurger});
		},
		resizeWindow: function(){
				var posTmpArrow = ($(window).innerHeight())-105;
				var posTmpFooterTimeline = ($(window).innerHeight())-50;
				var heightMiniTimeline = ($(window).innerHeight())-170;
				$('.box-arrow.down').css({'top': posTmpArrow});
				$('.footer-nav').css({'top': posTmpFooterTimeline});
				$('.timeline-mobile ul').css({'height': heightMiniTimeline});
		},
		showInstructions: function(){
			$('.pop-in').toggleClass('display-off');
			$('section').toggleClass('blur-filter');
			$('.home-bg').toggleClass('blur-filter');
			$('header').toggleClass('blur-filter');
			$('footer').toggleClass('blur-filter');
		},
		showTextInstructionsKeyLeft: function(){
			$('.text1').toggleClass('display-off').html('Touche Gauche :<br><br>La touche gauche permet l’ouverture de la ligne du temps ou la fermeture des commentaires.');
		},
		showTextInstructionsKeyRight: function(){
			$('.text1').toggleClass('display-off').html('Touche Droite :<br><br>La touche gauche permet l’ouverture des commentaires ou la fermeture de la ligne du temps.');
		},
		showTextInstructionsKeyUp: function(){
			$('.text1').toggleClass('display-off').html('Touche Haut :<br><br>Permet de remonter chronologiquement dans le temps vers une date antérieure, et de faire défiler les images de la galerie. Mais aussi de naviguer dans la ligne du temps.');
		},
		showTextInstructionsKeyDown: function(){
			$('.text1').toggleClass('display-off').html('Touche Bas :<br><br>Permet d’avancer chronologiquement dans le temps vers une date ultérieure, et de faire défiler les images de la galerie. Mais aussi de naviguer dans la ligne du temps.');
		},
		showTextInstructionsMouse: function(){
			$('.text1').toggleClass('display-off').html('Scroll de la souris:<br><br>La souris permet une navigation classique au clic et à la molette dans la galerie et partout ailleurs sur le site.');
		},
		toggleMenuBurger: function(){
			$('.header-mobile-nav').toggleClass('display-off');
			$('.section-contact').toggleClass('display-off');
			$('.section-about').toggleClass('display-off');
			$('.section-upload').toggleClass('display-off');
			$('#section-gallery').toggleClass('display-off');
		}
	};
})(jQuery);