import Earthling from './../src/js/earthling.js'

describe ('Earthling', () => {

  test('Should create an Earthling object', () => {
    const earthling = new Earthling(29, 'White');
    expect(earthling.earthAge).toEqual(29);
    expect(earthling.ethnicity).toEqual('White');
  });
  test('Should return the correct life expectancy for a white person', () => {
    const earthling = new Earthling(29, 'White');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(78)
  });
  test('Should return the correct age for an Earthling in Mercury years', () => {
    const earthling = new Earthling(29, 'White');
    earthling.mercuryAge();
    expect(earthling.mercuryAge).toEqual(120)
  });
});