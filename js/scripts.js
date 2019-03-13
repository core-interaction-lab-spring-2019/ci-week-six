$(document).ready(function() {

	$thumbnail = $('.gallery__item');
	$modal = $('.modal');
	$modal_image = $('.modal__image');

	//function to open the modal and display the image from the thumbnail
	$thumbnail.click(function() {

		//get the path of the image source (find the url for the image)
		img_src = $(this).attr('data-href');

		$modal_image.attr('src', img_src);

		$modal.addClass('modal--open');

	});

});