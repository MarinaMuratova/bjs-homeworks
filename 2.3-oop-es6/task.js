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


class LongBow extends Weapon{
   constructor(durability,name, attack,  range){ //попытка вынести durability на первое место для наследования
	  super(durability)
      this.name = name;
    this.attack = attack;
    this.range = range;
    } 
}

class Poleaxe extends Weapon{
constructor(name, attack, durability, range){
	  super(range)

	   this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.startDurability = durability;
    } 
}

class BlizzardStaff extends Weapon{
constructor(name, attack, durability, range){
	  super(durability)

	  this.name = name;
    this.attack = attack;
    this.range = range;
    this.startDurability = durability;
    } 
}

const longBow = new LongBow(200,'Длинный лук', 15,  4); //попытка вынести durability на первое место для наследования
const poleaxe = new Poleaxe('Секирa', 27, 800, 1);
const blizzardStaff = new BlizzardStaff('Посох Бури', 10, 300, 3);




