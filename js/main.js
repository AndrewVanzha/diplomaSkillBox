// https://nubex.ru/blogs20/postsByTag/?catId=1401
// https://www.youtube.com/watch?v=BnWjIPii9Ac WP

var windowWidth;
var switchPopup = false;
var rs1X;
var rs1Y;

var desktopWidth = 1920 - 13;
var tabletWidth = 1024 - 13; // 1024
var telWidth = 320;
var redSigns_wideWindow = [ // макс=5! позиция для красных для 1920 (координата x, координата y, поворот, прозрачность)
  [240, 295, 0.3, 1],
  [370, 595, -0.4, 1],
  [118, 67, 0.4, 1],
  [777, 93, -0.2, 1],
  [955, 472, 0.5, 1],
];
var redSigns_middleWindow = [ // макс=5! позиция для красных для 1024
  [45, 535, 0.3, 1],
  [345, 480, -0.4, 1],
  [60, 57, 0.4, 1],
  [865, 40, -0.2, 1],
  [410, 142, 0.5, 1],
];
var redSigns_narrowWindow = [ // макс=5! позиция для красных для 320
  [35, 135, 0.3, 1],
  [185, 5, -0.4, 1],
  [38, 55, 0.4, 1],
  [130, 45, -0.2, 0],
  [260, 35, 0.5, 1],
];

var whiteSigns_wideWindow = [ // макс=5! позиция для белых для 1920
  [126, -20, 0, 1],
  [1544, -192, 0, 1],
  [10, -213, 0, 1],
  [1310, 27, 0.15, 1],
  [1642, -10, -0.25, 1],
];
var whiteSigns_middleWindow = [ // макс=5! позиция для белых для 1024
  [530, -235, 0, 0],
  [825, -70, -0.35, 1],
  [100, -340, 0.4, 1],
  [460, -60, 0.4, 1],
  [230, -240, 0, 0],
];
var whiteSigns_narrowWindow = [ // макс=5! позиция для белых для 320
  [35, 35, 0, 0],
  [178, 20, 0, 0],
  [95, 10, 0, 0],
  [60, 55, 0, 0],
  [248, 5, 0, 0],
];
var signsParameters = [ // макс=5! расчетная позиция для элементов (координата x, координата y, поворот, прозрачность)
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];

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

function moveFXinCentralContainer() { // уборка fixed-container в central-container__personal_order
  windowWidth = $(window).width();
  if (windowWidth <= 1250) {
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

function manageHeaderPhoneLine() { // управление телефонным блоком в заголовке
  if (windowWidth <= 790) {
    $('.header-line__phone').addClass('fa fa-phone');
    $('.header-line__phone').attr({
      'aria-hidden': 'true'
    });
    /*$('.header-line__phonetext').css({
      'display': 'inline-block'
    });*/
  } else {
    $('.header-line__phone').removeClass('fa fa-phone');
    $('.header-line__phone').removeAttr('aria-hidden');
    /*$('.header-line__phonetext').css({
      'display': 'none',
    });*/
  }

}
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
      'left': windowSVG / 3
    });
  } else if (windowWidth < 590 && windowWidth > 471) {
    var leftEdge = windowWidth / 2 + leftEdge1;
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowSVG / 4
    });
    $('.central-container__personal_pics-320 svg').attr('width', '470px');
  } else {  // windowWidth <= 470
    var leftEdge = windowWidth / 2 + leftEdge1;
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowWidth / 4
    });
    $('.central-container__personal_pics-320 svg').attr('width', '360px');
  }

}

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

$(document).ready(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth <= 370) {
    $('.unit-box img').css({ // задаю размеры картинки для слайдера для узкого экрана
      'width': '320px',
      'height': 'auto',
      'background-size': 'auto'
    });
  }

  if (windowWidth >= 1250) {  // убираю popup-меню на большом экране
    //console.log('ww');
    switchPopup = false;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup')
      .addClass('header-line__nav-list');
    $('.header-line__nav-popupmenu').hide();
  } else {
    switchPopup = true;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup')
      .addClass('header-line__nav-list');
}

  setLeftPaddingForPictures();
  moveFXinCentralContainer();
  changeTelClasses();
  manageSwiperPaginationAndButtons();
  //setLeftEdgePopupMenu();
  //manageHeaderPhoneLine();
  //managePersonalImg();
});

