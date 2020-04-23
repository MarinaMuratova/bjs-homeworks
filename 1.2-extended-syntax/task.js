function getResult(a,b,c){
 let discriminant = b ** 2 - 4 * a * c;
 console.log(`D = ${discriminant}`);
 let x = [];
 let x1 = 0;
 let x2 = 0;
  if (discriminant > 0) {
	 x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	 x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	 x = [x1, x2];
     console.log(`x1 = ${x1}`);
     console.log(`x2 = ${x2}`);
    } else if (discriminant === 0) {
         x1 = -b / (2 * a); 
         x = [x1];
         console.log(`x1 = ${x1}`);
	    } else {
		     x = [];
          }

 return x;
}
getResult(1, 2, 17);



let array = [1,2,3,4,5];

function getAverageMark(marks){
  let averageMark = 0;
  let sum = 0;
  if (marks.length > 5 ) {
     console.log(`Оценок больше 5, а именно ${marks.length}`);
     marks.splice(5);
     console.log(marks);
       for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length
       }
  } else if (marks.length <= 5) {
       for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
       averageMark = sum / marks.length
       }
    } else {
      averageMark = null;
    }
return averageMark;
}
getAverageMark(array);



function askDrink(name,dateOfBirthday){
	function getFullYear() {
	 let currentAge = 2020 - dateOfBirthday;
     return currentAge;
	}
 let age = getFullYear(); 
 let result = (age > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
 return result;
}
askDrink('Marina', 2010);





