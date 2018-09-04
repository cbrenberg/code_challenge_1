console.log('client.js');

let buttonCounter = 0;

$(document).ready(onReady);

function onReady() {
  console.log('jQuery');
  $('#generateDiv').on('click', generateDiv);
}

function generateDiv() {
  buttonCounter++;
  let buttons = '<button class="swapButton">Swap</button><button class="deleteButton">Delete</button>';
  $('body').append(`<div class="generatedDiv" id="${buttonCounter}"><p>${buttonCounter}</p>${buttons}</div>`);
}