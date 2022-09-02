import {Spaceage} from './../src/scripts.js'

describe('Spaceage', () => {
  
  const earthYearsInput = 32
  let mercuryAge;
  test('should return mercuryAge based on earthYear 32', () => {
    expect(planetAge()).toEqual(7.68);
  });


});
