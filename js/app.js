(function($){
  $(document).ready(function(){

    var panelVal = 0;
    var indexImg = 0;
    var stationHistory = [
      {
        titleImg:'La Gare de Mons',
        image: 'images/img01.jpg', 
        date: '09 avril ',
        year: '1901',
        comment: '09 avril 1901 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar'
      },
      {
        titleImg:'La Gare de Mons', 
        image: 'images/img02.jpg', 
        date: '29 septembre ',
        year: '1980',
        comment: '29 septembre 1980 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
      },
      {
        titleImg:'La Gare de Mons', 
        image: 'images/img03.jpg', 
        date: '15 juin ',
        year: '2015',
        comment: '15 juin 2015 Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica'
      }
    ];
    resizeWindow();
    initializeDisplay();

    function resizeWindow(){
      var posTmp = this.innerHeight-105;
      $('.box-arrow.down').css({'top':posTmp});
    }

    function initializeDisplay(){
      $('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
      $('.title-picture h1').text(stationHistory[indexImg].titleImg);
      $('.comments p').text(stationHistory[indexImg].comment);
      $('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
      for (i = 0; i < stationHistory.length; i++){
      $('.timeline ul').append('<li><a href="#">'+stationHistory[i].year+'</a></li>');
      }
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

    function gestionKeyUp(e) {
      if(panelVal === 0){
        if(indexImg === 0){
          indexImg = (stationHistory.length-1);
        }else{
          indexImg--;
        }
        $('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
        $('.title-picture h1').text(stationHistory[indexImg].titleImg);
        $('.comments p').text(stationHistory[indexImg].comment);
        $('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');

      }

    }

    function gestionKeyDown(e) {
      if(panelVal === 0){
        if(indexImg === (stationHistory.length-1)){
          indexImg = 0;
          $('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
          $('.title-picture h1').text(stationHistory[indexImg].titleImg);
          $('.comments p').text(stationHistory[indexImg].comment);
          $('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
        }else{
          indexImg++;
        }
        
      }
    }

    function beforeImg(e) {
        if(indexImg === 0){
          indexImg = (stationHistory.length-1);
        }else{
          indexImg--;
        }
        $('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
        $('.title-picture h1').text(stationHistory[indexImg].titleImg);
        $('.comments p').text(stationHistory[indexImg].comment);
        $('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
    }

    function afterImg(e) {
      if(indexImg === (stationHistory.length-1)){
          indexImg = 0;
        }else{
          indexImg++;
        }
        $('section').css('background-image', 'url('+ stationHistory[indexImg].image +')');
        $('.title-picture h1').text(stationHistory[indexImg].titleImg);
        $('.comments p').text(stationHistory[indexImg].comment);
        $('.block-title h2').html(stationHistory[indexImg].titleImg+' <span class="italic">'+stationHistory[indexImg].date+stationHistory[indexImg].year+'</span>');
    }

    // function keyPressOnTimeline(e) {
    //   if(panelVal === 1){
    //     $(window).unbind
        
    //   }

    // }

    $(window).resize(resizeWindow);
    
    $('.btn-comments').on('click', openComments);
    $('.btn-timeline').on('click', openTimeline);
    $('.arrow-up').on('click', beforeImg);
    $('.arrow-down').on('click', afterImg);
    
    $(window).on('mousewheel', function(e){
      if(e.originalEvent.wheelDelta < 0){
        beforeImg();
      }else{
        afterImg();
      }
    });

    $(window).on('keydown', function(e) {
      
      var GAUCHE = 37;
      var DROITE = 39;
      var HAUT = 38;
      var BAS = 40;
      var ENTER = 13;
      
      switch(e.keyCode) {

        case GAUCHE:
          gestionKeyLeft(e);
          break;

        case DROITE:
          gestionKeyRight(e);
          break;

        case HAUT:
          gestionKeyUp(e);
          break;

        case BAS:
          gestionKeyDown(e);
          break;

        case ENTER:
          gestionKeyEnter(e);
          break;

        default:
          break;
      }

      console.log(panelVal);

    });

  });
})(jQuery);