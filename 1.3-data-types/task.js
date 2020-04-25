function calculateTotalMortgage(percent, contribution, amount, date) {
	'use strict'
// 	const parsed = parseInt(percent, contribution, amount);
// 	let arrParsed = [percent, contribution, amount, date];
//      for (let i = 0; i < arrParsed.length; i++){
//       if (isNaN(parsed)) { 
// 		let  message = `Параметр ${arrParsed[i]} содержит неправильное значение`;
// 		console.log(message); 
// 	   }
	
// }

	percent = percent / 100;
	let toGiveBack = amount - contribution;
	
let startDate = new Date().getTime();
let endDate = date.getTime();
let dateDifference =  endDate - startDate;
let remainsDate = new Date(dateDifference);
let remainsSec = (parseInt(remainsDate / 1000));
let remainsFullDays = (parseInt(remainsSec / (24 * 60 * 60)));
let monthsToPay = (remainsFullDays/30).toFixed(1);

let percentForMonth =  percent / 12;
let payForMonth =  toGiveBack*(percentForMonth+percentForMonth/(((1+percentForMonth)**monthsToPay)-1));
let totalAmount = payForMonth.toFixed(2) * monthsToPay ;
return totalAmount.toFixed(2)
}

function getGreeting(name) {
  let greeting = "";
	if (name == null || name == "") {
		greeting = "Привет, мир! Меня зовут Аноним";
	} else {
         greeting = `Привет, мир! Меня зовут ${name}`;
	    }
	return greeting;
}