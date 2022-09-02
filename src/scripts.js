//Business Logic

export default class Spaceage {
  constructor(mercuryAge, venusAge, marsAge, jupiterAge, lifeEx) {
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;
  this.marsAge = marsAge;
  this.jupiterAge = jupiterAge;
  this.lifeEx = lifeEx;
  }

  planetAge () {
    let earthYearsInput;
    this.mercuryAge = earthYearsInput * .24;
    this.venusAge = earthYearsInput * .62;
    this.marsAge = earthYearsInput * 1.88;
    this.jupiterAge = earthYearsInput * 11.86;
  };
};