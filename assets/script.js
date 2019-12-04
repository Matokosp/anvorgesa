
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

var container_width = $('.container').width() - $('#object').width();

var document_height = window.innerHeight;



// $(function () {
    $(window).scroll(function () {

      $('.container').each(function() {

        if ($(this).isInViewport()) {

          var scrollTop = $(window).scrollTop();
          var elementOffset = $(this).offset().top;
          var distance = (scrollTop - elementOffset);

          console.log(distance);
          var object_position_left = container_width * (distance / document_height);
          $(this).children('.object').css({
            'left': object_position_left
          });

        } else {

        }

      });

    });
// });
