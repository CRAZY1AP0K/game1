let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 20);
let userNum;

btn.onclick = function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum) {
    check.textContent = "Пока что не угадали";
    item++;
  } else if (userNum < randNum) {
    check.textContent = "Пока что не угадали";
    item++;
  } else {
    check.textContent = "Поздравляю! Вы угадали число";
    item++;
  }
};