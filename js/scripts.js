$(document).ready(function () {

    $thumbnail = $('.gallery__item');
    $modal = $('.modal');
    $modal_image = $('.modal__image');
    $modal_close = $('.modal-close');
    $next_button = $('.next-button');
    $previous_button = $('.previous-button');


    $thumbnail.click(function() {
        $current_image = $(this);

        img_src = $(this).attr('data-href');

        if ($(this).next().length) {
            imgnext = $(this).next().attr('data-href');
            $next_button.attr('data-href', imgnext);
            $next_button.removeClass('no-link');
            //has next image
        } else {
            $next_button.addClass('no-link');
            //no next image
        }


        if ($(this).prev().length) {
            //has next image
            imgprevious = $(this).prev().attr('data-href');
            $previous_button.attr('data-href', imgprevious);
            $previous_button.removeClass('no-link');
        } else {
            $previous_button.addClass('no-link');
        }

        $modal_image.attr('src', img_src);
        $modal.addClass('modal--open');

    });


$next_button.click(function() {
    img_src = $(this).attr('data-href');
    $current_image = $current_image.next();
    img_next = $current_image.next().attr('data-href');
    img_previous = $current_image.prev().attr('data-href');

    $modal_image.attr('src', img_src);
    $next_button.attr('data-href', img_next);
    $previous_button.attr('data-href', img_previous);
    $previous_button.removeClass('no-link');

    if (!$current_image.next().length) {
        $next_button.addClass('no-link');
        $next_button.attr('data-href', '');
    }
});

$previous_button.click(function() {
    img_src = $(this).attr('data-href');
    $current_image = $current_image.prev();
    img_next = $current_image.next().attr('data-href');
    img_previous = $current_image.prev().attr('data-href');

    $modal_image.attr('src', img_src);
    $next_button.attr('data-href', img_next);
    $previous_button.attr('data-href', img_previous);
    $next_button.removeClass('no-link');

    if (!$current_image.prev().length) {
        $previous_button.addClass('no-link');
        $previous_button.attr('data-href', '');
    }
});

// ADD FUNCTION TO CLICK ON CLOSE BUTTON AND CLOSE THE MODAL
$modal_close.click(function() {
    $modal.removeClass('modal--open');
    $modal_image.attr('src', '');
    $next_button.attr('data-href', '');
    $prev_button.attr('data-href', '');
    $('.no-link').removeClass('no-link');
    
    });

});

