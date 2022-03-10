import Earthling from './../src/js/earthling.js'

describe ('Earthling', () => {

  test('Should create an Earthling object ', () => {
    const earthling = new Earthling(29, 80);
    expect(earthling.age).toEqual(29)
  });
});