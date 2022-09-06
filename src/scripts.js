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
  
  }

  planetAge () {
    let mercuryAge = this.earthAge * .24
    let venusAge = this.earthAge * .62;
    let marsAge = this.earthAge * 1.88;
    let jupiterAge = this.earthAge * 11.86;
    this.mercuryAge = mercuryAge
    this.venusAge = venusAge
    this.marsAge = marsAge
    this.jupiterAge = jupiterAge
  };

  lifeExpectancy (averageEarthLife) {
    let earthAge = this.earthAge
    let yearsLeft = averageEarthLife - earthAge
    let mercuryYearsLeft = yearsLeft * .24
    let venusYearsLeft = yearsLeft * .62;
    let marsYearsLeft = yearsLeft * 1.88;
    let jupiterYearsLeft = yearsLeft * 11.86;
    this.mercuryYearsLeft = mercuryYearsLeft
    this.venusYearsLeft = venusYearsLeft
    this.marsYearsLeft = marsYearsLeft
    this.jupiterYearsLeft = jupiterYearsLeft
  }
};


