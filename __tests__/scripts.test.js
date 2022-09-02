import {Spaceage} from './../src/scripts.js'

describe('Spaceage', () => {

  test('should return mercuryYears', () => {
  // let spaceage;
  let mercuryYears = 32
  let spaceage = new Spaceage.constructor(mercuryYears);
  mercuryAge = spaceage * .24;
  expect(spaceage.mercuryYears).toEqual(7.68);
  });
});