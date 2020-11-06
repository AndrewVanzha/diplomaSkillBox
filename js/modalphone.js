// https://learn.javascript.ru/dom-navigation
// https://learn.javascript.ru/modifying-document
// https://tproger.ru/translations/dom-javascript/
// https://learn.javascript.ru/multi-insert
// https://learn.javascript.ru/event-delegation

//const elementButton = document.getElementsByClassName("footer-container__phone_button")[0]; // кнопка Заказать звонок
const callButton = document.getElementsByClassName("call-button"); // кнопки Заказать звонок
//console.log(callButton);
const elementMenu = document.getElementById("modal__phone"); // попап-меню
let styleMenu = elementMenu.style;
let elements = [];

callButton[0].addEventListener('click', function() {
  document.getElementById('modal__phone').classList.add('show_modal');
  //console.log('top');
});
callButton[1].addEventListener('click', function() {
  document.getElementById('modal__phone').classList.add('show_modal');
  //console.log('top a');
});
callButton[2].addEventListener('click', function() {
  document.getElementById('modal__phone').classList.add('show_modal');
  //console.log('bottom');
});

document.querySelector('.modal__phone_close').addEventListener('click', function() {
  document.getElementById('modal__phone').classList.remove('show_modal');
});

//console.log('**');

let selectedInput;
//const inputSelect = document.querySelector('body');
const inputSelect = document.querySelector('.modal__phone_content');
//let inputBoxes = document.querySelectorAll('.popup__formbox');
//let inputSelect = document.querySelector('.popup__form_inputblock');
//console.log(inputSelect);
//console.log(inputBoxes);

//inputSelect.onclick = function (event) {
inputSelect.onmousemove = function (event) {
  //console.log('#');
  let target = event.target; // где был клик?
  selectedInput = target;
  //console.log(target);
  //console.log(this);
  //console.log(target.classList);

  //if (target.classList[2] == 'name-box') console.log(target.classList[2]);

  if (target.classList[0] != 'popup__formbox-input') { // click не на input? тогда убрать всю подсветку
    if (selectedInput) { // убрать существующую подсветку, если есть
      if (selectedInput.value == '') { // в исходное состояние, если пустая строка
        selectedInput.parentElement.classList.remove('popup__formbox-solidborder'); // убрал сплошную рамку у родителя
        selectedInput.parentElement.classList.add('popup__formbox-greyborder'); // добавил серую рамку у родителя
        selectedInput.classList.remove('popup__formbox-inputactive'); // убрал белый цвет фона
        selectedInput.classList.add('popup__formbox-inputneutral'); // добавил серый цвет фона
        selectedInput.nextElementSibling.classList.remove('popup__formbox-textactive'); // убрал заголовок с границы у последующего элемента
        selectedInput.nextElementSibling.classList.add('popup__formbox-textneutral'); // спустил заголовок на поле у последующего элемента
      }
    }
    return;
  }

  highlight3(target); // подсветить input
};

function highlight3(box) {
  //console.log('selectedInput');
  //console.log(selectedInput);
  if (selectedInput) { // убрать существующую подсветку, если есть
    //console.log(selectedInput.value);
    if (selectedInput.value == '') { // в исходное состояние, если пустая строка
      selectedInput.parentElement.classList.remove('popup__formbox-solidborder'); // убрал сплошную рамку у родителя
      selectedInput.parentElement.classList.add('popup__formbox-greyborder'); // добавил серую рамку у родителя
      selectedInput.classList.remove('popup__formbox-inputactive'); // убрал белый цвет фона
      selectedInput.classList.add('popup__formbox-inputneutral'); // добавил серый цвет фона
      selectedInput.nextElementSibling.classList.remove('popup__formbox-textactive'); // убрал заголовок с границы у последующего элемента
      selectedInput.nextElementSibling.classList.add('popup__formbox-textneutral'); // спустил заголовок на поле у последующего элемента
    }
  }
  selectedInput = box;
  //console.log(selectedInput);
  //console.log(selectedInput.parentElement);
  //console.log(selectedInput.nextElementSibling);

  // подсветить новый input
  selectedInput.parentElement.classList.remove('popup__formbox-greyborder'); // убрал серую рамку у родителя
  selectedInput.parentElement.classList.add('popup__formbox-solidborder'); // добавил сплошную рамку у родителя
  selectedInput.classList.remove('popup__formbox-inputneutral'); // убрал серый цвет фона
  selectedInput.classList.add('popup__formbox-inputactive'); // добавил белый цвет фона
  selectedInput.nextElementSibling.classList.remove('popup__formbox-textneutral'); // убрал заголовок с поля у последующего элемента
  selectedInput.nextElementSibling.classList.add('popup__formbox-textactive'); // поднял заголовок на границу у последующего элемента

}

Inputmask().mask(document.querySelector(".label-style input"));
$(document).ready(function(){
  $('.label-style input').inputmask({ "mask": "+7 (999) 999-9999" });
});
