//Business Logic

export default class Spaceage {
  constructor(earthAge) {
    this.earthAge = earthAge
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
    this.mercuryYearsLeft;
    this.venusYearsLeft;
    this.marsYearsLeft;
    this.jupiterYearsLeft;
    this.dogYears;
    this.jupiterDogYears;
  
  }

  planetAge () {
    this.mercuryAge = this.earthAge * .24
    this.venusAge = this.earthAge * .62;
    this.marsAge = this.earthAge * 1.88;
    this.jupiterAge = this.earthAge * 11.86;
  };

  lifeExpectancy (averageEarthLife) {
    let earthAge = this.earthAge
    let yearsLeft = averageEarthLife - earthAge
    this.mercuryYearsLeft = Math.abs(yearsLeft * .24);
    this.venusYearsLeft = Math.abs(yearsLeft * .62);
    this.marsYearsLeft = Math.abs(yearsLeft * 1.88);
    this.jupiterYearsLeft = Math.abs(yearsLeft * 11.86);
  };

  dogYearAge(earthAge) {
    this.dogYears = earthAge * 7
    this.jupiterDogYears = this.dogYears * 11.86;
  }
};


