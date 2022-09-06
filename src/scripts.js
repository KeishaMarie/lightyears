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
    let mercuryAge = this.earthAge * .24
    let venusAge = this.earthAge * .62;
    let marsAge = this.earthAge * 1.88;
    let jupiterAge = this.earthAge * 11.86;
    this.mercuryAge = mercuryAge
    this.venusAge = venusAge
    this.marsAge = marsAge
    this.jupiterAge = jupiterAge
  };
};


