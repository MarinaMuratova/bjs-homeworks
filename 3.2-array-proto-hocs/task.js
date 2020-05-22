function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(500); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

//вариант 1
function compareArrays( arr1, arr2 ){
	const checkElement = (element, index) => element === arr2[index];
	return arr1.length == arr2.length && arr1.every(checkElement);
}

//вариант 2
// function compareArrays( arr1, arr2 ){
// 	return arr1.length == arr2.length && arr1.every((element, index)=> element === arr2[index])
// }


function memorize(fn, limit) {
  let memory = [];

  return function func(...args){
     let obj = {};
     
     let argsToSearch = args;
     let foundObject = memory.find((element) => compareArrays(element.args, argsToSearch));
       if (foundObject) {
         return foundObject.result;
        } 
      let resultWithNewArgs = fn.apply(null, argsToSearch);
      obj.args = argsToSearch;
     obj.result = resultWithNewArgs;
      memory.push(obj);
       if (memory.length > limit) {
                memory.shift();
        } 
    return resultWithNewArgs; 
  }    
}


function testCase(testFunction, timer){
	const arrayWithArrays = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
	console.time('timer');
	for (let i = 0; i < 100; i++){
      arrayWithArrays.forEach((element) => testFunction.apply(null, element));
	}
	console.timeEnd('timer');
}








