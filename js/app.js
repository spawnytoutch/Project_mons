(function($){
	$(document).ready(function(){

		/*$.ajax({
			url : 'data-buildingHistory.json',
			type : 'GET',
			dataType : 'text'
		});*/

		if(testUrl){
				handlers.init();
		}
		displayUtils.init();
	});

	var urlTmp = window.location.href;
	var testUrl = urlTmp.indexOf("galerie.html") > -1;
	var urlSplit;
	var nameBuilding;
	var buildingHistory = {
			"MaisonFolie":[
					{
							"titleImg": "La Maison Folie",
							"image": "images/maisonfolie/maisonfolie_2000-06-01.jpg",
							"date": "01 juin ",
							"year": "2000",
							"comment": "01 juin 2000 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"ManegeMons":[
					{
							"titleImg": "Le Manege.Mons",
							"image": "images/manegemons/manegemons_2010-08-17.jpg",
							"date": "17 août ",
							"year": "2010",
							"comment": "17 août 2010 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"DepotDesOeuvres":[
					{
							"titleImg": "Le dépôt des œuvres d’art",
							"image": "images/depotdesoeuvres/depotdesoeuvres_2013-07-23.jpg",
							"date": "23 juillet ",
							"year": "2013",
							"comment": "23 juillet 2013 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"Abattoirs":[
					{
							"titleImg": "Les Anciens Abattoirs de Mons",
							"image": "images/abattoirs/abattoirs_2008-11-14.jpg",
							"date": "14 novembre ",
							"year": "2008",
							"comment": "14 novembre 2008 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"Arsonic":[
					{
							"titleImg": "Arsonic",
							"image": "images/arsonic/arsonic_2015-01-11.jpg",
							"date": "11 janvier ",
							"year": "2015",
							"comment": "11 janvier 2015 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"CarreDesArts":[
					{
							"titleImg": "Le Carré des Arts",
							"image": "images/carredesarts/carredesarts_1972-10-09.jpg",
							"date": "09 octobre ",
							"year": "1972",
							"comment": "09 octobre 1972 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"BAM":[
					{
							"titleImg": "Le BAM",
							"image": "images/bam/img01.jpg",
							"date": "09 avril ",
							"year": "1901",
							"comment": "09 avril 1901 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
					},
					{
							"titleImg": "Le BAM",
							"image": "images/bam/img02.jpg",
							"date": "29 septembre ",
							"year": "1980",
							"comment": "29 septembre 1980 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
					},
					{
							"titleImg": "Le BAM",
							"image": "images/bam/img03.png",
							"date": "15 juin ",
							"year": "2015",
							"comment": "15 juin 2015 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
					}
			],
			"CorpsDeVille":[
					{
							"titleImg": "Le Corps de Ville",
							"image": "images/corpsdeville/corpsdeville_1988-12-23.jpg",
							"date": "23 décembre ",
							"year": "1988",
							"comment": "23 décembre 1988 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			],
			"GareDeMons":[
					{
							"titleImg": "La Gare de Mons",
							"image": "images/garedemons/garedemons_1901-04-09.jpg",
							"date": "09 avril ",
							"year": "1901",
							"comment": "09 avril 1901 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
					},
					{
							"titleImg": "La Gare de Mons",
							"image": "images/garedemons/garedemons_1980-09-29.jpg",
							"date": "29 septembre ",
							"year": "1980",
							"comment": "29 septembre 1980 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
					},
					{
							"titleImg": "La Gare de Mons",
							"image": "images/garedemons/garedemons_2015-06-15.jpg",
							"date": "15 juin ",
							"year": "2015",
							"comment": "15 juin 2015 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
					}
			],
			"FondationMons2015":[
					{
							"titleImg": "La Fondation Mons 2015",
							"image": "images/fondationmons2015/fondationmons2015_2014-09-20.jpg",
							"date": "20 septembre ",
							"year": "2014",
							"comment": "20 septembre 2014 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
						}
			]
		};
	var panelVal = 0;
	var indexImg = 0;
	var handlers = {
		init: function(){
				handlers.dataJson();
				handlers.initializeDisplay();
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
		initializeDisplay: function(){
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[eval('nameBuilding')][indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[eval('nameBuilding')][indexImg]['comment']);
				for (i = 0; i < buildingHistory[eval('nameBuilding')].length; i++){
					$('.timeline ul').append('<li><a class="'+buildingHistory[eval('nameBuilding')][i].nameClass+'" href="#">'+buildingHistory[eval('nameBuilding')][i]['year']+'</a></li>');
				}
				if(window.matchMedia("(max-width:1024px)").matches){
					$('.footer-nav-day').html('<span class="italic">'+buildingHistory[eval('nameBuilding')][indexImg]['date']+'</span>');
					$('.footer-nav-year').html(buildingHistory[eval('nameBuilding')][indexImg]['year']);
					$('.block-title h2').html(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']);
				}else{
					$('.block-title h2').html(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']+' <span class="italic">'+buildingHistory[eval('nameBuilding')][indexImg]['date']+' '+buildingHistory[eval('nameBuilding')][indexImg]['year']+'</span>');
				}
		},
		dataJson: function(){
			urlSplit = urlTmp.split('?');
			nameBuilding = urlSplit[1].split('=')[1];
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
						indexImg = (buildingHistory[eval('nameBuilding')].length-1);
					}else{
						indexImg--;
					}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[eval('nameBuilding')][indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[eval('nameBuilding')][indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']+' <span class="italic">'+buildingHistory[eval('nameBuilding')][indexImg]['date']+buildingHistory[eval('nameBuilding')][indexImg]['year']+'</span>');
		},
		afterImg: function(){
				if(indexImg === (buildingHistory[eval('nameBuilding')].length-1)){
						indexImg = 0;
					}else{
						indexImg++;
					}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[eval('nameBuilding')][indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[eval('nameBuilding')][indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']+' <span class="italic">'+buildingHistory[eval('nameBuilding')][indexImg]['date']+buildingHistory[eval('nameBuilding')][indexImg]['year']+'</span>');
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
						indexImg = (buildingHistory[eval('nameBuilding')].length-1);
					}else{
						indexImg--;
				}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[eval('nameBuilding')][indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[eval('nameBuilding')][indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']+' <span class="italic">'+buildingHistory[eval('nameBuilding')][indexImg]['date']+buildingHistory[eval('nameBuilding')][indexImg]['year']+'</span>');
				}
		},
		gestionKeyDown: function(){
				if(panelVal == 0 || panelVal == -1){
					if(indexImg == (buildingHistory[eval('nameBuilding')].length-1)){
						indexImg = 0;
					}else{
						indexImg++;
				}
				$('.section-galerie').css('background-image', 'url('+ buildingHistory[eval('nameBuilding')][indexImg]['image'] +')');
				$('.title-picture h1').text(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']);
				$('.comments p').text(buildingHistory[eval('nameBuilding')][indexImg]['comment']);
				$('.block-title h2').html(buildingHistory[eval('nameBuilding')][indexImg]['titleImg']+' <span class="italic">'+buildingHistory[eval('nameBuilding')][indexImg]['date']+buildingHistory[eval('nameBuilding')][indexImg]['year']+'</span>');
				}
		},
		gestionKeyEnter: function(){
				if(panelVal == 1){
					$('.timeline a').bind('keydown', function(e){
						$('.section-galerie').css('background-image', 'url('+ buildingHistory[eval('nameBuilding')][e]['image'] +')');
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
				$('.menu-burger').bind({click: displayUtils.toggleMenuBurger});
		},
		resizeWindow: function(){
				var posTmpArrow = ($(window).innerHeight())-105;
				var posTmpFooterTimeline = ($(window).innerHeight())-50;
				$('.box-arrow.down').css({'top':posTmpArrow});
				$('.footer-nav').css({'top':posTmpFooterTimeline});
		},
		toggleMenuBurger: function(){
			$('.header-mobile-nav').toggleClass('display-off');
			$('.section-galerie').toggleClass('display-off');
			$('.section-about').toggleClass('display-off');
			$('.section-contact').toggleClass('display-off');
			if($('body').hasClass('overflow-on')){
				$('body').removeClass('overflow-on');
				$('body').addClass('overflow-off');
			}else if($('body').hasClass('body-gallery')){
				$('body').addClass('overflow-off');
			}else{
				$('body').addClass('overflow-on');
			}
		}
	};
})(jQuery);