import {Spaceage} from './../src/scripts.js'

describe('Spaceage', () => {
  
  const earthYears = 32
  let mercuryAge;
  test('should return mercuryAge based on earthYear 32', () => {
    expect(mercuryAge).toEqual(7.68);
  });
});
