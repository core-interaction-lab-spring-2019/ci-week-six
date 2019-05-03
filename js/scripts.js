$(document).ready(function() {

$thumbnail = $('.gallery__item');
$modal = $('.modal');
$modal_image = $('.modal__image');
$modal_close = $('.modal-close');
$next_button = $('.next-button')
$prev_button = $('.prev-button')


// COPIED THIS FROM W3
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*document.getElementsByClassName('gallery__item').addEventListener('mouseover', function () {
  console.log('hovered')
})
*/
/*

*/
var class_list = document.getElementsByClassName('gallery__item')
  window.addEventListener('keydown', function () {
    for(var x of class_list){
      x.style.filter = 'grayscale(0)'
    }
  });
  window.addEventListener('keyup', function () {
      for(var x of class_list){
        x.style.filter = ''
      }
})
$thumbnail.click(function () {
  $current_image = $(this);
  img_src = $(this).attr('data-href');

  if ($(this).next().length) {
    imgnext = $(this).next().attr('data-href');
    $next_button.attr('data-href', imgnext);
  } else {
  }

  if ($(this).prev().length) {
  } else {
  }

  $modal_image.attr('src', img_src);
  $modal.addClass('modal--open');
});

$next_button.click(function() {
  img_src = $(this).attr('data-href');


  $current_image = $current_image.next();
  img_next = $current_image.next().attr('data-href');
  img_prev = $current_image.prev().attr('data-href');

  $modal_image.attr('src', img_src);
  $next_button.attr('data-href',img_next);
  $prev_button.attr('data-href',img_prev);

});

$prev_button.click(function() {
  img_src = $(this).attr('data-href');
  $current_image = $current_image.prev();

  $current_image = $current_image.prev();
  img_next = $current_image.next().attr('data-href');
  img_prev = $current_image.prev().attr('data-href');

  $modal_image.attr('src', img_src);
  $next_button.attr('data-href',img_next);
  $prev_button.attr('data-href',img_prev);

});

$modal_close.click(function() {
    $modal.removeClass('modal--open');
});

});
