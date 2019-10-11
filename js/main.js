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

function manageHeaderPhoneLine() { // управление телефонным блоком в заголовке
  if (windowWidth <= 790) {
    $('.header-line__phonetext').css({
      'display': 'inline-block'
    });
    //console.log(varOffset.left);
  } else {
    $('.header-line__phonetext').css({
      'display': 'none',
    });
    //console.log(windowWidth);
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
function setLeftPaddingForNameLine() { // управление левым блоком в персональном разделе и символами
  var leftEdge0 = 120;
  var leftEdge1 = 10;
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
    var windowSVG = $('.central-container__personal_pics-320').width();
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowSVG / 3
    });
  } else if (windowWidth < 590 && windowWidth > 471) {
    var leftEdge = windowWidth / 2 + leftEdge1;
    var windowSVG = $('.central-container__personal_pics-320').width();
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowSVG / 4
    });
    $('.central-container__personal_pics-320 svg').attr('width', '470px');
  } else {
    var leftEdge = windowWidth / 2 + leftEdge1;
    var windowSVG = $('.central-container__personal_pics-320').width();
    //console.log(windowSVG);
    $('.central-container__personal_pics-320_pic').css({ // двигаю край правого блока с картинкой в персональном разделе
      'left': windowSVG / 4
    });
    $('.central-container__personal_pics-320 svg').attr('width', '360px');
  }
  //console.log(windowWidth);
}

// расчет траектории смещения для символов, class__signString:String - класс "красного"/"белого" символа
// sign_startCoords:Array - начальная позиция, sign_endCoords:Array - конечная позиция
// startWindowWidth - ширина окна для начальной позиции, endWindowWidth - ширина окна для конечной позиции
function calculateCoordsSigns(startWindowWidth, sign_startCoords, endWindowWidth, sign_endCoords) {
  var i = 0;
  var paramK;
  var paramC;

  for (i = 0; i < sign_startCoords.length; i++) {
    paramK = (sign_startCoords[i][0] - sign_endCoords[i][0]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][0] - paramK * startWindowWidth;
    var coordX = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][1] - sign_endCoords[i][1]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][1] - paramK * startWindowWidth;
    var coordY = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][2] - sign_endCoords[i][2]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][2] - paramK * startWindowWidth;
    var degS = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][3] - sign_endCoords[i][3]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][3] - paramK * startWindowWidth;
    var opacityE = paramK * windowWidth + paramC;

    signsParameters[i][0] = coordX;
    signsParameters[i][1] = coordY;
    signsParameters[i][2] = degS;
    signsParameters[i][3] = opacityE;

  }
  //console.log(startWindowWidth);
  //console.log(endWindowWidth);
}

// формирование траектории смещения для символов, class__signString:String - класс "красного"/"белого" символа - не используется
// sign_startCoords:Array - начальная позиция, sign_endCoords:Array - конечная позиция
// startWindowWidth - ширина окна для начальной позиции, endWindowWidth - ширина окна для конечной позиции
function moveSign(class__signString, startWindowWidth, sign_startCoords, endWindowWidth, sign_endCoords) {
  var i = 0;
  var classString = '';
  //var classString = '.small-elements ';

  classString += class__signString; // формирую строку нужного класса
  calculateCoordsSigns(startWindowWidth, sign_startCoords, endWindowWidth, sign_endCoords); // расчет конечных параметров позиции тега
  for (i = 0; i < signsParameters.length; i++) {
    signsParameters[i][0] = signsParameters[i][0] + 110;
    signsParameters[i][1] = signsParameters[i][1] + 280;
  }

  for (i = 0; i < sign_startCoords.length; i++) {
    var act__classString = classString + (i + 1); // формирую строку нужного класса

    $(act__classString).css({
      'left': signsParameters[i][0],
      'top': signsParameters[i][1],
      'opacity': signsParameters[i][3]
    });

  }
  //console.log(startWindowWidth);
  //console.log(endWindowWidth);
}

function scatterSigns(classString) {
  var i = 0;
  var act__classString = '';
  //console.log(windowWidth);

  for (i = 0; i < signsParameters.length; i++) {
    act__classString = classString + (i + 1); // формирую строку нужного класса

    $(act__classString).css({
      'transform': 'matrix(1, ' + signsParameters[i][2] + ', ' + -signsParameters[i][2] + ', 1, ' + signsParameters[i][0] + ',' + signsParameters[i][1] + ')',
      'opacity': signsParameters[i][3],
      'transition': 'transform 2s ease-out'
    });
  }

}

// формирование позиции для символов, class__signString:String - класс "красного"/"белого" символа 
// sign_startCoords:Array - начальная позиция (широкий экран), sign_endCoords:Array - конечная позиция (узкий экран)
// startWindowWidth - ширина окна для широкого экрана, endWindowWidth - ширина окна для узкого экрана
function deploySigns(class__signString, startWindowWidth, sign_startCoords, endWindowWidth, sign_endCoords) {
  var i = 0;
  var classString = '.central-container__redtag.small-sign';

  classString += class__signString; // формирую строку нужного класса
  calculateCoordsSigns(startWindowWidth, sign_startCoords, endWindowWidth, sign_endCoords); // расчет конечных параметров позиции тега
  scatterSigns(class__signString);

  //console.log(class__signString);
  //console.log(startWindowWidth);
  //console.log(endWindowWidth);
}

function setCoordsForSigns() { // управление символами в персональном и ценовом разделах 
  var i = 0;

  if (windowWidth > 1920) {
    // двигаю все 5 красных символов в персональном разделе
    deploySigns('.central-container__redtag.small-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow);
    // двигаю все 5 белых символов в ценовом разделе
    deploySigns('.central-container__whitetag.small-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow);
    //moveSign('.red-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow); 
    //moveSign('.white-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow); 

  } else if (windowWidth <= 1920 && windowWidth > 1170) {
    deploySigns('.central-container__redtag.small-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow);
    deploySigns('.central-container__whitetag.small-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow);

  } else if (windowWidth <= 1170 && windowWidth > 1005) { // 1024px
    deploySigns('.central-container__redtag.small-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow);
    deploySigns('.central-container__whitetag.small-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow);

  } else {
    deploySigns('.central-container__redtag.small-sign', desktopWidth, redSigns_wideWindow, telWidth, redSigns_narrowWindow);
    deploySigns('.central-container__whitetag.small-sign', desktopWidth, whiteSigns_wideWindow, telWidth, whiteSigns_narrowWindow);
    //moveSign('.red-sign', desktopWidth, redSigns_wideWindow, telWidth, redSigns_narrowWindow); // двигаю все 5 красных символов в персональном разделе
    //moveSign('.white-sign', desktopWidth, whiteSigns_wideWindow, telWidth, whiteSigns_narrowWindow); // двигаю все 5 белых символов в ценовом разделе
  }

  //console.log(windowWidth);
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
  } else {
    switchPopup = true;
    $('.header-line__nav ul')
      .removeClass('header-line__nav-popup')
      .addClass('header-line__nav-list');
}

  setLeftPaddingForNameLine();
  moveFXinCentralContainer();
  //setCoordsForSigns();
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
  }

  setLeftPaddingForNameLine();
  moveFXinCentralContainer();
  //setCoordsForSigns();
  manageSwiperPaginationAndButtons();
  //setLeftEdgePopupMenu();
  //manageHeaderPhoneLine();
  //managePersonalImg();
});

$(function () {
  $('.header-line__nav').click(function () {
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