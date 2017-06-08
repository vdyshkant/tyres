
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
  // if($('body').is('.page-index')){
    $('.phone').stop(true, true).mouseenter(function(){
      clearTimeout($.data(this, 'timer'));
      $('.user-block .phone-tooltip').fadeIn(500);
    });
    $('.phone').stop(true, true).mouseleave(function(){
      $.data(this, 'timer', setTimeout($.proxy(function() {

          $('.user-block .phone-tooltip').fadeOut(500);
      }, this), 500));

    });
  // }
})(jQuery); // eof autoFunction
/* eof ^^^ */


  // // if ((window.matchMedia("(min-width: 1024px)").matches)) {
  // if ($(window).width() > 1024) {
  //   // (function($) {
  //     $('#mainNavbar').flexMenu({
  //       linkText: 'Больше'
  //     });
  //
  //     $('.flexMenu-viewMore a').click(function() {
  //         $(this).toggleClass('opened');
  //     });
  //   // })(jQuery);
  // }



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

(function($) {
  if ((window.matchMedia("(max-width: 1023px)").matches)) {

    var target = $('.breadcrumbs-item .breadcrumbs-link:last');
    var cutText = target.attr( "data-original" );
    var result = start_and_end(cutText);
    target.html( result );

    function start_and_end(str) {
      if (str.length > 20) {
        return str.substr(0, 5) + '...' + str.substr(str.length-5, str.length);
      }
      return str;
    }

  }
  if ((window.matchMedia("(min-width: 1024px)").matches)) {

    var target = $('.breadcrumbs-item .breadcrumbs-link:last');
    var cutText = target.attr( "data-original" );
    var result = start_and_end(cutText);
    target.html( result );

    function start_and_end(str) {
      if (str.length > 20) {
        return str.substr(0, 5) + '...' + str.substr(str.length-5, str.length);
      }
      return str;
    }

  }




})(jQuery); // eof autoFunction




(function() {
  var contents = $('.item-content');
  var titles = $('.item-title');
  titles.on('click',function(){
    var title = $(this);
    contents.filter(':visible').slideUp(function(){
      $(this).parent('.item').removeClass('is-opened');
    });

    var content = title.next('.item-content');

    if (!content.is(':visible')) {
      content.slideDown(function(){title.parent('.item').addClass('is-opened')});
    }
  });
})(); // eof autoFunction


// page-window-systems COLORS slider

$( document ).ready(function() {

	if($('body').is('.page-catalog-tire')){
		$("ul#viewed").bxSlider({
		    speed: 300,
		    nextText: '',
		    prevText: '',
				slideWidth: 270,
				minSlides: 4,
				maxSlides: 4,
				moveSlides: 1,
				slideMargin: 30,
				pager: false,
				prevSelector: ('.viewed-controls__left'),
				nextSelector: ('.viewed-controls__right')
		    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
		    //    changeRealThumb(realThumbSlider,newIndex);
		    //
		    //  }
		});
	}

}); // eof .ready

// page-window-systems COLORS slider END


// burger:
