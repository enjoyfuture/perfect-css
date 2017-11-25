$(() => {
  // 抽屉
  const $drawer = $('#drawer');
  $drawer[0].addEventListener('transitionend', () => {
    $drawer.removeClass('drawer-animating');
  });

  $('#toggleDrawer').click((e) => {
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 1200) {
      $drawer.toggleClass('drawer-open');
      $('body').toggleClass('drawer-scroll-lock');
      $drawer.addClass('drawer-animating');

      $drawer.removeClass('drawer-close');
    } else {
      // 当超过1440px 时，利用该样式，隐藏显示处理
      $drawer.toggleClass('drawer-close');
      $drawer.addClass('drawer-animating');

      $drawer.removeClass('drawer-open');
    }
  });

  $drawer.click(() => {
    $drawer.removeClass('drawer-open');
    $('body').removeClass('drawer-scroll-lock');
    $drawer.addClass('drawer-animating');
  });

  $('.drawer-content').click((e) => {
    e.stopPropagation();
  });

  // 导航
  $('.nav-link').click((e) => {
    $(e.currentTarget).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
  });
});
