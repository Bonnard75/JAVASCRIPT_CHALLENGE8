"use strict";

function calcTip(tip) {
  let result;
  if (tip > 300 || tip < 50) {
    result = (tip * 15) / 100;
  } else {
    result = (tip * 20) / 100;
  }
  return result;
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}



const total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

const values = [];
function calcAverage(values) {
    let total = 0;
    for (var i = 0; i < values.length; i++) {
        total = total + parseFloat(values[i]);
    }
    let average = total / values.length;
    return average;
}



console.log(`les montants des notes sont ${bills} euros`);
console.log(`Les pourboires sont respectivement de ${tips} euros`);
console.log(`Les totaux sont respectivement de ${total} euros`); 
console.log(`Moyenne du total des notes = ${calcAverage(total)} euros`);
