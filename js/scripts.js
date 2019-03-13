$(document).ready(function() {

	$thumbnail = $('.gallery__item');
	$modal = $('.modal');
	$modal_image = $('.modal__image');
	$modal_close = $('.modal-close');
	$next_button = $('.next-button');
	$prev_button = $('.prev-button');

	$thumbnail.click(function() {

		$current_img = $(this);
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

	$next_button.on('click', function () {

		img_src = $(this).attr('data-href');
		$current_img = $current_img.next();
		imgnext = $current_img.next().attr('data-href');
		imgprev = $current_img.prev().attr('data-href');

		$modal_image.attr('src', img_src);
		$next_button.attr('data-href', imgnext);
		$prev_button.attr('data-href', imgprev);
		$prev_button.removeClass('no-link');

		if (!$current_img.next().length) {
			$next_button.addClass('no-link');
			$next_button.attr('data-href', '');
		}

	});

	$prev_button.on('click', function () {

		img_src = $(this).attr('data-href');
		$current_img = $current_img.prev();
		imgnext = $current_img.next().attr('data-href');
		imgprev = $current_img.prev().attr('data-href');

		$modal_image.attr('src', img_src);
		$next_button.attr('data-href', imgnext);
		$prev_button.attr('data-href', imgprev);
		$next_button.removeClass('no-link');

		if (!$current_img.prev().length) {
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