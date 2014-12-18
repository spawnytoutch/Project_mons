(function($){
  $(document).ready(function(){

    var panelVal = 0;
    resizeWindow();

    function resizeWindow(){
      var posTmp = this.innerHeight-110;
      $('.box-arrow.down').css({'top':posTmp});
    }

    function openComments(e) {
      e.preventDefault();
      if(panelVal === 0){
        $('.left-panel').css('left', '0');
        $('.overlay').addClass('overlay-active-blue');
        $('.right-panel').css('right', '-50%');
        $('.overlay-active-blue').click(closePanels);
        panelVal = -1;
      }else if(panelVal === -1){
        closePanels();
      }      
    }

    function openTimeline(e) {
      e.preventDefault();
      if(panelVal === 0){
        $('.right-panel').css('right', '0');
        $('.overlay').addClass('overlay-active-black');
        $('.left-panel').css('left', '-50%');
        $('.overlay-active-black').click(closePanels);
        panelVal = 1;
      }else if(panelVal === 1){
        closePanels();
      }      
    }

    function closePanels() {
      $('.left-panel').css('left', '-37%');
      $('.overlay').removeClass('overlay-active-black').removeClass('overlay-active-blue');
      $('.right-panel').css('right', '-17%');
      panelVal = 0;
    }

    function gestionKeyLeft(e) {
      if(panelVal === 0){
        openTimeline(e);
      }else if(panelVal === -1){
        closePanels(e);        
      }
    }

    function gestionKeyRight(e) {
      if(panelVal === 0){
        openComments(e);
      }else if(panelVal === 1){
        closePanels(e);        
      }
    }


    $(window).resize(resizeWindow);
    $('.btn-comments').on('click', openComments);
    $('.btn-timeline').on('click', openTimeline);


    $(window).on('keydown', function(e) {
      
      var GAUCHE = 37;
      var DROITE = 39;
      var HAUT = 38;
      var BAS = 40;
      var ENTER = 13;
      
      switch(e.keyCode) {

        case GAUCHE:
          gestionKeyLeft(e);
          console.log('gauche');
          break;

        case DROITE:
          gestionKeyRight(e);
          console.log('droit');
          break;

        case HAUT:
          gestionKeyUp(e);
          console.log(e.keyCode);
          break;

        case BAS:
          gestionKeyDown(e);
          console.log(e.keyCode);
          break;

        case ENTER:
          gestionKeyEnter(e);
          console.log(e.keyCode);
          break;

        default:
          break;
      }

      console.log(panelVal);

    });

  });
})(jQuery);