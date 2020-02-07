//Variables
var dice4 = document.getElementById('dice4');
var dice6 = document.getElementById('dice6');
var dice8 = document.getElementById('dice8');
var dice10 = document.getElementById('dice10');
var dice12 = document.getElementById('dice12');
var dice20 = document.getElementById('dice20');

var resultDisplay = document.getElementById('result');


var dice4 = 4;
var dice6 = 6;
var dice8 = 8;
var dice10 = 10;
var dice12 = 12;
var dice20 = 20;



//FOUR

function roll4() {
   var diceNumber = Math.floor(Math.random() * 4) + 1;
   result.innerHTML = diceNumber;
   console.log(diceNumber);    
   return diceNumber;
};

document.getElementById("dice4");


//SIX
function roll6() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    result.innerHTML = diceNumber;
    console.log(diceNumber);    
    return diceNumber;
 };
 
 document.getElementById("dice6");


 //EIGHT
 function roll8() {
    var diceNumber = Math.floor(Math.random() * 8) + 1;
    result.innerHTML = diceNumber;
    console.log(diceNumber);    
    return diceNumber;
 };
 
 document.getElementById("dice8");


//TEN
 function roll10() {
    var diceNumber = Math.floor(Math.random() * 10) + 1;
    result.innerHTML = diceNumber;
    console.log(diceNumber);    
    return diceNumber;
 };
 
 document.getElementById("dice10"); 


//TWELVE
 function roll12() {
    var diceNumber = Math.floor(Math.random() * 12) + 1;
    result.innerHTML = diceNumber;
    console.log(diceNumber);    
    return diceNumber;
 };
 
 document.getElementById("dice12"); 

 //TWENTY
 function roll20() {
    var diceNumber = Math.floor(Math.random() * 20) + 1;
    result.innerHTML = diceNumber;
    console.log(diceNumber);    
    return diceNumber;
 };
 
 document.getElementById("dice20"); 