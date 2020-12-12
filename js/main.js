// https://nubex.ru/blogs20/postsByTag/?catId=1401
// https://www.youtube.com/watch?v=BnWjIPii9Ac WP

var windowWidth;
var switchPopup = false;
var desktopWidth = 1920 - 13;
var tabletWidth = 1024 - 13; // 1024
var telWidth = 320;
var delayShow = 5000; // задержка при демонстрации окон
var paddingShift = 14;

/*
function setLeftEdgePopupMenu() { // управление левым краем всплывающего меню
  windowWidth = $(window).width();
  if (windowWidth <= 1250) {
    var el = $('.header-line__nav');
    var varOffset = el.offset();
    $('.popup-box').css({
      top: varOffset.top + 70,
      left: varOffset.left + 5
    });
    //console.log(varOffset.left);
  } else {
    $('.popup-box').css({
      'left': 0
    });
    //console.log(windowWidth);
  }

}
*/

function moveFXinCentralContainer() { // уборка fixed-container в central-container__personal_order
  windowWidth = $(window).width();
  if (windowWidth < (1250-paddingShift)) {
    $('.central-container__personal_order').removeClass('fixed-container');
    //console.log(varOffset.left);
  } else {
    $('.central-container__personal_order').addClass('fixed-container');
    //console.log(windowWidth);
  }

}

function changeTelClasses() { // переключение классов в телефонном блоке header-line__phone-box
  windowWidth = $(window).width();
  if (windowWidth <= 790) {
    $('.header-line__phone-box a').removeClass('header-line__phone_button');
    $('.header-line__phone-box a').addClass('header-line__telsign fa fa-phone');
    $('.header-line__phone-box a p').css({
      'display' : 'none'
    });
  } else {
    $('.header-line__phone-box a').removeClass('header-line__telsign fa fa-phone');
    $('.header-line__phone-box a').addClass('header-line__phone_button');
    $('.header-line__phone-box a p').css({
      'display' : 'block'
    });
    //console.log(windowWidth);
  }

}

/*
function manageHeaderPhoneLine() { // управление телефонным блоком в заголовке
  if (windowWidth <= 790) {
    $('.header-line__phone').addClass('fa fa-phone');
    $('.header-line__phone').attr({
      'aria-hidden': 'true'
    });
  } else {
    $('.header-line__phone').removeClass('fa fa-phone');
    $('.header-line__phone').removeAttr('aria-hidden');
  }

}
*/
/*
function managePersonalImg() { //  управление картинкой с автором
  if (windowWidth <= 980) {
    $('.central-container__personal_pics-320 img').attr('src', 'img/man-320.png');
  } else {
    $('.central-container__personal-authorpic div img').attr('src', 'img/man.png');
  }

}
*/
function setLeftPaddingForPictures() { // управление левым блоком в персональном разделе и символами
  var leftEdge0 = 120;
  var leftEdge1 = 10;
  var windowSVG = $('.central-container__personal_pics-320').width();
  //console.log(windowSVG);
  //console.log(windowWidth);

  if (windowWidth > 1920) {
    var paddingLeft = (1920 - 1170) / 2;
    var leftEdge = windowWidth / 2 + leftEdge0;
    //console.log(leftEdge);
    $('.central-container__personal_pics-1930').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': leftEdge
    });
  } else if (windowWidth <= 1920 && windowWidth > 1170) {
    var paddingLeft = (windowWidth - 1170) / 2 - 150 * 0;
    var leftEdge = windowWidth / 2 + leftEdge0;
    //console.log(leftEdge);
    $('.central-container__personal_pics-1930').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': leftEdge
    });
    $('.central-container__personal_pics-1024').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': leftEdge
    });
  } else if (windowWidth <= 1170 && windowWidth > 981) { // 1005? 1024px
    var leftEdge = (710-404)/(1170-980)*(windowWidth-980) + 404;
    $('.central-container__personal_pics-1024').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': leftEdge
    });
    $('.central-container__personal_pics-320').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': leftEdge
    });
  } else if (windowWidth <= 980 && windowWidth > 591) {
    var paddingLeft = (windowWidth - 580 - 10) / 2;
    var leftEdge = windowWidth / 2 + leftEdge1;
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowSVG/3
    });
  } else if (windowWidth < 590 && windowWidth > 471) {
    var leftEdge = windowWidth / 2 + leftEdge1;
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowSVG/4
    });
    $('.central-container__personal_pics-320 svg').attr('width', '470px');
  } else {  // windowWidth <= 470
    var leftEdge = windowWidth / 2 + leftEdge1;
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowWidth/4-2
    });
    $('.central-container__personal_pics-320 svg').attr('width', '360px');
  }

}

