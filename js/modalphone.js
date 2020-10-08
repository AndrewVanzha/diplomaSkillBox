// https://learn.javascript.ru/dom-navigation
// https://learn.javascript.ru/modifying-document
// https://tproger.ru/translations/dom-javascript/
// https://learn.javascript.ru/multi-insert
// https://learn.javascript.ru/event-delegation

//const elementButton = document.getElementsByClassName("footer-container__phone_button")[0]; // кнопка Заказать звонок
const callButton = document.getElementsByClassName("telbook-call"); // кнопки Заказать звонок
const elementMenu = document.getElementById("modal__phone"); // попап-меню
let styleMenu = elementMenu.style;
let elements = [];

function callHandler() { // обработчик кнопки Заказать звонок
  console.log('++');
  let cont;

  styleMenu.display = 'flex';

  // формирую блок popup-меню
  elements.push(document.createElement('div')); // #0
  elements[0].classList.add('modal__phone_content');
  elementMenu.appendChild(elements[0]);

  elements.push(document.createElement('div')); // #1
  elements[1].classList.add('modal__phone_header');
  elements[0].appendChild(elements[1]);

  elements.push(document.createElement('span')); // #2
  elements[2].classList.add('modal__phone_close');
  elements[2].setAttribute('onclick', 'closeFun()'); 
  elements[2].innerHTML = 
    `<div class="modal__phone_close-intA">
    <div class="modal__phone_close-intB"></div>
    </div>`;
  elements[1].appendChild(elements[2]);

  elements.push(document.createElement('h2')); // #3
  cont = document.createTextNode('Заказ звонка');
  elements[3].appendChild(cont);
  elements[1].appendChild(elements[3]);

  elements.push(document.createElement('div')); // #4
  elements[4].classList.add('modal__phone_body');
  elements[0].appendChild(elements[4]);

  elements.push(document.createElement('form')); // #5
  elements[5].classList.add('modal__phone_regform');
  elements[5].classList.add('ajax-form');
  elements[5].method = 'POST'; 
  elements[5].name = 'form_name'; 
  elements[5].enctype = 'multipart/form-data'; 
  elements[4].appendChild(elements[5]);
  //elem1.setAttribute('method', 'POST'); 

  elements.push(document.createElement('div')); // #6
  elements[6].classList.add('popup__formbox');
  elements[6].classList.add('popup__formbox-greyborder');
  elements[5].appendChild(elements[6]);

  elements.push(document.createElement('input')); // #7
  elements[7].classList.add('popup__formbox-input');
  elements[7].classList.add('popup__formbox-inputneutral');
  elements[7].classList.add('name_box');
  elements[7].type = 'name';
  elements[7].name = 'name';
  elements[7].setAttribute('required', true); 
  elements[6].appendChild(elements[7]);

  elements.push(document.createElement('label')); // #8
  elements[8].innerHTML = 'Имя:*';
  elements[8].classList.add('popup__formbox-text');
  elements[8].classList.add('popup__formbox-textneutral');
  elements[6].appendChild(elements[8]);

  elements.push(document.createElement('div')); // #9
  elements[9].classList.add('popup__formbox');
  elements[9].classList.add('popup__formbox-greyborder');
  elements[5].appendChild(elements[9]);

  elements.push(document.createElement('input')); // #10
  elements[10].classList.add('popup__formbox-input');
  elements[10].classList.add('popup__formbox-inputneutral');
  elements[10].classList.add('surname_box');
  elements[10].type = 'name';
  elements[10].name = 'surname';
  elements[10].setAttribute('required', true); 
  elements[9].appendChild(elements[10]);

  elements.push(document.createElement('label')); // #11
  elements[11].innerHTML = 'Фамилия:*';
  elements[11].classList.add('popup__formbox-text');
  elements[11].classList.add('popup__formbox-textneutral');
  elements[9].appendChild(elements[11]);

  elements.push(document.createElement('div')); // #12
  elements[12].classList.add('popup__formbox');
  elements[12].classList.add('popup__formbox-greyborder');
  elements[5].appendChild(elements[12]);

  elements.push(document.createElement('input')); // #13
  elements[13].classList.add('popup__formbox-input');
  elements[13].classList.add('popup__formbox-inputneutral');
  elements[13].classList.add('phone_box');
  elements[13].type = 'tel';
  elements[13].name = 'tel';
  elements[13].setAttribute('required', true); 
  elements[12].appendChild(elements[13]);

  elements.push(document.createElement('label')); // #14
  elements[14].innerHTML = 'Телефон:*';
  elements[14].classList.add('popup__formbox-text');
  elements[14].classList.add('popup__formbox-textneutral');
  elements[12].appendChild(elements[14]);

  elements.push(document.createElement('div')); // #15
  elements[15].classList.add('popup__formbox');
  elements[15].classList.add('popup__formbox-greyborder');
  elements[5].appendChild(elements[15]);

  elements.push(document.createElement('input')); // #16
  elements[16].classList.add('popup__formbox-input');
  elements[16].classList.add('popup__formbox-inputneutral');
  elements[16].classList.add('email_box');
  elements[16].type = 'email';
  elements[16].name = 'email';
  elements[16].setAttribute('required', true); 
  elements[15].appendChild(elements[16]);

  elements.push(document.createElement('label')); // #17
  elements[17].innerHTML = 'E-mail:*';
  elements[17].classList.add('popup__formbox-text');
  elements[17].classList.add('popup__formbox-textneutral');
  elements[15].appendChild(elements[17]);

  elements.push(document.createElement('div')); // #18
  elements[18].classList.add('popup__form_bottom');
  elements[5].appendChild(elements[18]);

  elements.push(document.createElement('input')); // #19
  elements[19].classList.add('popup__form_check-input');
  elements[19].id = 'popup__form_agree';
  elements[19].type = 'checkbox';
  elements[19].setAttribute('checked', true); 
  elements[18].appendChild(elements[19]);

  elements.push(document.createElement('label')); // #20
  elements[20].innerHTML = 'Я согласен на <span>обработку персональных данных</span>';
  elements[20].id = 'popup__form_agree';
  elements[20].classList.add('popup__form_check-label');
  elements[18].appendChild(elements[20]);

  elements.push(document.createElement('input')); // #21
  elements[21].classList.add('popup__form_button');
  elements[21].name = 'user_submit';
  elements[21].type = 'submit';
  elements[21].value = 'Отправить';
  elements[5].appendChild(elements[21]);

  elements.push(document.createElement('div')); // #22
  elements[22].classList.add('modal__phone_footer');
  elements[22].innerHTML = `<p>#169; Дмитрий Алексеев, 2016-2018</p>`;
  elements[0].appendChild(elements[22]);
  //console.log(elements);
}

