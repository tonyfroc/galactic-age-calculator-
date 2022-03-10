export default class Earthling {
  constructor(earthAge, ethnicity) {
    this.earthAge = earthAge;
    this.ethnicity = ethnicity; 
  }
  mercuryAge() {
    this.mercuryAge = Math.floor(this.earthAge / .24);
  }
}