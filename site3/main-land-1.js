// https://tp.1c-bitrix.ru/autumn2019/nizhnynovgorod/?utm_source=moi-sklad&utm_medium=email&utm_campaign=tp_nizhnynovgorod_9-oct

var windowWidth;


function showOK() {
  console.log('ok');
  //$('.form-container__formbox')
  $('.form-container__form_ok').css({
    'display': 'block'
  });
  setTimeout(function() {
    $('.form-container__form_ok').css({
      'display': 'none'
    });
  }, 50000);
}


$(document).ready(function ($) {

  $('.form-container__form_button').click(function () {
    $(".form-container__regform").submit(function (ev) {
      ev.preventDefault();
      var str = $(this).serialize();
      console.log(str);

      $.ajax({
        type: "POST",
        url: "contact.php",
        data: str,
        success: function (msg) {
          //console.log(msg);
          /*let jsonData = JSON.parse(msg);
          console.log(jsonData);*/
          showOK();
        }
      });

      /*$.post(
        "ask.php",
        { p1: 'p1', p2: 33 },
        function(data) {
          console.log(data);
        }
      );*/

      return false;
    });
  });
});

/*
function setLeftEdgePopupMenu() { // управление правым краем всплывающего меню
  windowWidth = $(window).width();
  if (windowWidth < 850) {
    var el = $('.header-line__nav');
    var varOffset = el.offset();
    $('.header-line__nav-popup').css({
      top: varOffset.top + 83,
      left: varOffset.left - 55
    });
    console.log(varOffset.left);
  } else {
    $('.header-line__nav-popup').css({
      'left': 0
    });
    //console.log(windowWidth);
  }

}
*/
/*
function manageSwiperPaginationAndButtons() { // управление окном pagination и кнопками в слайдере
  if (windowWidth > 1250) {
    if (!($('div.swiper-pagination').is('.hide-element'))) {
      $('div.swiper-pagination').addClass('hide-element'); // убираю pagination на большом экране
    }
    $('.swiper-button-next').removeClass('hide-element');
    $('.swiper-button-prev').removeClass('hide-element');
  } else { // windowWidth <= 1250
    $('div.swiper-pagination').removeClass('hide-element');
    if (!($('div.swiper-button-next').is('.hide-element'))) {
      $('.swiper-button-next').addClass('hide-element'); // убираю стрелку справа на большом экране
    }
    if (!($('div.swiper-button-prev').is('.hide-element'))) {
      $('.swiper-button-prev').addClass('hide-element'); // убираю стрелку слева на большом экране
    }
  }
}
*/

$(document).ready(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  $('.header-line__nav').click(function () {
    windowWidth = $(window).width();
    //setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth <= 850) {
      $('.header-line__nav-popup').toggle(); 
    }
  });

});

/*
$(window).resize(function () {
  windowWidth = $(window).width();
  //toggleNavClasses(windowWidth);

  if (windowWidth <= 850) {
    //setLeftEdgePopupMenu();
  }
  if (windowWidth > 850) {
    $('.header-line__nav-popu').css({
      'display': 'none'
    });
  }

});
*/
/*
$(function () {
  $('.header-line__nav').click(function () {
    windowWidth = $(window).width();
    //setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth <= 850) {
      $('.header-line__nav-popup').toggle(); 
    }
  });
  
});
*/