// https://nubex.ru/blogs20/postsByTag/?catId=1401
// https://www.youtube.com/watch?v=BnWjIPii9Ac WP


var windowWidth;
var switchPopup = false;
var telWidth = 320;
var delayShow = 5000; // задержка при демонстрации окон
var paddingShift = 14; // расчетная ширина полосы скролла справа


function moveFXinCentralContainer() { // уборка fixed-container в central-container__personal_order
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth <= (1250-paddingShift)) {
    $('.central-container__personal_order').removeClass('fixed-container');
  } else {
    $('.central-container__personal_order').addClass('fixed-container');
  }

}

function changeTelClasses() { // переключение классов в телефонном блоке header-line__phone-box
  windowWidth = $(window).width();
  if (windowWidth <= 790) {
    $('.header-line__phone-box a').removeClass('header-line__phone_button');
    $('.header-line__phone-box a').addClass('header-line__telsign fa fa-phone');
    //$('.header-line__phone-box a p').css({ 'display' : 'none' });
  } else {
    $('.header-line__phone-box a').removeClass('header-line__telsign fa fa-phone');
    $('.header-line__phone-box a').addClass('header-line__phone_button');
    //$('.header-line__phone-box a p').css({ 'display' : 'block' });
    //console.log(windowWidth);
  }

}

// показать всплывающее окно
function showPopWindow(popWin) { // popWin - всплывающее окно #modal__phone
  //console.log('+');
  $(popWin).addClass('show_modal');
  $('body').addClass('stop_scroll');
  $('.swiper-button-next').css('right', '-17px');
  //$('.bg_popup').css('display', 'block');
}

// закрыть всплывающее окно
function closePopWindow(popWin) { // popWin - всплывающее окно #modal__phone
  $(popWin).removeClass('show_modal');
  $('body').removeClass('stop_scroll');
  $('.swiper-button-next').css('right', '-28px');
  $('.header-line__div').removeClass('header-line__div_adpadd');
  //$('.bg_popup').css('display', 'none');
}


function moveView(elem) {
  var id  = $(elem).attr('href');
  var top = $(id).offset().top;
  $('body, html').animate({ scrollTop: top }, 900);
  $('.header-line__nav-popupmenu').hide();
}

$(document).mouseup(function(ev) {
  let popup = $('.modal_win');
  //console.log(ev.target);
  if(popup.is(ev.target)) {
    //console.log('!!');
    closePopWindow(ev.target);
  }
});

$(document).ready(function () {

  $('body').addClass('stop_scroll');
  paddingShift = $(window).width();
  //console.log(paddingShift);
  $('body').removeClass('stop_scroll');
  $('body').addClass('let_scroll');
  paddingShift = paddingShift - $(window).width();
  //console.log(paddingShift);

  $('.central-container__personal_button').click(function (ev) { // обработка клика по кнопке central-container__personal_button
    showPopWindow('#modal__knowmore');
  });

  $('.deal-container__boxes_button').click(function (ev) {
    showPopWindow('#modal__price');
  });

  $('.examples-container__project-button').click(function (ev) {
    showPopWindow('#modal__project');
  });

  $('.modal__win_close').click(function () {
    let $this = $('.modal__win_close');
    closePopWindow($this.closest('.show_modal'));
  });

  /*$('body').click(function(ev) { // второй вариант гашения popup, конфликтует со скриптами на body
    let $this = $(this);
    //console.log($(ev.target).get(0).closest('.modal_body'));
    if($(ev.target).get(0).closest('.modal_body') === null) {
      //console.log('!!');
      closePopWindow(ev.target);
    }
  });*/


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
        slidesPerView: 1,
        //slidesPerView: 'auto',
        spaceBetween: 3,
      },
      791: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      1251: {
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
  moveFXinCentralContainer();
  changeTelClasses();


  $('.header-line__nav-list').on('click', 'a', function (event) { // движение поля зрения к теме согласно выбранной ссылке
    event.preventDefault();
    windowWidth = $(window).width();
    moveView($(this));
  });

  $('.header-line__nav-popupmenu-list').on('click', 'a', function (event) { // движение поля зрения к теме согласно выбранной ссылке
    event.preventDefault();
    windowWidth = $(window).width();
    moveView($(this));
    $('.header-line__nav-popupmenu').hide();
  });

  $('.footer-line__nav-list').on('click', 'a', function (event) {
    event.preventDefault();
    windowWidth = $(window).width();
    moveView($(this));
  });

  $('.header-line__nav').click(function() { // отработка клика по бургеру
    windowWidth = $(window).width();
    if (windowWidth < (1250-paddingShift)) {
      $('.header-line__nav-popupmenu').toggle(300);
    } else {
      $('.header-line__nav-popupmenu').hide();
    }
  });

  $('.tel-label input').focus(function () {
    $(this).inputmask({ "mask": "+7 (999) 999-9999" });
  });


  $('.modal__project_regform').each(function () { // отправляю данные по заказу проекта
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
        //console.log(th);

        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
        }).done((msg) => {

          th.trigger('reset');
          //console.log(msg);
          showDataOK();
          setTimeout(function() {
            th.trigger('reset');
            closePopWindow(th.parent('#modal__phone'));
          }, (delayShow+100));
        });

        return false;
      }
    });
  });

  $('.modal__phone_regform').submit(function (ev) { // отправляю данные по телефонному звонку
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
          closePopWindow(str.parent('#modal__phone'));
        }, (delayShow+100));
      }
    });

    return false;
  });

});


function showDataOK() {
  console.log('data ok');
  var formW = $('.modal__project_regform').width();
  //console.log(formW);
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


$(window).resize(function () {
  windowWidth = $(window).width();
  moveFXinCentralContainer();
  changeTelClasses();
});



function showTarget(ev) {
  console.log('target: ', ev.target, '\ncurrent Target: ', ev.currentTarget);
}


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