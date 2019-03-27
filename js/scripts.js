$(document).ready(function() {

	$thumbnail = $('.gallery__item');
	$modal = $('.modal');
	$modal_image = $('.modal__image');
	$modal_close = $('.modal-close');
	$next_button = $('.next-button');
	$prev_button = $('.prev-button');

	$thumbnail.click(function() {
		$current_image = $(this);

		img_src = $(this).attr('data-href');

		if ($(this).next().length) {

            imgnext = $(this).next().attr('data-href');

			$next_button.attr('data-href', imgnext);
			
			$next_button.removeClass('no-link');
		} else {

			$next_button.addClass('no-link');
		}

		if ($(this).prev().length) {

			imgprev = $(this).prev().attr('data-href');

			$prev_button.attr('data-href', imgprev);

			$prev_button.removeClass('no-link');
		} else {

			$prev_button.addClass('no-link');
		}

		$modal_image.attr('src', img_src);

		$modal.addClass('modal--open');

	});

	$next_button.click(function() {

		//update the img_src variable with the url from the next buttons data-href attribute
		img_src = $(this).attr('data-href');

		//change the value of the $current_image variable to the the image next to it's current value
		$current_image = $current_image.next();

		//update the img_next and img_prev variables with the urls from the data-href attributes from the previous and next images
		img_next = $current_image.next().attr('data-href');
		img_prev = $current_image.prev().attr('data-href');

		//update the source of the image in the modal
		$modal_image.attr('src', img_src);

		//update the data-href attribute values of the previous and the next buttons
		$next_button.attr('data-href', img_next);
		$prev_button.attr('data-href', img_prev);

		//remove the 'no-link' class from the previous button
		$prev_button.removeClass('no-link');

		//check to see if there is not another image after the current image
		if (!$current_image.next().length) {

			//add the 'no-link' class to the next button, and remove the data-href value of the next button
			$next_button.addClass('no-link');
			$next_button.attr('data-href', '');
		}
	});

	$prev_button.click(function() {

		//update the img_src variable with the url from the prev buttons data-href attribute
		img_src = $(this).attr('data-href');

		//change the value of the $current_image variable to the the image previous to it's current value
		$current_image = $current_image.prev();

		//update the img_next and img_prev variables with the urls from the data-href attributes from the previous and next images
		img_next = $current_image.next().attr('data-href');
		img_prev = $current_image.prev().attr('data-href');

		//update the source of the image in the modal
		$modal_image.attr('src', img_src);

		//update the data-href attribute values of the previous and the next buttons
		$next_button.attr('data-href', img_next);
		$prev_button.attr('data-href', img_prev);

		//remove the 'no-link' class from the next button
		$next_button.removeClass('no-link');

		//check to see if there is not another image previous to the current image
		if (!$current_image.prev().length) {

			$prev_button.addClass('no-link');
			$prev_button.attr('data-href', '');
		}
	});

	$modal_close.click(function() {

		$modal.removeClass('modal--open');

		$modal_image.attr('src', '');

		$next_button.attr('data-href', '');
		$prev_button.attr('data-href', '');

        $('.no-link').removeClass('no-link');
	});


});