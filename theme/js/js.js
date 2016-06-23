(function ($) {

  $(window).load(function () {
    initAccordeon();
    initMobileMenu()
  });

  function initAccordeon() {
    var $wrapper = $('.section-faq ul li'),
      $item = $wrapper.find('>a');

    $item.on('click touch', function (e) {
      e.preventDefault();

      var $parent = $(this).parent();

      if ($parent.hasClass('active')) {
        $wrapper.removeClass('active');
      } else {
        $wrapper.removeClass('active');
        $parent.addClass('active');
      }
    })
  }

  function initMobileMenu() {
    if ($(window).outerWidth() < 767) {
      $('#dl-menu').dlmenu();
    } else {
      return false;
    }
  }

})(jQuery);

