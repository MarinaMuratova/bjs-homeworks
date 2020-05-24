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
		    this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element), 1000)); 
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
    alarm.addClock('19:41', () => console.log("Иди спать"), 1);
    alarm.addClock('19:49', () => console.log("Иди спать"), 2);
    alarm.addClock('21:01', () => console.log("Иди спать"), 3);
    alarm.printAlarms();
    alarm.removeClock(3);
    alarm.printAlarms();
    alarm.start();
    alarm.clearAlarms();
    alarm.printAlarms();
}














