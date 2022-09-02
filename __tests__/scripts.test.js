import {Spaceage} from './../src/scripts.js'

describe('Spaceage', () => {
  const earthYears = 32
  let mercuryAge = new this.mercuryAge();
  mercuryAge = earthYears * .24;
  test('should return mercuryAge', () => {
    expect(mercuryAge).toEqual(7.68);
  });
});