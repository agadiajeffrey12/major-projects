'use strict';
// const input = document.querySelector('#inputUser').value;
// const inputId = document.querySelector('#inputId').value;
const login = document.querySelector('#login');
const cancelBtn = document.querySelector('.cancelbtn');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-box');
const modalCan = document.querySelector('.modalcan');

const userNames = [];
const userPassword = [];
const userData = []

login.addEventListener('click', function() {
    const input = document.querySelector('#inputUser').value;
    const inputId = document.querySelector('#inputId').value;
  userNames.unshift(input);
  userPassword.push(inputId);
  console.log(userNames, userPassword);
  if (userNames.includes(input)){
       modal.style.visibility = 'visible';
       modal.style.transition = 'all .3s'
       if(modal.style.visibility = 'visible'){
        modalBox.textContent = ' ' + input;
        console.log(modalBox.textContent);
       }
  }
  const peopleLog = input + inputId
  console.log(peopleLog);
  if (userNames.includes(input)){
    userData.unshift(peopleLog)
    console.log(userData);
  }
})
// console.log(userNames);
cancelBtn.addEventListener('click', function() {
    document.querySelector('#inputUser').value = '';
    document.querySelector('#inputId').value = '';
})

modalCan.addEventListener('click', function() {
  modal.style.visibility = 'hidden'
})