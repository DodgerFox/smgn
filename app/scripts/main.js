'use strict'

window.onload = function () {
  searching()
  // authreg()
  menu()
  addComment()
}

var searching = () => {
  var popup = document.getElementById('searching'),
      open = document.querySelector('.header-search'),
      body = document.getElementsByTagName('body')[0],
      close = document.querySelector('.searching-close');

  open.onclick = switcher
  close.onclick = switcher

  function switcher() {
    popup.classList.toggle('fade')
    body.classList.toggle('fixed')
  }

}

// var authreg = () => {
//   var popup = document.getElementById('authreg'),
//       open = document.querySelector('.header-signin'),
//       body = document.getElementsByTagName('body')[0],
//       close = document.querySelector('.authreg-close');
//
//   if(authreg){
//
//   }else {
//     open.onclick = switcher
//     close.onclick = switcher
//   }
//
//   function switcher() {
//     popup.classList.toggle('fade')
//     body.classList.toggle('fixed')
//   }
//
// }

var menu = () => {
  var header = document.querySelector('.header'),
      button = document.querySelector('.header-gamburger'),
      body = document.getElementsByTagName('body')[0];

  button.onclick = switcher

  function switcher() {
    this.classList.toggle('active')
    header.classList.toggle('open')
    body.classList.toggle('fixed')
  }

}

var addComment = () => {
  var button = document.querySelectorAll('.comments-feedback'),
      input = '<input type="text">';

  button.forEach(function(element) {
    element.addEventListener('click', function () {
      element.nextElementSibling.classList.toggle('open')
      element.nextElementSibling.focus()
    })
  });
}
