function getResult(a,b,c){
 let discriminant = b ** 2 - 4 * a * c;
 let x = [];
 
  if (discriminant > 0) {
	 let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	 let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	 x = [x1, x2];
    } else if (discriminant === 0) {
         x1 = -b / (2 * a); 
         x = [x1];
	    } 

 return x;
}

function getAverageMark(marks){
  let averageMark = 0;
  let sum = 0;
  if (marks.length == 0){
    return 0;
  } else if (marks.length > 5 ) {
     console.log(`Оценок больше 5, а именно ${marks.length}`);
     marks.splice(5);
    } 
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      } 
 return sum / marks.length;
}


function askDrink(name,dateOfBirthday){
 let currentAge = new Date().getFullYear()  - dateOfBirthday.getFullYear();
   return (currentAge > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}




