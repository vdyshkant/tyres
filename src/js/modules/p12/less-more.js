// page-calc :: calc plus-minus module
$(document).ready(function() {
	if($('body').is('.page-product')){


		          // the SECOND TAB:

							$('.page-product .prices-pieces-essence .info-right-form-minus').on('click',function(event) {
						    event.preventDefault();
						    current = +$(this).siblings('input').val();
						    input = $(this).siblings('input');
						    $(input).val(current - 1);

						    if (current < 1) {
						      $(input).val(current);
						    }
						  });

						  $('.page-product .prices-pieces-essence .info-right-form-plus').on('click',function(event) {
						    event.preventDefault();
						    current = +$(this).siblings('input').val();
						    input = $(this).siblings('input');
						    $(input).val(current + 1);
						  });

  }		// eof ('body').is
}); // eof document READY
