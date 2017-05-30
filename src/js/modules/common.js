
/*------------------------------------*\\
  CONTENTS
\\*------------------------------------*/

/*
GENERAL   HTML, BODY, etc.
SHARED    Share anything we can across blocks.
HEADER
MAIN
  sub_block
  sub_block
FOOTER
NOTES
RESET
*/

// SMOOTH DIV SCROLL
// CAROUSEL
// COUNTER
// SLIDER
// COUNTDOWN
// FEATURES-EXPAND
// PARALLAX for tree

/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function($) {
  //  if($('body').is('.page-home')){
  //    var a = "initial_template";
  //  }
  // })(jQuery); // eof autoFunction
  /* eof ^^^ */





  /* отрабатывать
    ================================================ */
  // (function() {
  //   var a = "initial_template";
  // })(); // eof autoFunction
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  // $( document ).ready(function() {
  //   var a = "initial_template";
  // }); // eof .ready
  /* eof ^^^ */





  /* ================================================
     Блок_комментариев_для_раздела $ MAIN
     ================================================ */

  /* === eof $ MAIN == */

  /* Блок_комментариев_для_подраздела
     ================================================ */

  /*
   * Блок_комментариев_для_группы_правил.
   * Хорошо_подходит_для_подробных_пояснений_и_документации.
   */

  /* Обычный_комментарий */


// dropDown menu [!! jqueryEasing]
(function() {
    if ($(window).width() > 768) {
        $('.dropdown').mouseenter(
            function() {
                clearTimeout($.data(this, 'timer'));

                $(this).children('.submenu').stop(true, true).slideDown(200, 'easeInOutCubic');
                $(this).addClass('active');
            }
        );
        $('.dropdown').mouseleave(
            function() {
                $.data(this, 'timer', setTimeout($.proxy(function() {

                    $(this).children('.submenu').stop(true, true).slideUp(200, 'easeInOutCubic');
                    $(this).removeClass('active');
                }, this), 200));

            }
        );
    }
})();
// EOF dropDown menu

/* отрабатывать только для определенной страницы
  ================================================ */
(function($) {
  if($('body').is('.page-index')){
    $('.phone').stop(true, true).mouseenter(function(){
      clearTimeout($.data(this, 'timer'));
      $('.user-block .phone-tooltip').fadeIn(500);
    });
    $('.phone').stop(true, true).mouseleave(function(){
      $.data(this, 'timer', setTimeout($.proxy(function() {

          $('.user-block .phone-tooltip').fadeOut(500);
      }, this), 500));

    });
  }
})(jQuery); // eof autoFunction
/* eof ^^^ */



(function($) {
  $('ul.menu.flex').flexMenu();
});


/* == eof $ MAIN == */



/* BURGER отрабатывать только для определенной страницы
	================================================ */
(function($) {

   if($('ul').is('.flex.menu')){

     // burger animation itself:
  	 $('#click').click(function() {
  			 $('#burger-content').stop(true, true).slideToggle(600);
  	 });

   }

})(jQuery); // eof autoFunction
/* eof ^^^ */

// burger:
