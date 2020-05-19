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

  return function func() {
     let obj = {};
     obj.args = Array.from(arguments);
     // console.log(obj.args);
     obj.result = fn.apply(null, arguments);
     // console.log(obj.result);
     
     // console.log(memory);
     let argsToSearch = Array.from(arguments);
     // console.log(argsToSearch);

     let arrayFound = memory.find((element) => compareArrays(element.args, argsToSearch));
     // console.log(arrayFound);
       if (arrayFound !== undefined) {
         return memory.find((element) => element.result);
        } else {
            let resultWithNewArgs = fn.apply(null, argsToSearch);
           memory.push(obj);
              if (memory.length >= limit) {
                memory.shift(obj);
              } 
        return resultWithNewArgs; 
        }
    }
}





function testCase(testFunction, tiemer){
	const arrayWithArrays = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
	console.time(tiemer);
	for (let i = 0; i < 100; i++){
      testFunction.forEach((element) => testFunction.apply(null, arrayWithArrays[i]));
	}
	console.timeEnd(tiemer);
}








