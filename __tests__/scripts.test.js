import Spaceage from './../src/scripts.js'

describe('Spaceage', () => {
  
  let spaceage;

   beforeEach(() => {
    spaceage = new Spaceage(32);
    spaceage.planetAge();
    spaceage.lifeExpectancy(30);
    spaceage.dogYearAge(124);

   });

  test('should return mercuryAge based on earthAge 32', () => {
    expect(spaceage.mercuryAge).toEqual(7.68);
  });

  test('should return venusAge based on earthAge 32', () => {
    expect(spaceage.venusAge).toEqual(19.84);
  })

  test('should return marsAge based on earthAge 32', () => {
    expect(spaceage.marsAge).toEqual(60.16);
  })

  test('should return jupiterAge based on earthAge 32', () => {
    expect(spaceage.jupiterAge).toEqual(379.52);
  })







  
  test('should return years left if they were on mercury', () => {
    expect(spaceage.mercuryYearsLeft).toEqual(.48);
  })

  test('should return years left if they were on venus', () => {
    expect(spaceage.venusYearsLeft).toEqual(1.24);
  })

  test('should return years left if they were on Mars', () => {
    expect(spaceage.marsYearsLeft).toEqual(3.76);
  })

  test('should return years left if they were on Jupiter', () => {
    expect(spaceage.jupiterYearsLeft).toEqual(23.72);
  })



  test('should return years passed life expectancy on mercury', () => {
    expect(spaceage.mercuryYearsLeft).toEqual(.48);
  })

  test('should return years passed life expectancy on Venus', () => {
    expect(spaceage.venusYearsLeft).toEqual(1.24);
  })

  test('should return years passed life expectancy on Mars', () => {
    expect(spaceage.marsYearsLeft).toEqual(3.76);
  })

  test('should return years passed life expectancy on Jupiter', () => {
    expect(spaceage.jupiterYearsLeft).toEqual(23.72);
  })

  test('should return Keith Richards age on Jupiter in dog years in the year 2073', () => {
    expect(spaceage.jupiterDogYears).toEqual(10294.48)
  })
});
