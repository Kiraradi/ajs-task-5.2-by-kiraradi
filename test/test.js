import Bowman from '../src/Bowman';

test('testing the creation of a new class Bowman', () => {
  const result = new Bowman('Rob', 'Bowman');
  const personBowman = {
    name: 'Rob',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(personBowman);
});

test.each([
  ['error name', 'Rb', 'Bowman'],
  ['error type', 'Bob', 'lol'],
])('error throwing test %s', (error, name, type) => {
  expect(() => {
    new Bowman(name, type);// eslint-disable-line no-new
  }).toThrow();
});

test('LevelUp method test', () => {
  const result = new Bowman('Rob', 'Bowman');
  result.levelUp();

  const characterBowmanLevelUp = {
    name: 'Rob',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(result).toEqual(characterBowmanLevelUp);
});

test('test of the levelUp method with an error', () => {
  const result = new Bowman('Rob', 'Bowman');
  result.health = 0;
  expect(() => {
    result.levelUp();
  }).toThrow();
});

test('damage method test', () => {
  const result = new Bowman('Rob', 'Bowman');
  result.damage(20);

  const characterBowmanDamage = {
    name: 'Rob',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(characterBowmanDamage);
});

test('damage method test 2', () => {
  const result = new Bowman('Rob', 'Bowman');
  result.damage(200000);

  const characterBowmanDamage = {
    name: 'Rob',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(characterBowmanDamage);
});

test('checking the method of damage with an error', () => {
  const result = new Bowman('Rob', 'Bowman');
  result.damage(200000);
  expect(() => {
    result.damage(50);
  }).toThrow();
});
