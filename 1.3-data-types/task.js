function calculateTotalMortgage(percent, contribution, amount, date) {
	'use strict'

const parsedPercent = parseFloat(percent);	
const parsedСontribution = parseFloat(contribution);
const parsedAmount = parseFloat(amount);

if(isNaN(percent)) {
    return (`Параметр "Ставка" содержит неправильное значение${percent}`);
} 
if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение${contribution}`);
} 
if (isNaN(amount)) {
	return (`Параметр "Сумма ипотеки" содержит неправильное значение${amount}`);
}

percent = percent / 100;
let toGiveBack = amount - contribution;
	
let startDate = new Date().getTime();
let endDate = date.getTime();
let dateDifference =  endDate - startDate;
let remainsDate = new Date(dateDifference);
let remainsSec = (parseInt(remainsDate / 1000));
let remainsFullDays = (parseInt(remainsSec / (24 * 60 * 60)));
let monthsToPay = Math.round(remainsFullDays / 30);

let percentForMonth =  percent / 12;
let payForMonth =  toGiveBack * (percentForMonth + percentForMonth / (((1 + percentForMonth)**monthsToPay) - 1));
let totalAmount = payForMonth * monthsToPay ;
return parseFloat(totalAmount.toFixed(2))
}




function getGreeting(name) {
	return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
}