/*function manageSwiperPaginationAndButtons() { // управление окном pagination и кнопками в слайдере
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
}*/

$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', { // https://www.youtube.com/watch?v=OjVK055CTNI
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    paginationClickable: true,
    loop: true,
    breakpoints: {
      240: {
        //slidesPerView: 1,
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      790: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 25
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    freeMode: true,
  });


  windowWidth = $(window).width();
  //console.log(windowWidth);
  /*if (windowWidth <= 370) {
    $('.unit-box img').css({ // задаю размеры картинки для слайдера для узкого экрана
      'width': '320px',
      'height': 'auto',
      'background-size': 'auto'
    });
  }*/

  /*if (windowWidth >= 1250) {  // убираю popup-меню на большом экране
    //console.log('ww');
    switchPopup = false;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup_')
      .addClass('header-line__nav-list_');
    $('.header-line__nav-popupmenu').hide();
  } else {
    switchPopup = true;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup_')
      .addClass('header-line__nav-list_');
  }*/

  setLeftPaddingForPictures();
  moveFXinCentralContainer();
  changeTelClasses();
  //manageSwiperPaginationAndButtons();
  //setLeftEdgePopupMenu();
  //manageHeaderPhoneLine();
  //managePersonalImg();
});

$(window).resize(function () {
  windowWidth = $(window).width();
  /*if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
    $('div.popup-box').remove(); // убираю popup-меню на большом экране
  }*/

  /*if (windowWidth >= 1250) {  // убираю popup-меню на большом экране
    //console.log('rr');
    switchPopup = false;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup_')
      .addClass('header-line__nav-list_');
    $('.header-line__nav-popupmenu').hide();
  }*/

  setLeftPaddingForPictures();
  moveFXinCentralContainer();
  changeTelClasses();
  //manageSwiperPaginationAndButtons();
  //setLeftEdgePopupMenu();
  //manageHeaderPhoneLine();
  //managePersonalImg();
});

/*
$(function () { // работоспособная - вариант обработки)
  $('.header-line__nav').click(function () { // переключаю классы по клику для узкого экрана
    windowWidth = $(window).width();
    //setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth < 1250) {
      switchPopup = switchPopup? false : true;
      $('.header-line__nav ul')
        .toggleClass('header-line__nav-popup')
        .toggleClass('header-line__nav-list');
    } else {
      switchPopup = false;
    }
  });
});

$(document).ready(function(){ // движение поля зрения к теме согласно выбранной ссылке
  $('.header-line__nav').on('click', 'a', function (event) {
      event.preventDefault();
      var id  = $(this).attr('href');
      var top = $(id).offset().top;
      $('body, html').animate({scrollTop: top}, 900);
      console.log(id);
  });
});
*/

$(document).ready(function(){ // движение поля зрения к теме согласно выбранной ссылке
  $('.header-line__nav-list').on('click', 'a', function (event) {
      event.preventDefault();
      windowWidth = $(window).width();
      var id  = $(this).attr('href');
      var top = $(id).offset().top;
      $('body, html').animate({ scrollTop: top }, 900);
      //console.log(id);
  });

  $('.footer-line__nav-list').on('click', 'a', function (event) {
    event.preventDefault();
    windowWidth = $(window).width();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 900);
});
});

$(document).ready(function() {
  $('.header-line__nav').click(function() { // отработка клика по бургеру
    windowWidth = $(window).width();
    if (windowWidth < (1250-paddingShift)) {
      $('.header-line__nav-popupmenu').toggle(300);
    } else {
      $('.header-line__nav-popupmenu').hide();
    }
  });
});

$(document).ready(function(){ // движение поля зрения к теме согласно выбранной ссылке
  $('.header-line__nav-popupmenu-list').on('click', 'a', function (event) {
      event.preventDefault();
      windowWidth = $(window).width();
      var id  = $(this).attr('href');
      var top = $(id).offset().top;
      $('body, html').animate({ scrollTop: top }, 900);
      $('.header-line__nav-popupmenu').hide();
  });
});


// управление всплывающим окном
// pressButton - class кнопки, которую надо нажимать для открытия окна
// closeButton - class кнопки, закрывающей окно
// popWin - id всплывающего окна
function showPopWindow(pressButton, closeButton, popWin) {
  $(pressButton).click(function (ev) {
    $(popWin).slideDown(300);
    //$('.bg_popup').fadeIn(300);
    $('body').css('overflow-y', 'hidden');
  });

  $(closeButton).click(function () {
    $(popWin).slideUp(300);
    $('body').css('overflow-y', 'auto');
  });

  $('.bg_popup').click(function (ev) {
    $(popWin).slideUp(300);
    //$('.bg_popup').fadeOut(300);
    $('body').css('overflow-y', 'auto');
  });
}

