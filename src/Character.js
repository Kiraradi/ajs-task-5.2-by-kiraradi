const correctTypes = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    this.checkTheName(name);
    this.checkType(type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  checkTheName(name) {
    if (name.length <= 2 && name.length < 10) {
      throw new Error('Некорректное имя');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkType(type) {
    if (!correctTypes.some((typeFromArray) => typeFromArray === type)) {
      throw new Error('Некорректный тип');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж мертв');
    }
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
