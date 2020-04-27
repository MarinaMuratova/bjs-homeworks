function getSolutions(a,b,c){
 let discriminant = b ** 2 - 4 * a * c;
 let solution = {
    D: discriminant,
 	roots: []
 }

 
  if (discriminant > 0) {
	 let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	 let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	 solution = {
    D: discriminant,
 	roots: [x1, x2]
     }
    } else if (discriminant === 0) {
         x1 = -b / (2 * a); 
         solution = {
    D: discriminant,
 	roots: [x1]
     }
	    } 

 return solution
}


function showSolutionsMessage(a,b,c){
	let result = getSolutions(a,b,c);
	let messageTask = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`;
	let messageD = `Значение дискриминанта: ${this.D}`;

}