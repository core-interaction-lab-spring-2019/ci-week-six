$(document).ready(function() {
    
    $thumbnail = $('.gallery__item');
    $modal = $('.modal');
    $modal_image = $('.modal__image');
    $modal_close = $('.modal-close');
    $next_button = $('.next-button');
    $prev_button = $('.prev-button');

     //finction open the modal and display the img from the thumbnail
    $thumbnail.click(function() {

        $current_image = $(this);

        //get the path of the image source (find url for img)
        img_src = $(this).attr('data-href');

        if ($(this).next().length) {
            imgnext = $(this).next().attr('data-href');
            $next_button.attr('data-href', imgnext);
            $prev_button.removeClass('no-link');
            //has next image
        } else {
            $next_button.addClass('no-link');
            //no next image
        }

        if ($(this).prev().length) {
            //has next image
            imgprev = $(this).prev().attr('data-href');
            $prev_button.attr('data-href', imgprev);
            $prev_button.removeClass('no-link');
        } else {
            $prev_button.addClass('no-link');
            //no next image
        }

        //pass the img url to the .modal__image, and put it in the src attribute 
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
    });

    $prev_button.click(function() {
        img_src = $(this).attr('data-href');
        $modal_image.attr('src', img_src);
        $current_image = $current_image.prev();
        img_next = $current_image.next().attr('data-href');
        img_prev = $current_image.prev().attr('data-href');

        $modal_image.attr('src', img_src);
        $next_button.attr('data-href', img_next);
        $prev_button.attr('data-href', img_prev);
    });

    //add function to close button and close modal
    $modal_close.click(function() {

    //remove modal open class from modal
    $modal.removeClass('modal--open');

    });
});