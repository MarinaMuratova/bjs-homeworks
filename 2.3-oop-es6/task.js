// //Задача1 

// class Weapon{
//   constructor(name, attack, durability, range){
//     this.name = name;
//     this.attack = attack;
//     this.durability = durability;
//     this.range = range;
//     this.startDurability = durability;
//   }
//   takeDamage(damage){
//   	if (this.durability == Infinity){
//       return this.durability;
//     }
//   	let newDurability = this.durability - damage;
//     this.durability = newDurability;
//     if (this.durability > 0 ){
//     	return this.durability;
//     } else {
//     	 return this.durability = 0;
//     }
    
//   }
//   getDamage(){
//   	if (this.durability == 0){
//   		return 0;
//   	}
//   	if (this.durability >= 0.3 * this.startDurability){
//   		return this.attack;
//   	} else{
//   		return this.attack / 2;
//   	}
//   }
//   isBroken(){
//   	if (this.durability > 0){
//   		return false;
//     }
//     }
// }

// const arm = new Weapon ('Рука', 1, Infinity, 1);
  
// const bow = new Weapon('Лук', 10, 200, 1);
  
// const sword = new Weapon('Меч', 25, 500, 1);

// const knife = new Weapon('Нож', 5, 300, 1);
  
// const staff = new Weapon('Посох', 8, 300, 2);


// const longBow = new Weapon('Длинный лук', 15,200,  4); 
// const axe = new Weapon('Секира', 27, 800, 1);
// const stormStaff = new Weapon('Посох Бури', 10, 300, 3);

//Задача 1, вариант 2

class Weapon{
  constructor(object){
    this.name = object.name;
    this.attack = object.attack;
    this.durability = object.durability;
    this.range = object.range;
    this.startDurability = object.durability;
  }
  takeDamage(damage){
   if (this.durability == Infinity){
      return this.durability;
    }
   let newDurability = this.durability - damage;
    this.durability = newDurability;
    if (this.durability > 0 ){
     return this.durability;
    } else {
      return this.durability = 0;
    }
    
  }
  getDamage(){
   if (this.durability == 0){
     return 0;
   }
   if (this.durability >= 0.3 * this.startDurability){
     return this.attack;
   } else{
     return this.attack / 2;
   }
  }
  isBroken(){
   if (this.durability > 0){
     return false;
    } else{
      return true;
    }
    }
}

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

//улучшенные
const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});

const axe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

const stormStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});



//Задача 2


class Arm extends Weapon{
  constructor(){
    super({name: 'Рука', attack: 1, durability: Infinity, range: 1})
  }
}

class Bow extends Weapon{
  constructor(){
    super({name: 'Лук', attack: 10, durability: 200, range: 3})
  }
} 

class Sword extends Weapon{
  constructor(){
    super({name: 'Меч', attack: 25, durability: 500, range: 1})
  }
}
  
class Knife extends Weapon{
  constructor(){
    super({name: 'Нож', attack: 5, durability: 300, range: 1})
  }
}

class Staff extends Weapon{
  constructor(){
    super({name: 'Посох', attack: 8, durability: 300, range: 2})
  }
}


//улучшенные
class LongBow extends Bow{
  constructor(){
    super()
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword{
  constructor(){
    super()
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaff extends Staff{
  constructor(){
    super()
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

//Задача 3
class StudentLog{
  constructor(name){
    this.name = name;
    this.data = {};
  }
    getName(){
    return this.name
    }
  
  addGrade(grade, subject){
    this.grade = grade;
    this.subject = subject;
    this.data[subject] = [];
    if (typeof grade == 'number'){
      this.data[subject].push(this.grade)
    }
    if ((typeof grade !== 'number') || grade < 1 || grade > 5){
      console.warn(`Вы пытались поставить оценку "${this.grade}" по предмету "${this.subject}". Допускаются только числа от 1 до 5`)
    }
      return this.data[subject].length
    } 
  
  getAverageBySubject(subject){
    if (this.data[subject] == null){
      return 0;
    }
    let sum = 0;
     for (let i = 0; i < this.data[subject].length; i++){
       sum += this.data[subject][i];
     }
    return sum / this.data[subject].length; //почему-то длина = 1. Из-за этого не получается посчитать среднюю оценку
  }
  
  getTotalAverage(){
    //идей вообще никаких
  }

}










