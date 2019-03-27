// $(document).ready(function (){
//   $thumbnail = $('.gallery__item');
//   $modal = $('.modal');
//   $modal_image = $('.modal__image');

//   $thumbnail.click(function() {
//     img_src = $(this).attr('data-href')
//     $modal_image.attr('src', img_src);
//     $modal.addClass('modal--open');
//   })

// });

$(document).ready(function() {

  $thumbnail = $('.gallery__item');
  $modal = $('.modal');
  $modal_image = $('.modal__image');
  $modal_close = $('.modal-close');
  $next_button = $('.next-button');
  $prev_button = $('.prev-button');

  //function to open the modal and display the image from the thumbnail
  $thumbnail.click(function() {
      $current_image = $(this);

      //get the path of the image source (find the url for the img)
      img_src = $(this).attr('data-href');

      //add the next and previous image urls to the buttons data-href
      //check to see if there is a previous or next image
      if ($(this).next().length) {
          //yes next image
          imgnext = $(this).next().attr('data-href');
          $next_button.attr('data-href', imgnext);
          $next_button.removeClass('no-link');
      } else {
          //no next image
          $next_button.addClass('no-link');
      }
      if ($(this).prev().length) {
          //yes previous image
          imgprev = $(this).next().attr('data-href');
          $prev_button.attr('data-href', imgprev);
          $prev_button.removeClass('no-link');
      } else {
          //no previous image
          $prev_button.addClass('no-link');
      }

      //pass the image url to the .modal__image, and put it in the src attribute
      $modal_image.attr('src', img_src);

      //open up the modal
      $modal.addClass('modal--open');
  });

  $next_button.click(function() {
      img_src = $(this).attr('data-href');
      $current_image = $current_image.next();
      img_next = $current_image.next().attr('data-href');
      img_prev = $current_image.prev().attr('data-href');

      $modal_image.attr('src', img_src);
      $next_button.attr('data-href', img_next);
      $prev_button.attr('data-href', img_prev);
      $prev_button.removeClass('no-link');

      if (!$current_image.next().length) {
          $next_button.addClass('no-link');
          $next_button.attr('data-href', '');
      }
  });

  $prev_button.click(function() {
      img_src = $(this).attr('data-href');
      $current_image = $current_image.prev();
      img_next = $current_image.next().attr('data-href');
      img_prev = $current_image.prev().attr('data-href');

      $modal_image.attr('src', img_src);
      $next_button.attr('data-href', img_next);
      $prev_button.attr('data-href', img_prev);
      $next_button.removeClass('no-link');

      if (!$current_image.prev().length) {
          $prev_button.addClass('no-link');
          $prev_button.attr('data-href', '');
      }
  });

  //add function to click on close button and close the modal
  $modal_close.click(function() {
      //remove the modal--open class from the modal
      $modal.removeClass('modal--open');
  });
});