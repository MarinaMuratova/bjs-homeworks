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
  return message;
}
