const display = document.getElementById("display");
const deleteBtn = document.getElementById("del-btn");

//function that allows clicked btn to show up in the display box. input reads the clicked button
function appendToDisplay(input){
    display.value += input;
}

//the element is empty so when the button is clicked it will clear the box
function clearDisplay(){
    display.value = "";
}

//adds clicked buttons together
function calculate(){
    display.value = eval(display.value); //eval adds numbers clicked together
}

//clears one element at a time by turning it to a string first
function clearOneDigit() {

    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}