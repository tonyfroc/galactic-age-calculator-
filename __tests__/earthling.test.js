import Earthling from './../src/js/earthling.js'

describe ('Earthling', () => {

  test('Should create an Earthling object', () => {
    const earthling = new Earthling(29, 'White');
    expect(earthling.earthAge).toEqual(29);
    expect(earthling.ethnicity).toEqual('White');
  });
  test('Should return the correct life expectancy for a White Earthling', () => {
    const earthling = new Earthling(29, 'White');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(78)
  });
  test('Should return the correct life expectancy for an Asian earthling', () => {
    const earthling = new Earthling(29, 'Asian');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(83)
  });
  test('Should return the correct life expectancy for a Black earthling', () => {
    const earthling = new Earthling(29, 'Black');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(73)
  });
  test('Should return the correct life expectancy for a Black earthling', () => {
    const earthling = new Earthling(29, 'Latino');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(80)
  });
  test('Should return the correct life expectancy for a Black earthling', () => {
    const earthling = new Earthling(29, 'Native American');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(75)
  });
  test('Should return the correct age for an Earthling in Mercury years', () => {
    const earthling = new Earthling(29, 'White');
    earthling.mercuryAge();
    expect(earthling.mercuryAge).toEqual(120)
  });
  test('Should determine how many years an Earthling has exceeded their Earth life expectancy in Mercury years', () => {
    const earthling = new Earthling(29, 'White');
    earthling.lifeExp();
    earthling.mercuryAge();
    expect(earthling.mercuryLifeExpectancy).toEqual(`You have exceeded your Earth life expectancy by 42 years`)
  });
});