export default class Earthling {
  constructor(earthAge, ethnicity) {
    this.earthAge = earthAge;
    this.ethnicity = ethnicity; 
  }
  lifeExp() {
    if (this.ethnicity === 'White') {
      this.lifeExpectancy = 78;
    }
  }
  mercuryAge() {
    this.mercuryAge = Math.floor(this.earthAge / .24);
  }
}