$(document).ready(function () { // обработка клика по кнопке central-container__personal_button
  showPopWindow('.central-container__personal_button', '.modal__knowmore_close', '#modal__knowmore');
});

$(document).ready(function () { // обработка клика по кнопке deal-container__boxes_button
  showPopWindow('.deal-container__boxes_button', '.modal__price_close', '#modal__price');
});

$(document).ready(function () { // обработка клика по кнопке examples-container__project-button
  showPopWindow('.examples-container__project-button', '.modal__project_close', '#modal__project');
});


$(document).ready(function(){
  $('.tel-label input').focus(function () {
    //console.log('zz');
    $(this).inputmask({ "mask": "+7 (999) 999-9999" });
  });
});

function showDataOK() {
  console.log('data ok');
  var formW = $('.modal__project_regform').width();
  console.log(formW);
  $('.modal__project_regform-ok').css({
    'display': 'block',
    'left': formW*.1,
    'width': formW*.8
  });
  setTimeout(function () {
    $('.modal__project_regform-ok').css({
      'display': 'none'
    });
    $('#modal__project').slideUp(300);
  }, delayShow);
}

$(document).ready(function () { // отправляю данные по заказу проекта
  $('.modal__project_regform').each(function () {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        user_name: {
          required: true,
        },
        user_company: {
          required: true,
        },
        user_phone: {
          required: true,
        },
        user_email: {
          required: true,
          email: true,
        },
        user_project: {
          required: true,
        },
      },
      messages: {
        user_name: {
          required: 'Это поле обязательно для заполнения',
        },
        user_company: {
          required: 'Это поле обязательно для заполнения',
        },
        user_phone: {
          required: 'Это поле обязательно для заполнения',
        },
        user_email: {
          required: 'Это поле обязательно для заполнения',
          email: true,
        },
        user_project: {
          required: 'Это поле обязательно для заполнения',
        },
      },
      submitHandler(form) {
        let th = $(form);
        console.log(th);

        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
        }).done((msg) => {

          th.trigger('reset');
          console.log(msg);
          showDataOK();
          setTimeout(function() {
            th.trigger('reset');
          }, (delayShow+100));
        });

        return false;
      }
    });
  });

});



function showTelMess(message) {
  //var formW = $('.modal__phone_regform').width();
  if(message == 'OK') {
    message = 'Вам перезвонят по указанному телефону';
  }
  var formW = message.length;// $('.modal__phone_regform').width();

  $('.modal__phone_regform-ok')
      .css({
    'display': 'block',
    'left': formW*.1,
    'right': formW*.1
  })
      .html(message);
  setTimeout(function () {
    $('.modal__phone_regform-ok').css({
      'display': 'none'
    });
    //$('#modal__phone').slideUp(300);
    $('#modal__phone').removeClass('show_modal');
  }, delayShow);
}

$(document).ready(function ($) { // отправляю данные по телефонному звонку
  $('.popup__form_button').click(function () {
    $('.modal__phone_regform').submit(function (ev) {
      ev.preventDefault();
      var str = $(this);
      //console.log(str);

      $.ajax({
        type: "POST",
        url: "phonefix.php",
        data: str.serialize(),
        success: function (msg) {
          //console.log(msg);
          /*let jsonData = JSON.parse(msg);
          console.log(jsonData);*/
          showTelMess(msg);
          setTimeout(function() {
            str.trigger('reset');
          }, (delayShow+100));
        }
      });

      return false;
    });
  });
});

/*
function showTarget(ev) {
  console.log('target: ', ev.target, '\ncurrent Target: ', ev.currentTarget);
}

var elLink = document.querySelector('body'); 
elLink.addEventListener('click', showTarget);
console.log(elLink);
//console.log(elLink.childNodes.length);

$('body').click(function(e) {
  console.log(this);
  console.log($(this).children().children().children());
  console.log($(this).children().children().children().text());
});
*/
/*
$('body').click(function(e) {
  var pos = $(this).offset();
  var relativeX = e.pageX - $(this).offset().left;
  var relativeY = e.pageY - $(this).offset().top;
  console.log('switchPopup = ' + switchPopup);
  if(switchPopup) {
    console.log(e.pageX + ' // ' + e.pageY);
    console.log(relativeX + ' // ' + relativeY);
  }
});
*/
/*
$('ul').on('click', 'li', function () { // обработка клика по динамической кнопке
  console.log(this);
  console.log(this.parent);
  console.log($(this).text());
  //$(this).parent().parent().remove();
  if (!$('button').is('.remove-button')) {
    $('.column-left').append('<p class="empty-list">Список пуст...</p>'); // восстанавливаю "пустую" запись
    $('.label-name').css('padding-top', '50px'); // восстанавливаю padding
  }
});
*/