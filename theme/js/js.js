(function ($) {

  $(window).load(function () {
    initAccordeon();
    initMobileMenu();
    initBtnMenu();
  });

  //$(window).resize(function(){
  //  initMobileMenu()
  //});

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
    if ($(window).outerWidth() < 1125) {
      $('#dl-menu').dlmenu();
    } else {
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

