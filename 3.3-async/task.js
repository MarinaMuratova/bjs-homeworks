class AlarmClock{
	constructor(){
		this.alarmCollection = [];  //Создайте свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
		this.timerId = null; //Создайте свойство timerId для хранения id таймера без начального значения.
	}

	addClock(time, callback, id){ //Принимает параметр времени, функции-колбека, идентификатора создаваемого звонка
		if (!id){ //(id == null) передан ли параметр id. Если параметр не передан, выведите ошибку. if (!id) - такая запись эквивалентна проверкам id == 0, id == undefined, id == false, id == ""
			throw new Error('параметр id не передан');
		}
		if (this.alarmCollection.some((element) => element.id === id)){ //есть ли какой-нибудь звонок с уже существующим id. Если есть, выведите ошибку
			throw new Error('звонок с уже существующим id');
		}
		let obj = {id, time, callback};
		this.alarmCollection.push(obj); //добавьте в массив звонков объект со свойствами id, time, callback.
	}

	removeClock(id){ //Принимает id звонка, который следует удалить
		const checkId = this.alarmCollection.filter((element) => element === id); // если в большом массиве нет такого id, то вернется пустой массив.
		if (checkId.length == 0){ // если длина массива =0, значит, вернулся пустой массив, и id в нем не найден
			return false//"Провал, id не найден";
		} else {
			this.alarmCollection.splice(checkId, 1); //Удалите из массива звонков тот, у которого id совпадает с текущим.
			return true //"Нас настиг успех, id удален";
		}
	}

	getCurrentFormattedTime(){
		return new Date().toLocaleTimeString().slice(0,-3); //возвращает текущее время в строковом формате HH:MM
	}

	start(){
		let checkClock = (call) => {if (this.getCurrentFormattedTime() == call.time){return call.result}};//Создайте функцию проверки (checkClock), которая принимает звонок
		if (this.timerId == undefined){ //Если значение идентификатора текущего таймера отсутствует, 
		this.timerId = setInterval(() => this.alarmCollection.forEach((element) => checkClock(element), 1000)); //Результат функции setInterval сохраните в свойстве идентификатора текущего таймера
		}
	}

	stop(){ //Сделайте проверку существования идентификатора текущего таймера. 
      if (this.timerId){//Если у идентификатора текущего таймера есть значение, 
      	clearInterval(this.timerId); //то вызовите функцию clearInterval для удаления интервала, а так же удалите значение из свойства идентификатора текущего таймера
      }      
	}

	printAlarms(){ //С помощью метода forEach выведите информацию о каждом звонке (id и time)
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
       this.alarmCollection.forEach((element) => {
       	console.log(`Будильник №${element.id} заведен на ${element.time}`);
        });
	}

	clearAlarms(){
		stop(); //Вызывает метод остановки интервала. 
		//Удаляет все звонки.
	}
}





