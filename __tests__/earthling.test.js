import Earthling from './../src/js/earthling.js'

describe ('Earthling', () => {

  test('Should create an Earthling object', () => {
    const earthling = new Earthling(29, 80);
    expect(earthling.earthAge).toEqual(29);
    expect(earthling.lifeExp).toEqual(80);
  });
});