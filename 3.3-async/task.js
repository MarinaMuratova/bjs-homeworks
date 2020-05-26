class AlarmClock{
	constructor(){
		this.alarmCollection = [];  
		this.timerId = null; 
	}

	addClock(time, callback, id){
		if (!id){ 
			throw new Error('параметр id не передан');
		}

		if (this.alarmCollection.some((element) => element.id === id)){ 
			throw new Error('звонок с уже существующим id');
		}

		let obj = {id, time, callback};
		this.alarmCollection.push(obj); 
	}
    
	removeClock(id){ 
		const checkId = this.alarmCollection.filter((element) => element.id === id); 
		if (checkId.length == 0){ 
			return false
		} else {
			this.alarmCollection.splice(checkId, 1); 
			return true 
		}
	}

	getCurrentFormattedTime(){
		return new Date().toLocaleTimeString().slice(0,-3); 
	}

    //вариант 1
	start(){
		let checkClock = (call) => {
			if (this.getCurrentFormattedTime() == call.time){
				return call.callback()
			}
		};
		if (this.timerId == undefined){  
		    this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000); 
		}
	}

	//вариант 2
    // start(){
    //     let currentTime = this.getCurrentFormattedTime;
    //     let checkClock = (call) => {if (currentTime() == call.time){return call.callback}};
    //       if (this.timerId == undefined){  
		  //   this.timerId = setInterval(() => this.alarmCollection.forEach((element) => checkClock(element), 1000)); //Результат функции setInterval сохраните в свойстве идентификатора текущего таймера
		  // }
    // }   

	stop(){ 
        if (this.timerId){
      	  clearInterval(this.timerId); 
          this.timerId = null;
        }      
	}

	printAlarms(){
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
           this.alarmCollection.forEach((element) => {
              console.log(`Будильник №${element.id} заведен на ${element.time}`);
            });
	}

	clearAlarms(){
		stop(); 
		this.alarmCollection = [];
	}
}


function testCase(){
	const alarm = new AlarmClock();
	alarm.start();
   alarm.addClock('14:49', () => {
   	console.log("Иди спать");
   }, 1);
   alarm.addClock('14:50', () => {
   	console.log("Иди спать быстро");
   	alarm.removeClock(2)
   }, 2);

   alarm.addClock('14:51', () => {
   	console.log("Ты идешь?");
    alarm.clearAlarms();
    alarm.printAlarms();
   }, 3);

    alarm.printAlarms();
}













