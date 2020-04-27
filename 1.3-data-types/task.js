function calculateTotalMortgage(percent, contribution, amount, date) {
	'use strict'

	if(typeof percent !== "number") {
		let message = `Параметр "Ставка" содержит неправильное значение${percent}`;
		console.log(message);
	} else if (typeof contribution !== "number") {
		message = `Параметр "Начальный взнос" содержит неправильное значение${contribution}`;
		console.log(message);
} else if (typeof amount !== "number") {
		message = `Параметр "Сумма ипотеки" содержит неправильное значение${amount}`;
		console.log(message);
	}
	
// 	вторая попытка
//let arrParsed = [parseInt(percent), parseInt(contribution), parseInt(amount)];
//      for (let i = 0; i < arrParsed.length; i++){
//       if (isNaN(arrParsed[i])) { 
// 		let  message =  `Параметр содержит неправильное значение`;
// 		console.log(message); 
// 	   } else if (date == undefined){
// 	   	message = `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
// 	   	console.log(message); 
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
let monthsToPay = Math.round(remainsFullDays/30);

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