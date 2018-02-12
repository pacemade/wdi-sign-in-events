var modalEle = document.querySelector('.modal');
var signInEle = document.querySelector('.signin');
var closeEle = document.querySelector('.close');
var submitEle = document.querySelector('.submit');
var userEle = document.querySelector('#user');
var passEle = document.querySelector('#pass');

function showModal(){
  modalEle.style.display = 'unset';
}

function closeModal(){
  modalEle.style.display = 'none';
}

function errorUp(){
  userEle.classList.add('error');
  passEle.classList.add('error');
}

function errorDown(e){
  e.target.classList.remove('error')
}

function dontClose(e){
  e.stopPropagation();
}

signInEle.addEventListener('click', showModal);
closeEle.addEventListener('click', closeModal);
submitEle.addEventListener('click', errorUp);
userEle.addEventListener('focus', errorDown);
passEle.addEventListener('focus', errorDown);
modalEle.addEventListener('click', closeModal);

userEle.addEventListener('click', dontClose);
passEle.addEventListener('click', dontClose);
submitEle.addEventListener('click', dontClose);
