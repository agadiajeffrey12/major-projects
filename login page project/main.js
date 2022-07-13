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

login.addEventListener('click', function() {
    const input = document.querySelector('#inputUser').value;
    const inputId = document.querySelector('#inputId').value;
  userNames.unshift(input);
  userPassword.push(inputId);
  console.log(userNames, userPassword);
  if (userNames.includes(input)){
       modal.style.visibility = 'visible';
       if(modal.style.visibility = 'visible'){
        modalBox.textContent += ' ' + input;
        console.log(modalBox.textContent);
       }
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