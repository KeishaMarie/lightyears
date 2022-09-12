import Spaceage from './../src/scripts.js'

describe('Spaceage', () => {
  
  let spaceage;

   beforeEach(() => {
    spaceage = new Spaceage(32);
    spaceage.planetAge();
    spaceage.lifeExpectancy(30);
    spaceage.dogYearAge();

   });

  test('should return mercuryAge based on earthAge 32', () => {
    expect(spaceage.mercuryAge).toEqual(7.68);
  });

  test('should return venusAge based on earthAge 32', () => {
    expect(spaceage.venusAge).toEqual(19.84);
  })

  test('should return years left if they were on mercury', () => {
    expect(spaceage.mercuryYearsLeft).toEqual(.48);
  })

  test('should return years left if they were on venus', () => {
    expect(spaceage.venusYearsLeft).toEqual(1.24);
  })

  test('should return years passed life expectancy on mercury', () => {
    expect(spaceage.mercuryYearsLeft).toEqual(.48)
  })

  test('should return Keith Richards age on Jupiter in dog years in the year 2073', () => {
    expect(spaceage.dogYearAge).toEqual(868)
  })
});