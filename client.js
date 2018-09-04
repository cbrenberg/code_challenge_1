console.log('client.js');

let buttonCounter = 0;

$(document).ready(onReady);

function onReady() {
  console.log('jQuery');
  $('#generateDiv').on('click', generateDiv);
  $('#divOutput').on('click', '.swapButton', toggleBackground);
  $('#divOutput').on('click', '.deleteButton', deleteDiv);
}

//increment buttonCounter, create new div with button counter as <p>, swap button, and delete button
function generateDiv() {
  buttonCounter++;
  let buttons = `
    <button class="swapButton">Swap</button>
    <button class="deleteButton">Delete</button>
    `;
  $('#divOutput').append(`<div class="generatedDiv"><p>${buttonCounter}</p>${buttons}</div>`);
}

function toggleBackground() {
  //select div in which swap button is located, toggleClass '.yellowDiv'
  let thisDiv = $(this).closest('div');
  thisDiv.toggleClass('yellowDiv');
}

//remove div when delete button is clicked
function deleteDiv() {
  let thisDiv = $(this).closest('.generatedDiv');
  thisDiv.remove();
}