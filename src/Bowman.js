import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level, attack, defence);
  }
}
