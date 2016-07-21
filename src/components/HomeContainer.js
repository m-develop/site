import './homeContainer.less';
import $ from 'jquery';

const HomeContainer = {
  init() {
    this.initPages();
    this.initGuide();
    this._bindEvent();
    this.drawCanvas();
  },

  _bindEvent() {
    $('.banner .start').on('click', (e) => {
      window.startLocation(e);
    });
  },

  initPages() {
    const me = this;
    const $win = $(window);
    const $items = $('.intro-item');
    const $pointer = $('.timer-pointer');
    const pageMap = {
      page1: {
        top: $pointer.eq(1).offset().top,
        bottom: $items.eq(0).offset().top + $pointer.eq(0).height()
      },
      page2: {
        top: $pointer.eq(2).offset().top,
        bottom: $items.eq(1).offset().top + $pointer.eq(1).height()
      },
      page3: {
        top: $pointer.eq(3).offset().top,
        bottom: $items.eq(2).offset().top + $pointer.eq(2).height()
      }
    };

    $(window).on('scroll', function() {
      var screenY = $win.height();
      var scrollY = $(document).scrollTop();
      if (pageMap['page1'].top >= screenY + scrollY) {
        $('#page1 div[type=left]').css({
          transform: 'translateX(-30px)',
          opacity: 0
        });
        $('#page1 div[type=right]').css({
          transform: 'translateX(30px)',
          opacity: 0
        });
      } else if (pageMap['page1'].bottom <= screenY + scrollY) {
        $('#page1 div[type=left]').css({
          transform: 'translateX(0px)',
          opacity: 1
        });
        $('#page1 div[type=right]').css({
          transform: 'translateX(0px)',
          opacity: 1
        });
      }
      if (pageMap['page2'].top >= screenY + scrollY) {
        $('#page2 div[type=left]').css({
          transform: 'translateX(-30px)',
          opacity: 0
        });
        $('#page2 div[type=right]').css({
          transform: 'translateX(30px)',
          opacity: 0
        });
      } else if (pageMap['page2'].bottom <= screenY + scrollY) {
        $('#page2 div[type=left]').css({
          transform: 'translateX(0px)',
          opacity: 1
        });
        $('#page2 div[type=right]').css({
          transform: 'translateX(0px)',
          opacity: 1
        });
      }
      if (pageMap['page3'].top >= screenY + scrollY) {
        $('#page3 div[type=left]').css({
          transform: 'translateX(-30px)',
          opacity: 0
        });
        $('#page3 div[type=right]').css({
          transform: 'translateX(30px)',
          opacity: 0
        });
      } else if (pageMap['page3'].bottom <= screenY + scrollY) {
        $('#page3 div[type=left]').css({
          transform: 'translateX(0px)',
          opacity: 1
        });
        $('#page3 div[type=right]').css({
          transform: 'translateX(0px)',
          opacity: 1
        });
      }
      me.initNavbar(screenY, scrollY);
    });
  },

  initGuide: function() {
    var me = this;
    var index = 0;
    $('.step-btn-item').on('click', function() {
      var idx = $(this).index();
      index = idx;
      me.runStep(idx);
    });
    $('.step-page-prev').on('click', function() {
      index = index - 1 > 0 ? index - 1 : 0;
      me.runStep(index);
    });
    $('.step-page-next').on('click', function() {
      index = index + 1 < 3 ? index + 1 : 3;
      me.runStep(index);
    });
  },

  runStep: function(idx) {
    var $stepBtn = $('.step-btn-item');
    var $stepLine = $('.step-line');
    var $stepSurface = $('.step-surface-item');
    if (idx == 0) {
      $('.step-page-prev').addClass('disabled');
      $('.step-page-next').removeAttr('href').html('下一步').removeClass('ending');
    } else if (idx == 3) {
      $('.step-page-next').html('开始详细指引').addClass('ending');
      // 解决 Chrome 上的点透问题……
      window.setTimeout(function(){
        $('.step-page-next').attr('href', './guide/0-introduce.html')
      }, 0);
    } else {
      $('.step-page-next').removeAttr('href').html('下一步');
      $('.step-page-next, .step-page-prev').removeClass('disabled');
    }
    $stepBtn.each(function(index) {
      var $el = $(this);
      if (index < idx) {
        $el.removeClass('ready').addClass('done');
      } else if (index == idx) {
        $el.removeClass('done').addClass('ready');
      } else {
        $el.removeClass('done').removeClass('ready');
      }
    });
    $stepLine.each(function(index) {
      var $el = $(this);
      if (index <= idx - 1) {
        $el.addClass('active');
      } else {
        $el.removeClass('active');
      }
    });
    $stepSurface
              .eq(idx)
              .addClass('active')
              .siblings()
              .removeClass('active');
  },

  initNavbar: function(screenY, scrollY) {
    var $header = $('.header');
    var $underline = $('.underline');
    var opacity = scrollY < screenY ? scrollY / screenY : 1;
    if (scrollY > 0 && scrollY < screenY + 64) {
      $header.css({
        'backgroundColor': 'rgba(0, 144, 255, ' + opacity + ')',
        'borderBottom': 'none',
        'zIndex': 1000
      });
      $header.find('input, span, a').css({
        'color': '#fff'
      });
      $header.find('.search-list a').css({
        'color': '#666'
      });
      $header.find(".logo").removeClass("blue-logo");
      $underline.css({
        'backgroundColor': '#fff'
      });
      $('.logo:after').css({
        'backgroundColor': '#fff'
      });
      $('.logo').removeClass('logo-active');
    } else if (scrollY <= 0) {
      $header.css({
        'backgroundColor': 'transparent',
        'borderBottom': 'none'
      });
      $header.find('input, span, a').css({
        'color': '#fff'
      });
      $header.find('.search-list a').css({
        'color': '#666'
      });
      $header.find(".logo").removeClass("blue-logo");
      $underline.css({
        'backgroundColor': '#fff'
      });
      $('.logo').removeClass('logo-active');
    } else if (scrollY > screenY + 64) {
      $header.css({
        'backgroundColor': 'rgba(255, 255, 255, 1)',
        'borderBottom': '1px solid #e4e2e2'
      });
      $header.find('input, span, a').css({
        'color': '#666'
      });
      $header.find(".logo").addClass("blue-logo");
      $underline.css({
        'backgroundColor': '#666'
      });
      $('.logo').addClass('logo-active');
    }
  },

  drawCanvas: function() {
    var timer,
        func,
        stop = false,
        focus = true,
        canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        startBtn = document.getElementById('start'),
        isActing = isAction();

    drawAnima();

    window.onresize = function () {
      drawAnima();
    };

    window.onblur = function () {
      focus = false;
      isActing = isAction();
      stop = true;
    };

    window.onfocus = function () {
      focus = true;
      isActing = isAction();
      if (isActing) {
        timer.restart(func);
        stop = false;
      }
    };

    $(window).on('scroll', function() {
      isActing = isAction();
      if (!isActing) {
        stop = true;
      } else if (stop) {
        timer.restart(func);
        stop = false;
      }
    });

    function isAction() {
      return startBtn.getBoundingClientRect().bottom > 0 && focus;
    }

    function drawAnima() {
      var screenWidth = $(window).width(),
          screenHeight = $(window).height(),
          // count = (screenWidth / 120).toFixed(0) + 1;
          count = 12;
      canvas.style.width = (screenWidth > 1200 ? screenWidth : 1200) + "px";
      canvas.style.height = (screenHeight > 560 ? screenHeight : 560) + "px";
      canvas.width = screenWidth > 2400 ? screenWidth * 2 : 2400;
      canvas.height = screenHeight > 1200 ? screenHeight * 2 : 1200;

      var width = canvas.width,
          height = canvas.height;

      var isocontext = isometric(context);
      isocontext.scale3d(90, 90, 90);

      func = function(elapsed) {
        context.save();
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#09f";
        context.strokeStyle = "rgba(255, 255, 255, 0.35)";
        context.translate(width / 2, height * 0.6);
        for (var x = count, d, t = (elapsed / 3000) % 1; x >= -10; --x) {
          for (var y = count; y >= -10; --y) {
            if ((d = distanceManhattan(x, y)) > count) continue;
            var te;
            if (stop) {
              te = 1;
            } else {
              te = d3_ease.easeCubic(Math.max(0, Math.min(1, t * 3.3 - distanceCartesian(x, y) / 4)));
            }
            drawCube((d & 1 ? -1 : +1) * (Math.PI / 4 - te * Math.PI / 2), x * 2, y * 2, 2 * te);
          }
        }
        context.restore();
        globalStop();
      }

      timer = d3_timer.timer(func);

      function globalStop() {
        stop && timer.stop();
      }

      function distanceCartesian(x, y) {
        return Math.sqrt(x * x + y * y);
      }

      function distanceManhattan(x, y) {
        return Math.abs(x) + Math.abs(y);
      }

      function drawCube(angle, x, y, z) {
        if ((angle %= Math.PI / 2) < 0) angle += Math.PI / 2;
        isocontext.save();
        isocontext.translate3d(x, y, z);
        isocontext.rotateZ(angle - Math.PI / 4);

        context.beginPath();
        isocontext.moveTo(+0.5, -0.5, +0.5);
        isocontext.lineTo(+0.5, +0.5, +0.5);
        isocontext.lineTo(-0.5, +0.5, +0.5);
        isocontext.lineTo(-0.5, +0.5, -0.5);
        isocontext.lineTo(-0.5, -0.5, -0.5);
        isocontext.lineTo(+0.5, -0.5, -0.5);
        isocontext.closePath();
        context.fill();
        context.lineWidth = 1.5;
        context.stroke();

        context.beginPath();
        isocontext.moveTo(-0.5, -0.5, +0.5);
        isocontext.lineTo(+0.5, -0.5, +0.5);
        isocontext.moveTo(-0.5, -0.5, +0.5);
        isocontext.lineTo(-0.5, +0.5, +0.5);
        isocontext.moveTo(-0.5, -0.5, +0.5);
        isocontext.lineTo(-0.5, -0.5, -0.5);
        context.lineWidth = 1.5;
        context.stroke();

        isocontext.restore();
      }
    }
  }
}

export default HomeContainer;
