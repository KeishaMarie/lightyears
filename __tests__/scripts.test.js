import {Spaceage} from './../src/scripts.js'

describe('Spaceage', () => {

  test('should return mercuryYears', () => {
  // let spaceage;
  let mercuryYears;
  let spaceage = new Spaceage.mercuryYears(32);
  mercuryAge = spaceage * .24;
  expect(spaceage.mercuryYears).toEqual(7.68);
  });
});