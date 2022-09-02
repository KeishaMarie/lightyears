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
    let earthYears;
    this.mercuryAge = earthYears * .24
    return mercuryAge
  }
}

// in planetAge i will multiply users input of earthyears by .24 which is mercuryAge's calculation.
// earthYears * .24 = mercuryAge