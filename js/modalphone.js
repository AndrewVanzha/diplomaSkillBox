// https://learn.javascript.ru/dom-navigation
// https://learn.javascript.ru/modifying-document
// https://tproger.ru/translations/dom-javascript/
// https://learn.javascript.ru/multi-insert
// https://learn.javascript.ru/event-delegation

window.addEventListener('DOMContentLoaded', function () {
  const callButton = document.getElementsByClassName("call-button"); // кнопки Заказать звонок
  const formElements = document.querySelectorAll(".popup__formbox-input"); // input в попап-меню
  const telPopupMenu = document.querySelector('#modal__phone'); // попап-меню
  const closeTelMenu = document.querySelector('.modal__phone_close'); // значок закрытия меню
  let prevActiveElement;
  let keys = {
    Esc: 27,
    Enter: 13,
    Space: 32,
  };

  function closeTelWin() {
    document.getElementById('modal__phone').classList.remove('show_modal');
    document.getElementsByTagName('BODY')[0].classList.remove('stop_scroll');
    document.getElementsByClassName('header-line__div')[0].classList.remove('header-line__div_adpadd');

    Array.from(document.body.children).forEach((child) => { // снимаю блокировку со всего, кроме выбранного меню
      if(child !== telPopupMenu) {
        child.inert = false;
      } else {
        child.inert = true;
      }
    });

    setTimeout(() => { // возвращаю фокус на старое место
      prevActiveElement.focus();
    }, 100);
  }

  for(let ix=0; ix<3; ix++) { // вешаю обработчик на все 3 кнопки call-button
    callButton[ix].addEventListener('click', function() {
      //telPopupMenu.inert = true;
      prevActiveElement = document.activeElement;

      document.getElementById('modal__phone').classList.add('show_modal');
      document.getElementsByTagName('BODY')[0].classList.add('stop_scroll');
      document.getElementsByClassName('header-line__div')[0].classList.add('header-line__div_adpadd');

      Array.from(document.body.children).forEach((child) => { // блокирую все, кроме выбранного меню
        if(child !== telPopupMenu) {
          child.inert = true;
        } else {
          child.inert = false;
        }
      });

      setTimeout(() => { // фокус на крестик закрытия
        closeTelMenu.focus();
      }, 100);

      document.addEventListener('keydown', function(ev) {
        //console.log(ev);
        if(ev.keyCode == keys.Esc) { // закрытие меню по клавише Esc
          closeTelWin();
        }
      });
    });
  }

  document.querySelector('.modal__phone_close').addEventListener('click', function() {
    closeTelWin();
  });

  document.querySelector('.modal__phone_close').addEventListener('keydown', function(ev) {
    //console.log(ev);
    if(ev.keyCode==keys.Enter || ev.keyCode==keys.Space) { // закрытие меню по клавишам
      closeTelWin();
    }
  });


  let selectedInput;
  const inputSelect = document.querySelector('.modal_win'); // выберет 1й с id="modal__phone"

  //inputSelect.onclick = function (event) {
  inputSelect.onmousemove = function (event) {
    selectedInput = event.target; // где было движение?

    //formElements.forEach(function(el) {}); тоже работает
    [].forEach.call(formElements, function (el) {  // пробежаться по всем input
      if (el.value == '') { // в исходное состояние, если пустая строка
        downlight3(el);
      } else {
        highlight3(el); // подсветить, если есть что-то в input
      }
    });

    if (selectedInput.classList[0] == 'popup__formbox-input') { // движение на input?
      //console.log(selectedInput);
      highlight3(selectedInput); // тогда ввести иллюминацию

    } else {
      [].forEach.call(formElements, function (el) { // иначе пробежаться по всем input
        if(el.nextElementSibling.value) {
          highlight3(el); // подсветить, если есть что-то в input
        } else {
          if (el.value == '') {
            downlight3(el); // в исходное состояние, если пустая строка
          }
        }
      });
    }

  };

});


function highlight3 (box) { // подсветить input - на вход элемент input
  box.parentElement.classList.remove('popup__formbox-greyborder'); // убрал серую рамку у родителя
  box.parentElement.classList.add('popup__formbox-solidborder'); // добавил сплошную рамку у родителя
  box.classList.remove('popup__formbox-inputneutral'); // убрал серый цвет фона
  box.classList.add('popup__formbox-inputactive'); // добавил белый цвет фона
  box.nextElementSibling.classList.remove('popup__formbox-textneutral'); // убрал заголовок с поля у последующего элемента
  box.nextElementSibling.classList.add('popup__formbox-textactive'); // поднял заголовок на границу у последующего элемента
}

function downlight3 (box) { // убрать подсветку input - на вход элемент input
  box.parentElement.classList.remove('popup__formbox-solidborder'); // убрал сплошную рамку у родителя
  box.parentElement.classList.add('popup__formbox-greyborder'); // добавил серую рамку у родителя
  box.classList.remove('popup__formbox-inputactive'); // убрал белый цвет фона
  box.classList.add('popup__formbox-inputneutral'); // добавил серый цвет фона
  box.nextElementSibling.classList.remove('popup__formbox-textactive'); // убрал заголовок с границы у последующего элемента
  box.nextElementSibling.classList.add('popup__formbox-textneutral'); // спустил заголовок на поле у последующего элемента
}

Inputmask().mask(document.querySelector(".label-style input"));
$(document).ready(function(){
  $('.label-style input').inputmask({ "mask": "+7 (999) 999-9999" });
});
