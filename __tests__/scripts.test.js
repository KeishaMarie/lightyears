import Spaceage from './../src/scripts.js'

describe('Spaceage', () => {
  
  let spaceage 
   beforeEach(() => {
    spaceage = new Spaceage(32)
    let mercuryage = spaceage.calculateMercuryAge()
   });
  test('should return mercuryAge based on earthYear 32', () => {
    expect(mercuryage).toEqual(7.68);
  });


});