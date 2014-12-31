(function($){
	$(document).ready(function(){
		handlers.init();
		displayUtils.init();
	});
	var panelVal       = 0;
	var indexImg       = 0;
	var stationHistory = [
			{
					titleImg: "La Gare de Mons",
					image: "images/img01.jpg",
					date: "09 avril ",
					year: "1901",
					comment: "09 avril 1901 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
					nameClass: "gare-1901-04-09"
			},
			{
					titleImg: "La Gare de Mons",
					image: "images/img02.jpg",
					date: "29 septembre ",
					year: "1980",
					comment: "29 septembre 1980 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
					nameClass: "gare-1980-09-29"
			},
			{
					titleImg: "La Gare de Mons",
					image: "images/img03.jpg",
					date: "15 juin ",
					year: "2015",
					comment: "15 juin 2015 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
					nameClass: "gare-2015-06-15"
			}
	];
	var handlers = {
		init: function(){
				$('.arrow-up').bind({click: handlers.beforeImg});
				$('.arrow-down').bind({click: handlers.afterImg});
				$('.btn-comments').unbind().bind({click: handlers.openComments});
				$('.btn-timeline').bind({click: handlers.openTimeline});
				/*$('.'+stationHistory.nameClass).bind({click: handlers.gestionTimeline});*/
				$(window).bind({mousewheel:function(e){
					if(e.originalEvent.wheelDelta < 0){
							handlers.beforeImg();
						}else{
							handlers.afterImg();
						}
					}
				});
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
		closePanels: function(){
			$('.left-panel').css('left','-37%');
			$('.overlay').removeClass('overlay-active-black').removeClass('overlay-active-color');
			$('.right-panel').css('right', '-17%');
			panelVal = 0;
		},
		beforeImg: function(){
				if(indexImg === 0){
						indexImg = (stationHistory.length-1);
					}else{
						indexImg--;
					}
				$('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
				$('.title-picture h1').text(stationHistory[indexImg].titleImg);
				$('.comments p').text(stationHistory[indexImg].comment);
				$('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
		},
		afterImg: function(){
				if(indexImg === (stationHistory.length-1)){
						indexImg = 0;
					}else{
						indexImg++;
					}
				$('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
				$('.title-picture h1').text(stationHistory[indexImg].titleImg);
				$('.comments p').text(stationHistory[indexImg].comment);
				$('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
		},
		openComments: function(){
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
					}else if(panelVal === 1){
						handlers.closePanels();
				}
		},
		gestionKeyLeft: function(){
				if(panelVal === 0){
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
				if(panelVal == 0){
					if(indexImg == 0){
						indexImg = (stationHistory.length-1);
					}else{
						indexImg--;
				}
				$('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
				$('.title-picture h1').text(stationHistory[indexImg].titleImg);
				$('.comments p').text(stationHistory[indexImg].comment);
				$('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
				}
		},
		gestionKeyDown: function(){
				if(panelVal == 0){
					if(indexImg == (stationHistory.length-1)){
						indexImg = 0;
					}else{
						indexImg++;
				}
				$('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
				$('.title-picture h1').text(stationHistory[indexImg].titleImg);
				$('.comments p').text(stationHistory[indexImg].comment);
				$('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
				}

		},
		gestionKeyEnter: function(){
				if(panelVal == 1){
					$('.timeline a').bind('keydown', function(e){
						$('section').css('background-image', 'url('+ stationHistory[e].image +')');
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
				displayUtils.initializeDisplay();
		},
		resizeWindow: function(){
				var posTmp = ($(window).innerHeight())-105;
				$('.box-arrow.down').css({'top':posTmp});
		},
		initializeDisplay: function(){
				$('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
				$('.title-picture h1').text(stationHistory[indexImg].titleImg);
				$('.comments p').text(stationHistory[indexImg].comment);
				$('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
				for (i = 0; i < stationHistory.length; i++){
					$('.timeline ul').append('<li><a class="'+stationHistory[i].nameClass+'" href="#">'+stationHistory[i].year+'</a></li>');
				}
		}
	};
})(jQuery);