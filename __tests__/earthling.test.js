import Earthling from './../src/js/earthling.js'

describe ('Earthling', () => {

  test('1. Should create an Earthling object', () => {
    const earthling = new Earthling(29, 'White');
    expect(earthling.earthAge).toEqual(29);
    expect(earthling.ethnicity).toEqual('White');
  });
  test('2. Should return the correct age for an Earthling in Mercury years', () => {
    const earthling = new Earthling(29, 'White');
    earthling.mercuryAge();
    expect(earthling.mercuryAge).toEqual(120)
  });
  test('3. Should return the correct life expectancy for a White Earthling', () => {
    const earthling = new Earthling(29, 'White');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(78)
  });
  test('4. Should return the correct life expectancy for an Asian earthling', () => {
    const earthling = new Earthling(29, 'Asian');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(83)
  });
  test('4a. Should return the correct life expectancy for a Black earthling', () => {
    const earthling = new Earthling(29, 'Black');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(73)
  });
  test('4b. Should return the correct life expectancy for a Latino earthling', () => {
    const earthling = new Earthling(29, 'Latino');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(80)
  });
  test('4c. Should return the correct life expectancy for a Native American earthling', () => {
    const earthling = new Earthling(29, 'Native American');
    earthling.lifeExp();
    expect(earthling.lifeExpectancy).toEqual(75)
  });
  test('5. If mercuryAge > lifeExpectancy (Earth), should correctly return mercuryAge - lifeExpectancy', () => {
    const earthling = new Earthling(29, 'White');
    earthling.lifeExp();
    earthling.mercuryAge();
    expect(earthling.mercuryAge).toEqual(120)
    expect(earthling.lifeExpectancy).toEqual(78)
    expect(earthling.mercuryLifeExpectancy).toEqual(`You have exceeded your Earth life expectancy by 42 years`)
  });
  test('6. If lifeExpectancy > mercuryAge, should correctly return lifeExpectancy (Earth) - Mercury Age', () => {
    const earthling = new Earthling(10, 'White');
    earthling.lifeExp();
    earthling.mercuryAge();
    expect(earthling.lifeExpectancy).toEqual(78)
    expect(earthling.mercuryAge).toEqual(41)
    expect(earthling.mercuryLifeExpectancy).toEqual(`You have about 37 years left on Mercury!`)
  });
  test('7. Should return the correct age for an Earthling in Venus years', () => {
    const earthling = new Earthling(60, 'White');
    earthling.venusAge();
    expect(earthling.venusAge).toEqual(96)
  });
  test('8. If venusAge > lifeExpectancy (Earth), should correctly return venusAge minus lifeExpectancy ', () => {
    const earthling = new Earthling(60, 'White');
    earthling.lifeExp();
    earthling.venusAge();
    expect(earthling.venusAge).toEqual(96)
    expect(earthling.lifeExpectancy).toEqual(78)
    expect(earthling.venusLifeExpectancy).toEqual(`You have exceeded your Earth life expectancy by 18 years`)
  });
  test('9. If lifeExpectancy > venusAge, should correctly return lifeExpectancy (Earth) minus venusAge', () => {
    const earthling = new Earthling(10, 'White');
    earthling.lifeExp();
    earthling.venusAge();
    expect(earthling.lifeExpectancy).toEqual(78)
    expect(earthling.venusAge).toEqual(16)
    expect(earthling.venusLifeExpectancy).toEqual(`You have about 62 years left on Venus!`)
  });
});