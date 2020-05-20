//Задача 1
//вариант 1
// function parseCount(value){
// 	let newValue = Number.parseInt(value, 10);
// 	  if(isNaN(newValue)){
// 	  	throw "Невалидное значение";
// 	  }
//    return newValue;
// }

//вариант 2
function parseCount(value){
	let newValue = Number.parseInt(value, 10);
	  if(isNaN(newValue)){
	  	throw new Error('Невалидное значение');
	  }
   return newValue;
}


function validateCount(value){
	try {
		return parseCount(value);
	}
   
    catch(err){
	  	return err;
    }
}


//Задача 2
class Triangle {
	constructor(a,b,c){
	this.a = a;
	this.b = b;
	this.c = c;
    const sumAB = this.a + this.b;
    const sumAC = this.a + this.c;
    const sumBC = this.b + this.c;
    
	    if (sumAB < this.c || sumBC < this.a || sumAC < this.b){  
		   throw new Error('Треугольник с такими сторонами не существует');
        }
    }
        getPerimeter(){
    	 return this.a + this.b + this.c;
        }
        getArea(){
        	const semiPerimetr = (this.a + this.b + this.c)/2;
        	const area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a) * (semiPerimetr-this.b) * (semiPerimetr-this.c));
        	return parseFloat(area.toFixed(3))
        }
}


function getTriangle(a,b,c){
	try{
		let triangle = new Triangle(a,b,c);
		return triangle;
	}
    catch(err){
		return {
	        getPerimeter(){
    	      return "Ошибка! Неправильный треугольник";
            },
            getArea(){
        	 return "Ошибка! Неправильный треугольник";
            }	
	    }
    }	
}

	









