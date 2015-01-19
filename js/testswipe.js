(function($){

	var elem = document.getElementById('section-gallery');

function handleHammer (e) {
			e.preventDefault();
					switch(e.type) {
						case 'swiperight': // Gauche
							//handlers
						alert('r');
						break;
						case 'swipeleft': // Droite
						alert('l');
						break;
						case 'swipeup': // Haut
						alert('u');
						break;
						case 'swipedown': // Bas
						alert('d');
						break;
						default:
						break;
					}

}

new Hammer(elem,{}).on('swiperight swipeleft swipeup swipedown', handleHammer);






})(jQuery);