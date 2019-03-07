$(document).ready(function() {

$thumbnail = $('.gallery__item');
$modal = $('.modal');
$modal_image = $('.modal__image');

$thumbnail.click(function() {
  img_src = $(this).attr('data-href');
  console.log(img_src);
$modal_image.attr('src', img_src);
$modal.addClass('modal--open');
});

});
