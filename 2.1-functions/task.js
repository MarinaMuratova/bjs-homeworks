//Задача 1
function getSolutions(a, b, c) {
  let solution = {
    D: b ** 2 - 4 * a * c,
    roots: []
  };

  if (solution.D > 0) {
    let x1 = (-b + Math.sqrt(solution.D)) / (2 * a);
    let x2 = (-b - Math.sqrt(solution.D)) / (2 * a);
    solution = {
      D: solution.D,
      roots: [x1, x2]
    };
  } else if (solution.D === 0) {
    x1 = -b / (2 * a);
    solution = {
      D: solution.D,
      roots: [x1]
    };
  }
  return solution;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  let messageTask = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`;
  let messageD = `Значение дискриминанта: ${result.D}`;
  let message = "Уравнение не имеет вещественных корней";
  if (result.roots.length >= 2) {
    message = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
  } else if (result.roots.length == 1) {
    message = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
  }
  return `${messageTask} \n${messageD} \n${message}`
}



//Задача 2
// let data = {
// 	algebra: [],
// 	geometry: [],
//     russian: [],
//     physic: [],
//     music: [],
//     english: [],
//     poetry: [],
//     chemistry: [],
//     french: []
// 	};

function getAverageScore(data) {
	let averageMark = {};
    averageMark.algebra = getAverageMark(data.algebra);
  	averageMark.geometry= getAverageMark(data.geometry);
    averageMark.russian= getAverageMark(data.russian);
    averageMark.physic = getAverageMark(data.physic);
    averageMark.music= getAverageMark(data.music);
    averageMark.english= getAverageMark(data.english);
    averageMark.poetry= getAverageMark(data.poetry);
    averageMark.chemistry= getAverageMark(data.chemistry);
    averageMark.french= getAverageMark(data.french);
    average = [averageMark.algebra, averageMark.geometry, averageMark.russian, averageMark.physic, averageMark.music,averageMark.english,  averageMark.poetry, averageMark.chemistry, averageMark.french];

    averageMark.average = getAverageMark(average);
  return averageMark;
}


function getAverageMark(marks){
  let sum = 0;
  if (marks.length == 0){
    return 0;
  } 
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      } 
 return sum / marks.length;



// //Задача 3
function getPersonData(secretData){
  let answer = {};
  answer.firstName = getDecodedValue(secretData.aaa);
  answer.lastName = getDecodedValue(secretData.bbb);

return answer
}
function getDecodedValue(secret) {
  if (secret == 0) {
    return 'Родриго';
  } else{
    return 'Эмильо';
  }
}


































