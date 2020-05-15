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
	  	const valueError = new Error('Невалидное значение');
	  	throw valueError;
	  }
   return newValue;
}


function validateCount(value){
	try {
		let newValue = parseCount(value);
		return newValue;
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
		   const sumError = new Error('Треугольник с такими сторонами не существует');
		   throw sumError;
        }
    }
        getPerimeter(){
    	 return this.a + this.b + this.c;
        }
        getArea(){
        	const semiPerimetr = (this.a + this.b + this.c)/2;
        	const area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a) * (semiPerimetr-this.b) * (semiPerimetr-this.c));
        	const roundArea = parseFloat(area.toFixed(3))
        	return roundArea;
        }
}


function getTriangle(a,b,c){
	try{
		let triangle = new Triangle(a,b,c);
		return triangle;
	}
    catch(err){
		return wrongTriangle = {
	        getPerimeter(){
    	      return "Ошибка! Неправильный треугольник";
            },
            getArea(){
        	 return "Ошибка! Неправильный треугольник";
            }	
	    }
    }	
}

	









