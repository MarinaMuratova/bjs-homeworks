//Задача1 

class Weapon{
  constructor(name, attack, durability, range){
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.startDurability = durability;
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
    	 return 0;
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
    }
    }
}

const arm = new Weapon ('Рука', 1, Infinity, 1);
  
const bow = new Weapon('Лук', 10, 200, 1);
  
const sword = new Weapon('Старый меч', 25, 500, 1);

const knife = new Weapon('Нож', 5, 300, 1);
  
const staff = new Weapon('Посох', 8, 300, 2);


const longBow = new Weapon('Длинный лук', 15,200,  4); 
const poleaxe = new Weapon('Секирa', 27, 800, 1);
const blizzardStaff = new Weapon('Посох Бури', 10, 300, 3);

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
      return 0;
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
  name: 'Старый меч',
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

const poleaxe = new Weapon({
  name: 'Секирa',
  attack: 27,
  durability: 800,
  range: 1,
});

const blizzardStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});





