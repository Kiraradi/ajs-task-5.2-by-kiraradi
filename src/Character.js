const correctTypes = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    this.checkTheName();
    this.checkType();
  }

  checkTheName() {
    if (this.name.length <= 2 && this.name.length < 10) {
      throw new Error('Некорректное имя');
    }
  }

  checkType() {
    if (!correctTypes.some((type) => type === this.type)) {
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
