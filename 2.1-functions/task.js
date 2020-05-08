//Задача 1
function getSolutions(a, b, c) {
  let solution = {
    D: b ** 2 - 4 * a * c,
    roots: []
  };

  if (solution.D > 0) {
    let x1 = (-b + Math.sqrt(solution.D)) / (2 * a);
    let x2 = (-b - Math.sqrt(solution.D)) / (2 * a);
    solution.roots = [x1, x2];
  } else if (solution.D === 0) {
    x1 = -b / (2 * a);
    solution.roots = [x1];
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
  let averageMarks = [];
for (subject in data) {
    let marks = 0;
    marks += getAverageMark(data[subject]); 
    data[subject] = getAverageMark(data[subject]);
    averageMarks.push(marks);
    if (marks!==0){
       averageMarks.push(marks);
    };
};
let average = getAverageMark(averageMarks); 
 data.average = average;
 return data
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
}



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


