$(window).resize(function () {
  windowWidth = $(window).width();
  /*if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
    $('div.popup-box').remove(); // убираю popup-меню на большом экране
  }*/

  if (windowWidth >= 1250) {  // убираю popup-меню на большом экране
    //console.log('rr');
    switchPopup = false;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup')
      .addClass('header-line__nav-list');
    $('.header-line__nav-popupmenu').hide();
  }

  setLeftPaddingForPictures();
  moveFXinCentralContainer();
  changeTelClasses();
  manageSwiperPaginationAndButtons();
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
$(document).ready(function() {
  $('.header-line__nav').click(function() { // отработка клика по бургеру
    windowWidth = $(window).width();
    //console.log('burger');
    if (windowWidth < 1250) {
      $('.header-line__nav-popupmenu').toggle(300);
    } else {
      $('.header-line__nav-popupmenu').hide();
    }
  });
});

$(document).ready(function(){ // движение поля зрения к теме согласно выбранной ссылке
  $('.header-line__nav-popupmenu-list').on('click', 'a', function (event) {
      event.preventDefault();
      var id  = $(this).attr('href');
      var top = $(id).offset().top;
      $('body, html').animate({ scrollTop: top }, 900);
      $('.header-line__nav-popupmenu').hide();
      //console.log(id);
  });
});

$(document).ready(function () { // обработка клика по кнопке central-container__personal_button
  $('.central-container__personal_button').click(function (ev) {
    //console.log(ev.target);
    $('#modal__knowmore').slideDown(300);
    $('.bg_popup').fadeIn(300);
  });

  $('.modal__knowmore_close').click(function () {
    $('#modal__knowmore').slideUp(300);
  });

  $('.bg_popup').click(function (ev) {
    //console.log(ev.target);
    $('#modal__knowmore').slideUp(300);
    $('.bg_popup').fadeOut(300);
  });

});

$(document).ready(function () { // обработка клика по кнопке deal-container__boxes_button
  $('.deal-container__boxes_button').click(function (ev) {
    //console.log(ev.target);
    $('#modal__price').slideDown(300);
    $('.bg_popup').fadeIn(300);
  });

  $('.modal__price_close').click(function () {
    $('#modal__price').slideUp(300);
  });

  $('.bg_popup').click(function (ev) {
    //console.log(ev.target);
    $('#modal__price').slideUp(300);
    $('.bg_popup').fadeOut(300);
  });

});

$(document).ready(function () { // обработка клика по кнопке examples-container__projectbutton
  $('.examples-container__projectbutton').click(function (ev) {
    //console.log(ev.target);
    $('#modal__project').slideDown(300);
    $('.bg_popup').fadeIn(300);
  });

  $('.modal__project_close').click(function () {
    $('#modal__project').slideUp(300);
  });

  $('.bg_popup').click(function (ev) {
    //console.log(ev.target);
    $('#modal__project').slideUp(300);
    $('.bg_popup').fadeOut(300);
  });

});

/*
$(function () {
  $('.header-line__nav').click(function () {
    windowWidth = $(window).width();
    setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth < 1250 && (!$('div').is('.popup-box'))) {
      $('.header-line').append( // вывожу popup-меню
        '<div class="popup-box">' +
        '<div class="header-line__nav-list">' +
        '<li><a href="#deal-article">Услуги</a></li>' +
        '<li><a href="#examples-section">Портфолио</a></li>' +
        '<li><a href="#price-section">Стоимость</a></li>' +
        '</div>' +
        '</div>');
    } else {
      $('div.popup-box').remove(); // убираю popup-меню на малом экране
    }
  });
});
*/
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