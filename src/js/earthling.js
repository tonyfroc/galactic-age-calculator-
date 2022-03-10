export default class Earthling {
  constructor(earthAge, ethnicity) {
    this.earthAge = earthAge;
    this.ethnicity = ethnicity; 
  }
  lifeExp() {
    if (this.ethnicity === 'White') {
      this.lifeExpectancy = 78;
    } else if (this.ethnicity === 'Black') {
      this.lifeExpectancy = 73;
    } else if (this.ethnicity === 'Asian') {
      this.lifeExpectancy = 83;
    } else if (this.ethnicity === 'Latino') {
      this.lifeExpectancy = 80;
    } else if (this.ethnicity === 'Native American') {
      this.lifeExpectancy = 75;
    }
  }
  mercuryAge() {
    this.mercuryAge = Math.floor(this.earthAge / .24);
  }
}