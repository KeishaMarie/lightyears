//Business Logic

export default class Spaceage {
  constructor(earthAge) {
  this.earthAge = earthAge
  this.mercuryAge;
  this.venusAge;
  this.marsAge;
  this.jupiterAge;
  this.lifeEx;
  
  }

  planetAge () {
    this.mercuryAge = this.earthAge * .24
    this.venusAge = this.earthAge * .62;
    this.marsAge = this.earthAge * 1.88;
    this.jupiterAge = this.earthAge * 11.86;
  };
  calculateMercuryAge () {
    mercuryAge = this.earthAge * .24
    this.mercuryAge = this.mercuryAge
    return mercuryAge
  }
};


// , venusAge, marsAge, jupiterAge, lifeEx)