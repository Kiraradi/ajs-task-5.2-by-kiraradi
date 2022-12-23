import Bowman from '../src/Bowman';

const result = new Bowman('Rob', 'Bowman', 75, 5, 75, 90);

test('testing the creation of a new class Bowman', () => {
  const personBowman = {
    name: 'Rob',
    type: 'Bowman',
    health: 75,
    level: 5,
    attack: 75,
    defence: 90,
  };

  expect(result).toEqual(personBowman);
});

test.each([
  ['error name', 'Rb', 'Bowman'],
  ['error type', 'Bob', 'lol'],
])('error throwing test %s', (error, name, type) => {
  expect(() => {
    new Bowman(name, type);
  }).toThrow();
});

test('LevelUp method test', () => {
  result.levelUp();

  const characterBowmanLevelUp = {
    name: 'Rob',
    type: 'Bowman',
    health: 100,
    level: 6,
    attack: 90,
    defence: 108,
  };
  expect(result).toEqual(characterBowmanLevelUp);
});

test('test of the levelUp method with an error', () => {
  result.health = 0;
  expect(() => {
    result.levelUp();
  }).toThrow();
});

test('damage method test', () => {
  const result2 = new Bowman('Rob', 'Bowman', 75, 5, 75, 90);
  result2.damage(20);

  const characterBowmanDamage = {
    name: 'Rob',
    type: 'Bowman',
    health: 73,
    level: 5,
    attack: 75,
    defence: 90,
  };

  expect(result2).toEqual(characterBowmanDamage);
});

test('damage method test 2', () => {
  const result2 = new Bowman('Rob', 'Bowman', 75, 5, 75, 90);
  result2.damage(200000);

  const characterBowmanDamage = {
    name: 'Rob',
    type: 'Bowman',
    health: 0,
    level: 5,
    attack: 75,
    defence: 90,
  };

  expect(result2).toEqual(characterBowmanDamage);
});

test('checking the method of damage with an error', () => {
  const result2 = new Bowman('Rob', 'Bowman', 75, 5, 75, 90);
  result2.damage(200000);
  expect(() => {
    result2.damage(50);
  }).toThrow();
});