function closeFun() {
  console.log('x');
  elements[0].removeChild(elements[22]);

  elements[5].removeChild(elements[21]);
  elements[18].removeChild(elements[20]);
  elements[18].removeChild(elements[19]);
  
  elements[5].removeChild(elements[18]);
  elements[15].removeChild(elements[17]);
  elements[15].removeChild(elements[16]);
  
  elements[5].removeChild(elements[15]);
  elements[12].removeChild(elements[14]);
  elements[12].removeChild(elements[13]);
  
  elements[5].removeChild(elements[12]);
  elements[9].removeChild(elements[11]);
  elements[9].removeChild(elements[10]);
  
  elements[5].removeChild(elements[9]);
  elements[6].removeChild(elements[8]);
  elements[6].removeChild(elements[7]);

  elements[5].removeChild(elements[6]);
  elements[4].removeChild(elements[5]);
  elements[0].removeChild(elements[4]);

  elements[1].removeChild(elements[3]);
  elements[1].removeChild(elements[2]);
  elements[0].removeChild(elements[1]);
  elementMenu.removeChild(elements[0]);

  styleMenu.display = 'none';

  elements.splice(0, elements.length);
  //console.log(elements);
}

callButton[0].addEventListener('click', function() {
  document.getElementById('modal__phone').classList.add('show_modal');
  //console.log('top');
});
callButton[1].addEventListener('click', function() {
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
