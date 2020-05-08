function getAnimalSound(animal) {
	// let sound = animal.sound;
    if (animal === undefined){
    	return null;
    } 
    	return animal.sound;
}

function getAverageMark(marks) {
    let sum = 0;
     if (marks.length == 0){
    	return 0;
     }
     for (let i = 0; i < marks.length; i++){
    	sum += Number(marks[i]);
     }
    return Math.round(sum/marks.length);
}

function checkBirthday(birthday) {
    let currentDate = new Date().getTime();

    if (birthday === null){
    	return age < 18;
    }

    let userBirthday = new Date(birthday).getTime();
    let diff = currentDate - userBirthday;
    let age = diff * 3.1713814027394087e-11;

    return age > 18;
}