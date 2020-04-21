 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */


    let algebra = 10;
    let geography = 10;
    let physics = 10;

function averageMark(a, g, p) {
	let averageOfThreeSub = (a + g + p) / 3;
	return averageOfThreeSub;
}
averageMark (algebra, geography, physics);

let myName = 'Marina';
function sayHello(userName) {
	let message = 'Привет, мир! Меня зовут ' + userName;    
	return message;
}
sayHello(myName);

let x = 2;
let y = 22;
let z = 0;

function calculateFormula(a, b, c) {
	let result = a * b + 5 * c + a - 1;
    return result;
}

calculateFormula(x, y, z);