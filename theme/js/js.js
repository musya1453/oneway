(function ($) {

  $(window).load(function () {
    initAccordeon();
    initMobileMenu();
    initBtnMenu();
  });

  $(window).on('resize.once', function () {
    clearTimeout(this.id);
    this.id = setTimeout(initMobileMenu, 500);
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

    var $wrapper = $('.dl-submenu');

    if ($(window).outerWidth() < 1125) {
      $('#dl-menu').dlmenu();

      for (var i = 0; i < $wrapper.length; i++) {

        if ($wrapper.eq(i).find('.dl-back').length > 1) {
          $wrapper.find('.dl-back').eq(i + 1).remove();
        }
      }
    } else {
      $wrapper.find('.dl-back').remove();
      return false;
    }
  }

  function initBtnMenu() {
    var $btn = $('.btn-blog'),
      $wrapper = $('.page-blog .right-part');

    $btn.on('click touch', function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $wrapper.removeClass('active');

      } else {
        $(this).addClass('active');
        $wrapper.addClass('active');
      }

    })
  }

})(jQuery);

